import React from 'react';

const TopChampionOptions: React.FC<{
    showTopChampions: boolean;
    count: number;
    onToggleTopChampions: () => void;
    onCountChange: (newCount: number) => void;
}> = ({ showTopChampions, count, onToggleTopChampions, onCountChange }) => (
    <div className="mt-4 flex items-center gap-4">
        <label className="flex items-center gap-2">
            <input type="checkbox" checked={showTopChampions} onChange={onToggleTopChampions} />
            <span>Show Top Champions</span>
        </label>
        {showTopChampions && (
            <select value={count} onChange={(e) => onCountChange(Number(e.target.value))} className="border rounded p-2">
                {[3, 5, 10].map((num) => (
                    <option key={num} value={num}>
                        Top {num}
                    </option>
                ))}
            </select>
        )}
    </div>
);

export default TopChampionOptions;