import { useState } from "react";
import SelectDropdown from "./SelectDropdown";
import { DotGrid } from "./DotGrid";
import CheckMark from "./CheckMark";
import Arrow from "./Arrow";

//const darkClass = "";

function Plans({ plan }) {
    const [item, setItem] = useState("");
    console.log(item);
    //background: linear-gradient(180deg, #383835 0%, rgba(37, 37, 33, 0) 100%);
    // bg-gradient-to-t from-[#252521] to-[#383835]

    const selectClass = {
        black: " border-grease text-[#F6F6F2] bg-[#2C2C29] ",
        white: "broder-[#D8D8D0] text-gralic bg-[#FFFFFF]",
    };

    return (
        <div
            className={`relative h-[580px] w-[280px] overflow-hidden rounded-lg border  ${plan.planName === "Growth" ? selectClass.black : selectClass.white}  p-4 text-start `}
        >
            <DotGrid planName={plan.planName} />

            <div className="relative z-10">
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
                    <p
                        className={`mt-[4px] font-inter text-xs font-normal ${plan.planName === "Growth" ? "text-[#D8D8D0]" : " text-garlic"}`}
                    >
                        Billed annually at{" "}
                        <span className=" font-bold">35% off</span>
                    </p>
                </div>

                <button
                    className={`mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg ${plan.planName === "Growth" ? "bg-[#943DEC]" : "border border-[#EEEEE9] bg-[#EEEEE9]"} py-[14px] pl-[48.5] pr-[72.5] text-sm font-medium`}
                >
                    {plan.buttonName}{" "}
                    <div className="flex h-4 w-4 items-center justify-center">
                        <Arrow planName={plan.planName} />
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

            <ul className="text-start font-inter text-sm font-normal">
                {plan.features.map((list) => (
                    <li
                        key={list}
                        className="mb-4 flex items-center justify-start  gap-2"
                    >
                        <div className="flex h-4 w-4 items-center justify-center">
                            <CheckMark planName={plan.planName} />
                        </div>
                        <div>{list}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Plans;
