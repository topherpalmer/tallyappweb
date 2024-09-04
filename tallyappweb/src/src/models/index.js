// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AdminUser, User, TallyImage, Stats, Game, TeamLevel, Ticket, TeamStats, Player, Team, SeasonOfPlay, Sport, School, UIProfile, League, Media, CurrentSportsSeason, UsersFavsTeam, PlayerStats, GameMedia, GameTicket, TeamPlayers, TeamLeague } = initSchema(schema);

export {
  AdminUser,
  User,
  TallyImage,
  Stats,
  Game,
  TeamLevel,
  Ticket,
  TeamStats,
  Player,
  Team,
  SeasonOfPlay,
  Sport,
  School,
  UIProfile,
  League,
  Media,
  CurrentSportsSeason,
  UsersFavsTeam,
  PlayerStats,
  GameMedia,
  GameTicket,
  TeamPlayers,
  TeamLeague
};