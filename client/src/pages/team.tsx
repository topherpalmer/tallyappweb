import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Users, Calendar, Trophy, ArrowLeft, Plus } from 'lucide-react';
import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useQuery } from '@tanstack/react-query';
import { dataServices } from '../services/DataServices';
import { Team, Player, Game, Sport } from '../../../src/models';

interface TeamPageProps {
  params: {
    id: string;
  };
}

// Custom hook to fetch team-related data
function useTeamData(id: string) {
  const { data: team, isLoading: isLoadingTeam } = useQuery<Team | null, Error>({
    queryKey: ['teams', id],
    queryFn: () => dataServices.getTeam(id),
    enabled: !!id,
  });

  const { data: players = [], isLoading: isLoadingPlayers } = useQuery<Player[], Error>({
    queryKey: ['teams', id, 'players'],
    queryFn: () => dataServices.getPlayers(id),
    enabled: !!id && !!team,
  });

  const { data: games = [], isLoading: isLoadingGames } = useQuery<
    { game: Game; opponent: Team | null }[],
    Error
  >({
    queryKey: ['teams', id, 'games'],
    queryFn: () => dataServices.getGames(id),
    enabled: !!id && !!team,
  });

  const { data: sport, isLoading: isLoadingSport } = useQuery<Sport | null, Error>({
    queryKey: ['sports', id],
    queryFn: () => dataServices.getSport(id),
    enabled: !!id && !!team,
  });

  const { data: allTeams = [] } = useQuery<Team[]>({
    queryKey: ['allTeams'],
    queryFn: () => dataServices.getAllTeams(),
  });

  return {
    team,
    players,
    games,
    sport,
    allTeams,
    isLoadingTeam,
    isLoadingPlayers,
    isLoadingGames,
    isLoadingSport,
  };
}

