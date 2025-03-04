import { useQuery } from '@tanstack/react-query';
import TeamList from '@/components/teams/team-list';
import { Card, CardContent } from '@/components/ui/card';
import type { School, Team } from '@shared/schema';
import { Building2, MapPin } from 'lucide-react';

interface SchoolPageProps {
  params: {
    id: string;
  };
}

export default function SchoolPage({ params }: SchoolPageProps) {
  const { data: school, isLoading: isLoadingSchool } = useQuery<School>({
    queryKey: ['schools', params.id],
  });

  const { data: teams = [], isLoading: isLoadingTeams } = useQuery<Team[]>({
    queryKey: ['schools', params.id, 'teams'],
  });

  if (isLoadingSchool) {
    return <div>Loading...</div>;
  }

  if (!school) {
    return <div>School not found</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            {school.imageUrl ? (
              <img
                src={school.imageUrl}
                alt={school.name}
                className="h-24 w-24 rounded-lg object-cover"
              />
            ) : (
              <div className="h-24 w-24 rounded-lg bg-muted flex items-center justify-center">
                <Building2 className="h-12 w-12 text-muted-foreground" />
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold">{school.name}</h1>
              <div className="mt-2 flex items-center text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                {school.address}, {school.city}, {school.state} {school.zipcode}
              </div>
              <p className="mt-2 text-muted-foreground">Mascot: {school.mascot}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-4">Teams</h2>
        <TeamList teams={teams} isLoading={isLoadingTeams} />
      </div>
    </div>
  );
}
