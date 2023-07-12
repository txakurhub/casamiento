import Countdown from "../components/Countdown";

const Counter = () => {
    return (
        <div className="w-full bg-lilaclaro flex flex-col items-center justify-center">
            <h1 className="">Se acerca el día</h1>
            <Countdown/>
        </div>
    )
};

export default Counter;
