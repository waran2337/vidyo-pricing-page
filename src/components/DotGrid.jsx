import React from "react";

export function DotGrid({ planName }) {
    const GRID_WIDTH = 20;
    const GRID_HEIGHT = 20;
    const dots = [];

    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push(
                <div
                    className={`DotGrid  h-[0.15rem] w-[0.15rem] rounded-full bg-[#D8D8D0] bg-gradient-to-b ${planName === "Growth" ? "opacity-20" : ""} `}
                    key={`${i}-${j}`}
                />
            );
        }
    }

    return (
        <div
            style={{
                gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`,
                gridTemplateRows: `repeat(${GRID_HEIGHT}, 1fr)`,
            }}
            className="group pointer-events-none absolute -right-[73px] -top-14 z-0 grid h-[240px] w-[250px] place-content-center overflow-hidden"
        >
            {dots}
        </div>
    );
}
