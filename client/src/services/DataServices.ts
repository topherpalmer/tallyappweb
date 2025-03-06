import { DataStore } from '@aws-amplify/datastore';
import { Team, Player, Game, Sport } from '../../../src/models';

class DataServices {
  // Fetch a single team by ID (returns a Promise)
  static async getTeam(id: string): Promise<Team | null> {
    console.log('Fetching team with ID:', id);
    const result = await DataStore.query(Team, id);
    console.log('Fetched team (raw):', result);
    return result !== undefined ? result : null;
  }

  // Fetch players for a team by ID (returns a Promise)
  static async getPlayers(id: string): Promise<Player[]> {
    const team = await DataServices.getTeam(id);
    if (!team) return [];
    const allPlayers = await DataStore.query(Player);
    const filteredPlayers = await Promise.all(
      allPlayers.map(async (player) => {
        const teams = await player.teams.toArray();
        return teams.some((teamRel) => teamRel.id === team.id) ? player : null;
      })
    ).then((results) => results.filter((p): p is Player => p !== null));
    return filteredPlayers;
  }

  // Fetch games with opponents for a team by ID (returns a Promise)
  static async getGames(id: string): Promise<{ game: Game; opponent: Team | null }[]> {
    const team = await DataServices.getTeam(id);
    if (!team) return [];
    const gamesData = await DataStore.query(Game, (g) =>
      g.or((g) => [g.homeTeamId.eq(team.id), g.visitorTeamId.eq(team.id)])
    );
    console.log('Fetched games:', gamesData);
    const gamesWithOpponents = await Promise.all(
      gamesData.map(async (game) => {
        const opponentId = game.homeTeamId === team.id ? game.visitorTeamId : game.homeTeamId;
        const opponent = opponentId ? await DataServices.getTeam(opponentId) : null;
        if (opponent === undefined) {
          console.error('Critical: Unexpected undefined opponent, forcing to null:', opponentId);
          return { game, opponent: null };
        }
        return { game, opponent };
      })
    );
    console.log('Games with opponents (post-processing):', gamesWithOpponents);
    return gamesWithOpponents as { game: Game; opponent: Team | null }[];
  }

  // Fetch sport for a team by ID (returns a Promise)
  static async getSport(id: string): Promise<Sport | null> {
    const team = await DataServices.getTeam(id);
    if (!team || !team.teamSportId) return null;
    console.log('Fetching sport with ID:', team.teamSportId);
    const result = await DataStore.query(Sport, team.teamSportId);
    console.log('Fetched sport (raw):', result);
    return result !== undefined ? result : null;
  }

  // Fetch all teams (returns a Promise)
  static async getAllTeams(): Promise<Team[]> {
    const teams = await DataStore.query(Team);
    return teams;
  }

  // Schedule a new game (mutation)
  static async scheduleGame(
    team: Team,
    opponentId: string,
    gameDate: string,
    location: string,
    isHomeTeam: boolean
  ): Promise<boolean> {
    const awsDateTime = `${gameDate}T12:00:00Z`; // Convert to AWSDateTime
    const newGame = new Game({
      date: awsDateTime,
      location,
      status: 'Scheduled',
      homeTeamId: isHomeTeam ? team.id : opponentId,
      visitorTeamId: isHomeTeam ? opponentId : team.id,
    });

    try {
      await DataStore.save(newGame);
      return true;
    } catch (error) {
      console.error('Error saving game:', error);
      return false;
    }
  }
}

export const dataServices = DataServices;