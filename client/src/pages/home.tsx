import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SchoolSearch from '@/components/schools/school-search';
import SchoolList from '@/components/schools/school-list';
import type { School } from '@shared/schema';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: schools = [], isLoading } = useQuery<School[]>({
    queryKey: ['schools', searchQuery],
  });

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Schools</h1>
        <SchoolSearch onSearch={setSearchQuery} />
      </div>
      <SchoolList schools={filteredSchools} isLoading={isLoading} />
    </div>
  );
}
