import { Link } from 'wouter';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import type { School } from '@shared/schema';
import { Building2 } from 'lucide-react';

interface SchoolListProps {
  schools: School[];
  isLoading: boolean;
}

export default function SchoolList({ schools, isLoading }: SchoolListProps) {
  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-[200px] bg-muted" />
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {schools.map((school) => (
        <Link key={school.id} href={`/schools/${school.id}`}>
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center gap-4">
              {school.imageUrl ? (
                <img
                  src={school.imageUrl}
                  alt={school.name}
                  className="h-12 w-12 rounded-lg object-cover"
                />
              ) : (
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
              <CardTitle className="line-clamp-1">{school.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {school.city}, {school.state}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {school.mascot}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
