import { useQuery } from '@tanstack/react-query';
import { DataStore } from 'aws-amplify/datastore';
import { Card, CardContent } from '@/components/ui/card';
import { School, Team, Sport } from '../../../src/models';
import { Building2, MapPin, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'wouter';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function SchoolPage() {
  const params = useParams();
  const [location, setLocation] = useLocation();
  const [selectedSchoolId, setSelectedSchoolId] = useState<string | null>(params?.id || null);
  const [schools, setSchools] = useState<School[]>([]);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [teamCards, setTeamCards] = useState<JSX.Element[]>([]); // State for resolved team cards

  useEffect(() => {
    const fetchSchools = async () => {
      console.log('IN Fetched schools page');
      try {
        const fetchedSchools = await DataStore.query(School);
        console.log('Fetched schools:', fetchedSchools);
        setSchools(fetchedSchools);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };
    fetchSchools();
  }, []);

  const { data: school, isLoading: isLoadingSchool } = useQuery<School | null>({
    queryKey: ['schools', selectedSchoolId],
    queryFn: async () => (selectedSchoolId ? await DataStore.query(School, selectedSchoolId) || null : null),
    enabled: !!selectedSchoolId,
  });

  const { data: teams = [], isLoading: isLoadingTeams } = useQuery<Team[]>({
    queryKey: ['schools', selectedSchoolId, 'teams'],
    queryFn: async () => (school ? await DataStore.query(Team, (t) => t.schoolID.eq(school.id)) : []),
    enabled: !!school,
  });

  const getTeamSport = async (teamSportId: string | undefined): Promise<Sport | null> => {
    if (!teamSportId) return null;
    return await DataStore.query(Sport, teamSportId) || null;
  };

  // Update team cards when teams or loading state changes
  useEffect(() => {
    if (!isLoadingTeams && school && teams.length > 0) {
      Promise.all(
        teams.map(async (team) => {
          const sport = await getTeamSport(team.teamSportId);
          return (
            <Card
              key={team.id}
              className="mb-4 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleTeamSelect(team.id)}
            >
              <CardContent className="p-4 flex items-start gap-4">
                <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{team.level || 'Unknown'}:{team.category || 'Unknown Team'}</h3>
                  <p className="text-sm text-muted-foreground">
                    {team.displayName || 'Unknown'}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })
      ).then((cards) => setTeamCards(cards));
    } else {
      setTeamCards([]);
    }
  }, [isLoadingTeams, school, teams]);

  if (isLoadingSchool) {
    return <div>Loading...</div>;
  }

  console.log('Rendering with schools:', schools);
  console.log('Selected school:', school, 'Teams:', teams, 'Modal open:', isTeamModalOpen);

  const handleTeamSelect = (teamId: string) => {
    setIsTeamModalOpen(false);
    setLocation(`/teams/${teamId}`);
  };

  const handleModalClose = () => {
    setIsTeamModalOpen(false);
    setSelectedSchoolId(null);
  };

  return (
    <div className="p-6 space-y-6">
      {/* List of All Schools */}
      <div>
        <h2 className="text-2xl font-bold mb-4">All Schools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {schools.length > 0 ? (
            schools.map((schoolItem) => (
              <Sheet
                key={schoolItem.id}
                open={isTeamModalOpen && selectedSchoolId === schoolItem.id}
                onOpenChange={(open) => {
                  console.log('Sheet onOpenChange:', open);
                  if (!open) handleModalClose();
                  else setIsTeamModalOpen(true);
                }}
              >
                <SheetTrigger asChild>
                  <Card
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => {
                      setSelectedSchoolId(schoolItem.id);
                      setIsTeamModalOpen(true);
                    }}
                  >
                    <CardContent className="p-4 flex items-start gap-4">
                      {schoolItem.imageUrl ? (
                        <img
                          src={schoolItem.imageUrl}
                          alt={schoolItem.name || 'School Image'}
                          className="h-16 w-16 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center">
                          <Building2 className="h-8 w-8 text-muted-foreground" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold">{schoolItem.name}</h3>
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            {schoolItem.address}, {schoolItem.city}, {schoolItem.state}{' '}
                            {schoolItem.zipcode}
                          </div>
                          <p>Mascot: {schoolItem.mascot || 'N/A'}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </SheetTrigger>
                <SheetContent
                  className="w-[500px] max-w-[90vw] max-h-[80vh] overflow-auto bg-white shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <SheetHeader>
                    <SheetTitle>Teams for {school?.name || 'Unknown School'}</SheetTitle>
                    <SheetDescription>Select a team to view details</SheetDescription>
                  </SheetHeader>
                  <ScrollArea className="h-[calc(80vh-150px)] mt-4">
                    {isLoadingTeams ? (
                      <div className="p-4">Loading teams...</div>
                    ) : school && teams.length > 0 ? (
                      teamCards.length > 0 ? (
                        teamCards
                      ) : (
                        <div className="p-4 text-muted-foreground">Loading team details...</div>
                      )
                    ) : (
                      <div className="p-4 text-muted-foreground">
                        {school ? 'No teams available' : 'No school data'}
                      </div>
                    )}
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            ))
          ) : (
            <div>No schools available</div>
          )}
        </div>
      </div>

      {/* School Details without Teams */}
      {selectedSchoolId && school && (
        <div>
          <h2 className="text-2xl font-bold mb-4">School Details</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-6">
                {school.imageUrl ? (
                  <img
                    src={school.imageUrl}
                    alt={school.name || 'School Image'}
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
                  <p className="mt-2 text-muted-foreground">Mascot: {school.mascot || 'N/A'}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}