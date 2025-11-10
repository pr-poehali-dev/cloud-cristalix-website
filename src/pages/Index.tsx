import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PricingSection from '@/components/sections/PricingSection';
import BottomSections from '@/components/sections/BottomSections';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;
    if (isMobile) return;

    let rafId: number | null = null;
    let lastTime = 0;
    const throttleDelay = 50;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMousePosition({ x, y });
        lastTime = now;
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative bg-[#0a0e1a]">
      
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d16]/90 via-[#070913]/95 to-[#050711]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDY2LCAxNTMsIDIyNSwgMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <nav 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), 98% calc(100% - 3px), 95% 100%, 92% calc(100% - 5px), 88% calc(100% - 2px), 84% calc(100% - 7px), 80% 100%, 76% calc(100% - 4px), 72% calc(100% - 9px), 68% calc(100% - 2px), 64% calc(100% - 6px), 60% 100%, 56% calc(100% - 5px), 52% calc(100% - 3px), 48% calc(100% - 8px), 44% 100%, 40% calc(100% - 4px), 36% calc(100% - 7px), 32% calc(100% - 2px), 28% calc(100% - 9px), 24% calc(100% - 5px), 20% 100%, 16% calc(100% - 6px), 12% calc(100% - 3px), 8% calc(100% - 8px), 5% calc(100% - 4px), 2% 100%, 0 calc(100% - 5px))',
        }}
      >
        <div className="absolute inset-0 bg-[#0a0e1a]/95"></div>
        
        <div className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Cloud" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-white">Cloud</span>
            </div>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'features', label: 'Функции' },
                { id: 'download', label: 'Скачать' },
                { id: 'pricing', label: 'Цены' },
                { id: 'faq', label: 'FAQ' },
                { id: 'updates', label: 'Обновления' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-sm text-gray-400 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div 
                    className="absolute inset-0 -inset-x-2 -inset-y-1 bg-[#4299e1]/0 group-hover:bg-[#4299e1]/20 rounded transition-all duration-300 blur-sm opacity-0 group-hover:opacity-100"
                  ></div>
                  <div 
                    className="absolute inset-0 -inset-x-2 -inset-y-1 bg-[#4299e1]/0 group-hover:bg-[#4299e1]/10 rounded transition-all duration-300"
                  ></div>
                </button>
              ))}
            </div>
            <Button 
              onClick={() => window.open('http://t.me/CloudCristalix_robot', '_blank')} 
              className="relative bg-[#4299e1] hover:bg-[#3182ce] text-white px-8 py-2 rounded-xl overflow-hidden group transition-all duration-300"
            >
              <span className="relative z-10 font-semibold">Купить</span>
              <div className="absolute inset-0 bg-[#4299e1]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        <HeroSection mousePosition={mousePosition} scrollToSection={scrollToSection} />
        <FeaturesSection />
        <PricingSection />
        <BottomSections />
      </main>
    </div>
  );
};

export default Index;
