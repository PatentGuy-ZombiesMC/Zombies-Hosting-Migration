import { ArrowRight, ExternalLink, CheckCircle, Zap, Shield, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MigrationPageProps {
  newDomain?: string;
}

export default function MigrationPage({ newDomain = 'https://new.zombieshosting.com' }: MigrationPageProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 15, seconds: 42 });
  const [progress, setProgress] = useState(65);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
        className="fixed top-0 left-0 w-96 h-96 bg-zombie-teal opacity-5 rounded-full blur-3xl pointer-events-none"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.4s ease-out',
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
            <div className="h-8 w-px bg-gradient-to-b from-zombie-teal to-transparent"></div>
            <span className="text-sm text-gray-400">Migration in Progress</span>
          </div>
        </header>

        <main className="flex flex-col items-center justify-center min-h-[75vh]">
          <div className="mb-12 text-center max-w-3xl">
            <div className="mb-8 flex justify-center items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-zombie-teal blur-2xl opacity-20 rounded-full"></div>
                <Rocket className="w-16 h-16 text-zombie-teal relative" strokeWidth={1.5} />
              </div>
              <ArrowRight className="w-8 h-8 text-gray-600" strokeWidth={1.5} />
              <div className="relative">
                <div className="absolute inset-0 bg-zombie-green blur-2xl opacity-20 rounded-full"></div>
                <Zap className="w-16 h-16 text-zombie-green relative" strokeWidth={1.5} />
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              We've Moved
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              Zombies Hosting has risen to new heights
            </p>
            <p className="text-lg text-gray-400 mb-12">
              We've upgraded our infrastructure with lightning-fast servers, enhanced security, and better performance. Your data is safe and sound on our new platform.
            </p>
          </div>

          <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg border border-gray-700 rounded-2xl p-10 md:p-14 max-w-4xl w-full mb-12 transition-all duration-300">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Migration Progress</h3>
                <span className="text-sm text-zombie-green font-semibold">{progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-zombie-teal to-zombie-green rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="p-6 bg-black bg-opacity-30 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Previous Home</p>
                <p className="text-lg text-gray-300 font-mono">zombieshosting.com</p>
              </div>
              <div className="p-6 bg-zombie-green bg-opacity-5 rounded-lg border border-zombie-green border-opacity-30">
                <p className="text-xs text-zombie-green mb-2 uppercase tracking-wider">New Home</p>
                <p className="text-lg text-zombie-teal font-mono">{newDomain.replace('https://', '')}</p>
              </div>
            </div>

            <a
              href={newDomain}
              className="group relative w-full flex items-center justify-center space-x-3 bg-zombie-green text-black font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zombie-green/30 hover:scale-[1.02] active:scale-95"
            >
              <span>Visit New Site</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <div className="mt-10 pt-10 border-t border-gray-700">
              <p className="text-center text-sm text-gray-500 mb-6">
                Auto-redirect countdown
              </p>
              <div className="flex justify-center space-x-3">
                <div className="text-center">
                  <div className="bg-black bg-opacity-50 border border-gray-700 rounded-lg px-4 py-3 min-w-[90px] hover:border-zombie-green transition-colors duration-300">
                    <span className="text-3xl font-bold text-zombie-green">{String(timeLeft.hours).padStart(2, '0')}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 uppercase">Hours</p>
                </div>
                <div className="flex items-end pb-3">
                  <span className="text-gray-600 text-lg">:</span>
                </div>
                <div className="text-center">
                  <div className="bg-black bg-opacity-50 border border-gray-700 rounded-lg px-4 py-3 min-w-[90px] hover:border-zombie-green transition-colors duration-300">
                    <span className="text-3xl font-bold text-zombie-green">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 uppercase">Minutes</p>
                </div>
                <div className="flex items-end pb-3">
                  <span className="text-gray-600 text-lg">:</span>
                </div>
                <div className="text-center">
                  <div className="bg-black bg-opacity-50 border border-gray-700 rounded-lg px-4 py-3 min-w-[90px] hover:border-zombie-green transition-colors duration-300">
                    <span className="text-3xl font-bold text-zombie-green">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 uppercase">Seconds</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-4xl w-full">
            {[
              { icon: CheckCircle, title: 'Data Preserved', desc: 'All your data migrated safely' },
              { icon: Shield, title: 'Enhanced Security', desc: 'Better protection for your hosting' },
              { icon: Rocket, title: 'Faster Performance', desc: 'Optimized for speed and reliability' },
            ].map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(`card-${idx}`)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group p-6 bg-slate-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl text-center cursor-default transition-all duration-300 hover:border-zombie-green hover:border-opacity-50 hover:bg-opacity-70"
              >
                <div className="mb-3 inline-flex p-3 bg-zombie-green bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-zombie-green" />
                </div>
                <h3 className="font-semibold mb-2 text-white group-hover:text-zombie-green transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </main>

        <footer className="text-center text-gray-600 text-sm mt-20 py-8 border-t border-gray-800">
          <p>&copy; 2024 Zombies Hosting. We're bringing hosting back to life.</p>
        </footer>
      </div>
    </div>
  );
}
