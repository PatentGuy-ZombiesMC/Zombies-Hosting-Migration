import { Clock, Zap, Mail, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MaintenancePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-zombie-green opacity-5 rounded-full blur-3xl pointer-events-none"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-16">
        <header className="mb-20">
          <div className="flex items-center space-x-4">
            <img
              src="https://i.ibb.co/mCrH75d6/zombieshosting.png"
              alt="Zombies Hosting"
              className="h-14 w-auto hover:opacity-80 transition-opacity duration-300"
            />
            <div className="h-8 w-px bg-gradient-to-b from-zombie-green to-transparent" />
            <span className="text-sm text-gray-400">Status Dashboard</span>
          </div>
        </header>

        <main className="flex flex-col items-center justify-center min-h-[70vh]">
          <div className="mb-12 text-center max-w-3xl">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-zombie-green blur-3xl opacity-20 rounded-full" />
                <AlertCircle className="w-20 h-20 text-zombie-green relative" strokeWidth={1.5} />
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              We're Improving
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              Zombies Hosting is temporarily unavailable
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Our team is working hard behind the scenes to bring you faster speeds, better reliability, and new features. We'll be back soon!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl mb-16">
            <div className="group bg-slate-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-zombie-green hover:border-opacity-50 transition-all duration-300 cursor-default">
              <div className="mb-4 inline-flex p-3 bg-zombie-green bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                <Clock className="w-6 h-6 text-zombie-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-zombie-green transition-colors duration-300">Estimated Return</h3>
              <p className="text-gray-400 text-sm">
                Back online in <span className="text-zombie-green font-semibold">2-4 hours</span>
              </p>
            </div>

            <div className="group bg-slate-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-zombie-green hover:border-opacity-50 transition-all duration-300 cursor-default">
              <div className="mb-4 inline-flex p-3 bg-zombie-green bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                <Zap className="w-6 h-6 text-zombie-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-zombie-green transition-colors duration-300">What's Happening</h3>
              <p className="text-gray-400 text-sm">
                System upgrades, performance optimization, and security enhancements
              </p>
            </div>

            <div className="group bg-slate-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-zombie-green hover:border-opacity-50 transition-all duration-300 cursor-default">
              <div className="mb-4 inline-flex p-3 bg-zombie-green bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                <Mail className="w-6 h-6 text-zombie-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-zombie-green transition-colors duration-300">Questions?</h3>
              <p className="text-gray-400 text-sm">
                Reach out at <a href="mailto:support@zombieshosting.com" className="text-zombie-green hover:underline">support@zombieshosting.com</a>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 text-gray-500">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-zombie-green rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="w-2 h-2 bg-zombie-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-zombie-green rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-sm">Maintenance in progress</span>
          </div>
        </main>

        <footer className="text-center text-gray-600 text-sm mt-20 py-8 border-t border-gray-800">
          <p>&copy; 2024 Zombies Hosting. We're bringing hosting back to life.</p>
        </footer>
      </div>
    </div>
  );
}
