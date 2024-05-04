import { useState } from "react";
import SelectDropdown from "./SelectDropdown";
import { DotGrid } from "./DotGrid";

function Plans({ plan }) {
    const [item, setItem] = useState("");
    console.log(item);
    return (
        <div className="text-gralic h-[580px] w-[280px] rounded-lg bg-[#FFFFFF] p-4 text-start ">
            <div>
                <DotGrid />
                <h1 className="h-[22px] font-inter text-sm font-semibold">
                    {plan.planName}
                </h1>
                <div className=" mt-3 h-[61px]">
                    <h2 className=" h-9 font-inter text-[24px] font-semibold">
                        USD {plan.price}{" "}
                        <span className="mt-1 text-[14px] font-normal">
                            /month
                        </span>
                    </h2>
                    <p>
                        Billed annually at{" "}
                        <span className="text-xs font-bold">35% off</span>
                    </p>
                </div>

                <button className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#EEEEE9] py-[14px] pl-[48.5] pr-[72.5] text-sm font-medium">
                    {plan.buttonName}{" "}
                    <div className="flex h-4 w-4 items-center justify-center">
                        <img src="src\assets\arrow.svg" alt="rightTick" />
                    </div>
                </button>
            </div>

            <div className="my-5 h-[1px] w-full bg-[#EEEEE9]"></div>

            {plan.planName === "Custom" && (
                <div className="mb-6 mt-5">
                    <h4 className="mb-2 font-inter text-xs font-medium">
                        Select minutes
                    </h4>

                    <SelectDropdown
                        value={item}
                        onChange={(newValue) => setItem(newValue)}
                    />
                </div>
            )}

            <ul className="text-center font-inter text-sm font-normal">
                {plan.features.map((list) => (
                    <li
                        key={list}
                        className="mb-4 flex items-center justify-start  gap-2"
                    >
                        <div className="flex h-4 w-4 items-center justify-center">
                            <img src="src\assets\Vector.svg" alt="rightTick" />
                        </div>
                        <div>{list}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Plans;
