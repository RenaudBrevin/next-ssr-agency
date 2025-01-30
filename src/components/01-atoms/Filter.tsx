import React from 'react';

const Filter = ({ label, options, selected, selection }: { label: string, options: string[], selected: (value: string | null) => void, selection: string | null }) => {
    return (
        <div>
            <label htmlFor={`filter-${label}`} className="mr-4 font-bold">{label}:</label>
            <select
                id={`filter-${label}`}
                value={selection || ''}
                onChange={(e) => selected(e.target.value || null)}
                className="bg-[#2e2e2e] border-0 rounded-md p-2"
            >
                <option value="">Toutes</option>
                {options.map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
