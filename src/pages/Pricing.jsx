import Slider from '../components/Slider'

function Pricing() {
    return (
        <div className=" mx-5 flex h-[400px] flex-col items-center  justify-start text-center lg:mx-60 ">
            <img
                className="mt-12 h-[167px]  w-[675px]"
                src="src\assets\Screenshot.png"
                alt=""
            />
            <Slider />
            <div>box3</div>
        </div>
    )
}

export default Pricing
