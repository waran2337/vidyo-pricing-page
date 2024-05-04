import { useState } from "react";

function SelectDropdown({ value, onChange }) {
    const [options] = useState([
        "900 mins",
        "1200 mins",
        "1500 mins",
        "1800 mins",
    ]);
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-full max-w-[320px]">
            <div
                onClick={() => setOpen(!open)}
                tabIndex={0}
                className="flex cursor-pointer items-center justify-between rounded-lg border-2 border-[#D8D8D0] bg-secondaryColor px-4 py-2 focus:shadow-[0px_0px_0px_2px_rgb(182,207,255,0.25)]"
            >
                <p className="font-inter text-sm text-grease">
                    {value ? value : "Select Item"}
                </p>
                <div
                    className={`flex h-4 w-4 rotate-90 items-center justify-center ${open ? "-rotate-90" : "rotate-90"}`}
                >
                    <img src="src\assets\arrow.svg" alt="rightTick" />
                </div>
            </div>

            {open && (
                <div className="absolute left-0  top-[110%] max-h-[320px] w-full rounded-lg border-2 bg-secondaryColor ">
                    {options.map((option) => (
                        <div
                            onClick={() => {
                                onChange(option);
                                setOpen(false);
                            }}
                            className={`cursor-pointer rounded-sm p-2 hover:bg-gray-200 ${option === value ? "bg-grey-200" : "bg-secondaryColor"} `}
                            key={option}
                        >
                            <p className="text-sm text-grease">{option}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SelectDropdown;
