"use client";

import { useState, FormEvent } from 'react';

interface SearchBarProps {
  onSubmit: (name: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
    const [summonerName, setSummonerName] = useState<string>('Nahokó');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(summonerName);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex gap-5">
            <input 
                type="text" 
                value={summonerName} 
                onChange={(e) => setSummonerName(e.currentTarget.value)} 
                placeholder="Enter Summoner Name"
                className="p-2 rounded-md shadow-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button type="submit" className="mt-2 bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Search
            </button>
        </form>
    );
}

export default SearchBar;