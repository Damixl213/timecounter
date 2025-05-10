import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import AnimatedElements from './components/AnimatedElements';
import SubscribeForm from './components/SubscribeForm';

function App() {
  // Set launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 1);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/40 z-0"></div>
      
      {/* Animated background elements */}
      <AnimatedElements />
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="w-full max-w-2xl mx-auto">
          {/* Logo placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full animate-pulse"></div>
              <div className="absolute inset-3 bg-orange-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Launching Soon</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-xl mx-auto leading-relaxed">
            Our new travel platform is about to take off. Contact us to learn more.
          </p>
          
          {/* Countdown timer */}
          <CountdownTimer targetDate={launchDate} />
          
          {/* Contact buttons */}
          <div className="mt-12">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;