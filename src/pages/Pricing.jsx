import Plans from "../components/Plans";
import Slider from "../components/Slider";
import { features } from "../data";

function Pricing() {
    return (
        <div className=" h-vh mx-5 flex  flex-col items-center  justify-start text-center lg:mx-[124px] ">
            <img
                className="mt-12 h-[167px]  w-[675px]"
                src="src\assets\Screenshot.png"
                alt=""
            />
            <Slider />
            <div className="mt-8 flex gap-6">
                {features.map((feature) => (
                    <Plans plan={feature} key={feature.planName} />
                ))}
            </div>
        </div>
    );
}

export default Pricing;
