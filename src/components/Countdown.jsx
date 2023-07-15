import { useState, useEffect } from "react";

function Countdown() {
  const targetDate = new Date("2023-10-21T12:00:00"); // Fecha objetivo: 21 de octubre de 2023 a las 12:00 PM
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateTimeLeft() {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className="grid gap-2 grid-cols-4 lg:w-3/12 py-5 text-blue">
      <div className="text-center">
        <div className="text-4xl lg:text-6xl font-bold">{timeLeft.days}</div>
        <div className="text-sm font-semibold">días</div>
      </div>
      <div className="text-center">
        <div className="text-4xl lg:text-6xl font-bold">{timeLeft.hours}</div>
        <div className="text-sm font-semibold">horas</div>
      </div>
      <div className="text-center">
        <div className="text-4xl lg:text-6xl font-bold">{timeLeft.minutes}</div>
        <div className="text-sm font-semibold">minutos</div>
      </div>
      <div className="text-center">
        <div className="text-4xl lg:text-6xl font-bold">{timeLeft.seconds}</div>
        <div className="text-sm font-semibold">segundos</div>
      </div>
    </div>
  );
}

export default Countdown;
