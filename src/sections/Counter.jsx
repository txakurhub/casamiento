import Countdown from "../components/Countdown";

const Counter = () => {
    return (
        <div className="w-full bg-lilaclaro flex flex-col lg:flex-row items-center justify-center py-5 lg:py-10 z-50">
            <h1 className="text-3xl font-black lg:text-6xl lg:px-5 text-white">Se acerca el día</h1>
            <Countdown/>
        </div>
    )
};

export default Counter;
