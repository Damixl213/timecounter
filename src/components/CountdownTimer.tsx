import React, { useState, useEffect } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-6 py-8">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div 
          key={key}
          className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <div className="text-2xl md:text-5xl font-bold text-white mb-1">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-white/80 uppercase tracking-wider">
            {key}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;