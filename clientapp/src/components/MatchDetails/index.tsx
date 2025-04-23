import React, { useEffect, useState } from 'react';
import { fetchMatchDetails } from '@/services/api.services';

interface MatchDetailsProps {
  encryptedPUUID: string;
}

const MatchDetails: React.FC<MatchDetailsProps> = ({ encryptedPUUID }) => {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await fetchMatchDetails(encryptedPUUID);
        setMatches(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMatches();
  }, [encryptedPUUID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Latest 3 Matches</h2>
      <ul>
        {matches.map((match, index) => (
          <li key={index}>
            <p>Match ID: {match.matchId}</p>
            <p>Champion: {match.champion}</p>
            <p>Role: {match.role}</p>
            <p>Lane: {match.lane}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchDetails;
