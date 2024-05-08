import { useState } from "react";

function Slider() {
    const [value, setValue] = useState(0);

    const [progress, setProgress] = useState(0);
    // Assuming slider track width is 678px and indicator width is 84px
    //const indicatorLeft = (Number(value) * (trackWidth - indicatorWidth)) / 200 + halfTrackWidth - halfIndicatorWidth;
    // 98.6%  1.8%
    function handleChange(e) {
        setValue(e.target.value);
        setProgress(((Number(e.target.value) - 50) / 150) * 100);
        document.getElementById("current-value").style.left = `${progress}%`;
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
                        className="tooltip absolute -top-14 left-[12px] h-9 w-max -translate-x-2/4 rounded-lg bg-[#252521] px-3 py-2 text-center text-sm ease-in-out"
                    >
                        {value} clips
                        <div className="triangle-down absolute -bottom-[20%] right-[38%]"></div>
                    </div>
                    <input
                        type="range"
                        min="50"
                        max="200"
                        value={value}
                        onChange={handleChange}
                        className=" absolute left-2/4 top-0 h-2 w-full -translate-x-2/4 rounded"
                    />
                    <progress
                        min="0"
                        max="100"
                        value={progress}
                        className="absolute top-0 h-2 w-full -translate-x-2/4 overflow-hidden rounded "
                    ></progress>
                </div>
                <div className="slider-values ml-5">200+</div>
            </div>
        </div>
    );
}

export default Slider;
