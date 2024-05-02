import { useState } from "react";

function Slider() {
    const [value, setValue] = useState(0);
    // Assuming slider track width is 678px and indicator width is 84px
    //const indicatorLeft = (Number(value) * (trackWidth - indicatorWidth)) / 200 + halfTrackWidth - halfIndicatorWidth;

    function handleChange(e) {
        setValue(e.target.value);
        document.getElementById("current-value").style.left =
            `${Number(value) / 2}%`;
    }

    return (
        <div className=" space flex w-full items-center justify-center gap-[60px] font-inter text-garlic">
            <div className="w-[360px] text-start font-inter font-medium ">
                Suggesting an ideal plan for
                <p>
                    producing around &nbsp;
                    <span className="font-bold text-[#943DEC]">
                        {value} clips
                    </span>
                    &nbsp; monthly
                </p>
            </div>
            <div className="flex items-center justify-center ">
                <div className="slider-values mr-5">50</div>
                <div className="slider relative h-2 w-[678px]">
                    <div
                        id="current-value"
                        className="indicator absolute -top-14  flex h-9 w-[144px] -translate-x-2/4 items-center justify-center rounded-lg bg-[#252521] px-3 py-2 ease-in-out"
                    >
                        <span className="z-20">{value} clips</span>
                        <div className="relative -left-8 top-4 h-5 w-5 rotate-45  bg-[#252521] "></div>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="200"
                        value={value}
                        onChange={handleChange}
                        className=" absolute left-2/4 top-0 h-2 w-[678px] -translate-x-2/4 rounded"
                    />
                    <progress
                        min="0"
                        max="200"
                        value={value}
                        className="absolute top-0 h-2 w-[678px] -translate-x-2/4 overflow-hidden rounded "
                    ></progress>
                </div>
                <div className="slider-values ml-5">200+</div>
            </div>
        </div>
    );
}

export default Slider;
