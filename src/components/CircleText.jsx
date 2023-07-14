const CircleText = () => {
  return (
    <div className="relative w-40 h-40 rounded-full bg-violet-500 flex flex-col items-center justify-center text-white">
      <div className="w-24 h-px bg-violet-500"></div>
      <div className="text-center">
        <h1 className="text-xl font-bold">Nos Casamos</h1>
      </div>
      <div className="w-24 h-px bg-violet-500"></div>
      <div className="mt-auto">
        <p className="text-base">Pol y Meli</p>
      </div>
    </div>
  );
};

export default CircleText;
