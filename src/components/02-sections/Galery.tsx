import React from 'react';

import Image from "next/image";

const getGridTemplate = (imagesLength) => {
    const layouts = {
        3: [
            "A B B",
            "A B B",
            "C C C"
        ],
        4: [
            "A B B",
            "A C C",
            "D D D"
        ]
    };

    return layouts[imagesLength] || layouts[4];
};

const ProjectsComponents = ({ images } : {images : string[]}) => {
    const gridTemplate = getGridTemplate(images.length);
    const gridStyles = {
        display: "grid",
        gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(3, minmax(0, 1fr))`,
        gap: "1rem"
    };

    const positionMap = {};
    gridTemplate.forEach((row, rowIndex) => {
        row.split(" ").forEach((char, colIndex) => {
            if (!positionMap[char]) positionMap[char] = [];
            positionMap[char].push({ rowStart: rowIndex + 1, colStart: colIndex + 1 });
        });
    });

    return (
        <div style={gridStyles}>
            {images.map((image, index) => {
                const positions = positionMap[String.fromCharCode(65 + index)];
                if (!positions) return null;
                return (
                    <div
                        key={index}
                        style={{
                            gridColumn: `${positions[0].colStart} / span ${positions.length}`,
                            gridRow: `${positions[0].rowStart} / span ${positions.length}`
                        }}
                    >
                        <Image 
                            src={image}
                            alt={`Project ${index + 1}`}
                            width={500}
                            height={500}
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectsComponents;