import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  mousePosition: { x: number; y: number };
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ mousePosition, scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
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

          <div className="relative lg:block hidden">
            <img 
              src="/images/gui-screenshot.png" 
              alt="Cloud GUI" 
              className="w-full max-w-2xl rounded-3xl border-2 border-[#4299e1]/30 shadow-[0_25px_80px_rgba(66,153,225,0.3)]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;