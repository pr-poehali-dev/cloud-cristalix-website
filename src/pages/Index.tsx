import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PricingSection from '@/components/sections/PricingSection';
import BottomSections from '@/components/sections/BottomSections';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    // Only enable on desktop
    if (window.innerWidth >= 1024) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative bg-[#0a0e1a]">
      
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0a0d16] via-[#070913] to-[#050711]"></div>

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
                  className="text-sm text-gray-400 hover:text-[#4299e1] transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => window.open('http://t.me/CloudCristalix_robot', '_blank')} 
              className="bg-[#4299e1] hover:bg-[#3182ce] text-white px-8 py-2 rounded-xl transition-colors duration-200"
            >
              <span className="font-semibold">Купить</span>
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