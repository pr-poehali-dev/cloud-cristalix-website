import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  mousePosition: { x: number; y: number };
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ mousePosition, scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdyI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6cmdiYSg2NiwxNTMsMjI1LDAuMTUpO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6cmdiYSg2NiwxNTMsMjI1LDApO3N0b3Atb3BhY2l0eTowIiAvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxlbGxpcHNlIGN4PSI1MCUiIGN5PSI1MCUiIHJ4PSI1MCUiIHJ5PSI1MCUiIGZpbGw9InVybCgjZ2xvdykiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <img 
                src="/images/logo.png" 
                alt="Cloud Logo" 
                className="w-40 h-40 mx-auto lg:mx-0 mb-8 drop-shadow-[0_0_25px_rgba(66,153,225,0.5)]"
                loading="eager"
                fetchpriority="high"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Cloud
            </h1>
            <p className="text-xl text-gray-400 mb-3">
              Текущая версия <span className="text-[#4299e1] font-semibold">1.0.0</span>
            </p>
            <p className="text-sm text-gray-500 mb-10">
              Посмотреть <button onClick={() => scrollToSection('updates')} className="text-[#4299e1] hover:underline">Changelog</button>
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl lg:max-w-none leading-relaxed">
              Cloud — приватный DLC-клиент для Cristalix с отличным Combat и хорошим Movement. 
              Регулярные обновления обеспечивают комфортную игру.
            </p>
            <Button size="lg" className="bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-xl px-14 py-7 text-lg font-semibold shadow-lg shadow-[#4299e1]/30">
              Запустить
            </Button>
          </div>

          <div 
            className="relative lg:block hidden"
            style={{ 
              perspective: '1000px',
            }}
          >
            <div
              className="relative transition-transform duration-300 ease-out"
              style={{
                transform: `rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * 10}deg) translate3d(0, 0, 60px)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="absolute inset-0 bg-[#4299e1]/20 blur-3xl rounded-3xl"
                style={{
                  transform: 'translateZ(-40px)',
                }}
              ></div>
              <img 
                src="/images/gui-screenshot.png" 
                alt="Cloud GUI" 
                className="relative z-10 w-full max-w-2xl rounded-3xl border-2 border-[#4299e1]/30"
                style={{
                  boxShadow: '0 25px 80px rgba(66, 153, 225, 0.5)',
                }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