export default function TeamPage({ params }: TeamPageProps) {
  const {
    team,
    players,
    games,
    sport,
    allTeams,
    isLoadingTeam,
    isLoadingPlayers,
    isLoadingGames,
    isLoadingSport,
  } = useTeamData(params.id);

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [opponentId, setOpponentId] = useState<string | null>(null);
  const [gameDate, setGameDate] = useState('');
  const [location, setLocation] = useState('');
  const [isHomeTeam, setIsHomeTeam] = useState<boolean | null>(null);

  const sameSportTeams = allTeams.filter((t) =>
    t.teamSportId === team?.teamSportId && t.id !== team?.id
  );

  const handleScheduleGame = async () => {
    if (!team || !opponentId || !gameDate || !location || isHomeTeam === null) return;

    const success = await dataServices.scheduleGame(team, opponentId, gameDate, location, isHomeTeam);
    if (success) {
      setIsSheetOpen(false);
      setOpponentId(null);
      setGameDate('');
      setLocation('');
      setIsHomeTeam(null);
    }
  };

  useEffect(() => {
    if (isLoadingTeam && isSheetOpen) {
      setIsSheetOpen(false); // Prevent sheet from opening during team load
    }
  }, [isLoadingTeam, isSheetOpen]);

  // Show loading state while team is being fetched
  if (isLoadingTeam) {
    return (
      <div className="p-6">
        <Card className="animate-pulse">
          <CardContent className="h-[200px]" />
        </Card>
      </div>
    );
  }

  // Handle case where team is not found
  if (!team) {
    return (
      <div className="p-6">
        <Card>
          <CardContent className="p-6">
            <h1 className="text-xl font-bold">Team not found</h1>
          </CardContent>
        </Card>
      </div>
    );
  }

  const sortedGames = games.sort((a, b) => {
    const dateA = a.game.date ? new Date(a.game.date).getTime() : 0;
    const dateB = b.game.date ? new Date(b.game.date).getTime() : 0;
    return dateA - dateB;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-3xl font-bold">{team.displayName}</h1>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Coach</p>
              <p className="font-medium">{team.coachesName}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Record</p>
              <p className="font-medium">{team.record}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Level</p>
              <p className="font-medium">{team.level}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Sport</p>
              {isLoadingSport ? (
                <p className="font-medium">Loading...</p>
              ) : (
                <p className="font-medium">{sport?.name || 'Unknown'}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="players">
        <TabsList className="rounded-lg border bg-muted p-1">
          <TabsTrigger
            value="players"
            className="flex items-center gap-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground"
          >
            <Users className="h-4 w-4" />
            Players
          </TabsTrigger>
          <TabsTrigger
            value="games"
            className="flex items-center gap-2 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground"
          >
            <Calendar className="h-4 w-4" />
            Games
          </TabsTrigger>
        </TabsList>

        <TabsContent value="players" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Players</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingPlayers ? (
                <div className="animate-pulse space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-12 bg-muted rounded-md" />
                  ))}
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Number</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Height</TableHead>
                      <TableHead>Year</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {players.map((player) => (
                      <TableRow key={player.id}>
                        <TableCell className="font-medium">
                          {player.firstName} {player.lastName}
                        </TableCell>
                        <TableCell>{player.number}</TableCell>
                        <TableCell>{player.position}</TableCell>
                        <TableCell>{player.height}</TableCell>
                        <TableCell>{player.yearInSchool}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="games" className="mt-6">
          <Card>
            <CardHeader className="flex justify-between items-center">
              <CardTitle>Games</CardTitle>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="ml-auto">
                    <Plus className="h-4 w-4 mr-2" /> Schedule Game
                  </Button>
                </SheetTrigger>
                <SheetContent
                  className="bg-white text-foreground z-[1000] shadow-lg overflow-y-auto"
                  aria-describedby="schedule-game-description"
                >
                  <SheetHeader>
                    <SheetTitle>Schedule New Game</SheetTitle>
                    <SheetDescription id="schedule-game-description">
                      Fill out the form to schedule a new game for your team.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="opponent" className="text-right">
                        Opponent
                      </Label>
                      <Select
                        onValueChange={setOpponentId}
                        value={opponentId || ''}
                        onOpenChange={(open) => console.log('Select open:', open)}
                        disabled={!team}
                      >
                        <SelectTrigger id="opponent" className="col-span-3">
                          <SelectValue placeholder="Select a team" />
                        </SelectTrigger>
                        <SelectContent className="z-[2000] bg-white text-foreground">
                          {sameSportTeams.map((teamOption) => (
                            <SelectItem key={teamOption.id} value={teamOption.id}>
                              {teamOption.displayName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="date" className="text-right">
                        Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={gameDate}
                        onChange={(e) => setGameDate(e.target.value)}
                        className="col-span-3"
                        disabled={!team}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="location" className="text-right">
                        Location
                      </Label>
                      <Input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="col-span-3"
                        disabled={!team}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label className="text-right">Home/Away</Label>
                      <RadioGroup
                        value={isHomeTeam?.toString() || ''}
                        onValueChange={(value) => setIsHomeTeam(value === 'true')}
                        className="col-span-3 flex space-x-4"
                        disabled={!team}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="true" id="home" />
                          <Label htmlFor="home">Home</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="false" id="away" />
                          <Label htmlFor="away">Away</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <Button onClick={handleScheduleGame} className="w-full" disabled={!team}>
                      Schedule Game
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </CardHeader>
            <CardContent>
              {isLoadingGames ? (
                <div className="animate-pulse space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-12 bg-muted rounded-md" />
                  ))}
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Opponent</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedGames.map((gameWithOpponent) => {
                      const { game, opponent } = gameWithOpponent;
                      const isCurrentTeamHome = game.homeTeamId === team.id;
                      const opponentPrefix = isCurrentTeamHome ? 'vs' : 'at';
                      return (
                        <TableRow key={game.id}>
                          <TableCell className="font-medium">
                            {new Date(game.date || '').toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            {opponentPrefix} {opponent?.displayName || 'Unknown'}
                          </TableCell>
                          <TableCell>{game.location}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Trophy className="h-4 w-4 text-primary" />
                              {game.status}
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}