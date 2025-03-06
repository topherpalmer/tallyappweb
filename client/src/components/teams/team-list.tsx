import { useQuery } from '@tanstack/react-query';
import { DataStore } from '@aws-amplify/datastore'; // v5.x import
import { Link } from 'wouter';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Team } from '../../../../src/models'; // Adjust path if needed
import { Sport } from '../../../../src/models'; // Import Sport model
import { Users } from 'lucide-react';

interface TeamListProps {
  teams: Team[];
  isLoading: boolean;
}

export default function TeamList({ teams, isLoading }: TeamListProps) {
  // Fetch all sports based on teamSportIds
  const sportIds = teams.map((team) => team.teamSportId).filter((id) => id);
  const { data: sports = [] } = useQuery<Sport[]>({
    queryKey: ['sports', sportIds],
    queryFn: async () => {
      if (!sportIds.length) return [];
      const sportPromises = sportIds.map((id) => DataStore.query(Sport, (s) => s.id.eq(id)));
      const sportsData = (await Promise.all(sportPromises)).flat().filter((s): s is Sport => s !== null && s !== undefined);
      return sportsData;
    },
    enabled: !!sportIds.length,
  });

  // Map sports to teams for easy lookup
  const sportMap = new Map(sports.map((sport) => [sport.id, sport]));

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-[150px] bg-muted" />
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {teams.map((team) => {
        const sport = sportMap.get(team.teamSportId) || null;
        return (
          <Link key={team.id} href={`/teams/${team.id}`}>
            <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle className="line-clamp-1">{team.displayName}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Sport: {sport?.name || 'Unknown'}</p>
                  <p>Coach: {team.coachesName}</p>
                  <p>Record: {team.record}</p>
                  <p>Level: {team.level}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}