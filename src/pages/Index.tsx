import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [activeTab, setActiveTab] = useState('combat');

  const features = {
    combat: [
      { name: 'Kill Aura', desc: 'Автоматическая атака ближайших врагов' },
      { name: 'Aim Assist', desc: 'Точное наведение на противников' },
      { name: 'Criticals', desc: 'Критические удары на каждую атаку' },
      { name: 'Velocity', desc: 'Контроль отбрасывания' },
      { name: 'Auto Clicker', desc: 'Автоматические клики' },
      { name: 'Hit Boxes', desc: 'Увеличение хитбоксов врагов' },
    ],
    render: [
      { name: 'ESP', desc: 'Подсветка игроков сквозь стены' },
      { name: 'Tracers', desc: 'Линии к игрокам' },
      { name: 'Nametags', desc: 'Улучшенные ники игроков' },
      { name: 'X-Ray', desc: 'Просвечивание блоков' },
      { name: 'Fullbright', desc: 'Полная яркость' },
      { name: 'Chams', desc: 'Цветная подсветка моделей' },
    ],
    movement: [
      { name: 'Speed', desc: 'Увеличение скорости движения' },
      { name: 'Fly', desc: 'Полёт в любом режиме' },
      { name: 'Sprint', desc: 'Автоматический бег' },
      { name: 'NoFall', desc: 'Отключение урона от падения' },
      { name: 'Step', desc: 'Автоматический подъём на блоки' },
      { name: 'Jesus', desc: 'Ходьба по воде' },
    ],
    misc: [
      { name: 'AutoArmor', desc: 'Автоматическое надевание брони' },
      { name: 'ChestStealer', desc: 'Мгновенное ограбление сундуков' },
      { name: 'InvMove', desc: 'Движение с открытым инвентарём' },
      { name: 'NoRotate', desc: 'Отключение поворотов от сервера' },
      { name: 'AntiBot', desc: 'Игнорирование ботов' },
      { name: 'Timer', desc: 'Ускорение игрового времени' },
    ],
  };

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

      <nav className="fixed top-0 left-0 right-0 z-50">
        <svg 
          className="absolute top-0 left-0 w-full h-full pointer-events-none" 
          viewBox="0 0 1920 80" 
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id="waveClip">
              <path
                d="M0,0 L1920,0 L1920,70 Q1900,65 1880,70 T1840,70 T1800,70 T1760,70 T1720,70 T1680,70 T1640,70 T1600,70 T1560,70 T1520,70 T1480,70 T1440,70 T1400,70 T1360,70 T1320,70 T1280,70 T1240,70 T1200,70 T1160,70 T1120,70 T1080,70 T1040,70 T1000,70 T960,70 T920,70 T880,70 T840,70 T800,70 T760,70 T720,70 T680,70 T640,70 T600,70 T560,70 T520,70 T480,70 T440,70 T400,70 T360,70 T320,70 T280,70 T240,70 T200,70 T160,70 T120,70 T80,70 T40,70 T0,70 Z"
              >
                <animate
                  attributeName="d"
                  dur="5s"
                  repeatCount="indefinite"
                  values="
                    M0,0 L1920,0 L1920,70 Q1900,65 1880,70 T1840,70 T1800,70 T1760,70 T1720,70 T1680,70 T1640,70 T1600,70 T1560,70 T1520,70 T1480,70 T1440,70 T1400,70 T1360,70 T1320,70 T1280,70 T1240,70 T1200,70 T1160,70 T1120,70 T1080,70 T1040,70 T1000,70 T960,70 T920,70 T880,70 T840,70 T800,70 T760,70 T720,70 T680,70 T640,70 T600,70 T560,70 T520,70 T480,70 T440,70 T400,70 T360,70 T320,70 T280,70 T240,70 T200,70 T160,70 T120,70 T80,70 T40,70 T0,70 Z;
                    M0,0 L1920,0 L1920,72 Q1900,68 1880,72 T1840,72 T1800,72 T1760,72 T1720,72 T1680,72 T1640,72 T1600,72 T1560,72 T1520,72 T1480,72 T1440,72 T1400,72 T1360,72 T1320,72 T1280,72 T1240,72 T1200,72 T1160,72 T1120,72 T1080,72 T1040,72 T1000,72 T960,72 T920,72 T880,72 T840,72 T800,72 T760,72 T720,72 T680,72 T640,72 T600,72 T560,72 T520,72 T480,72 T440,72 T400,72 T360,72 T320,72 T280,72 T240,72 T200,72 T160,72 T120,72 T80,72 T40,72 T0,72 Z;
                    M0,0 L1920,0 L1920,68 Q1900,73 1880,68 T1840,68 T1800,68 T1760,68 T1720,68 T1680,68 T1640,68 T1600,68 T1560,68 T1520,68 T1480,68 T1440,68 T1400,68 T1360,68 T1320,68 T1280,68 T1240,68 T1200,68 T1160,68 T1120,68 T1080,68 T1040,68 T1000,68 T960,68 T920,68 T880,68 T840,68 T800,68 T760,68 T720,68 T680,68 T640,68 T600,68 T560,68 T520,68 T480,68 T440,68 T400,68 T360,68 T320,68 T280,68 T240,68 T200,68 T160,68 T120,68 T80,68 T40,68 T0,68 Z;
                    M0,0 L1920,0 L1920,71 Q1900,66 1880,71 T1840,71 T1800,71 T1760,71 T1720,71 T1680,71 T1640,71 T1600,71 T1560,71 T1520,71 T1480,71 T1440,71 T1400,71 T1360,71 T1320,71 T1280,71 T1240,71 T1200,71 T1160,71 T1120,71 T1080,71 T1040,71 T1000,71 T960,71 T920,71 T880,71 T840,71 T800,71 T760,71 T720,71 T680,71 T640,71 T600,71 T560,71 T520,71 T480,71 T440,71 T400,71 T360,71 T320,71 T280,71 T240,71 T200,71 T160,71 T120,71 T80,71 T40,71 T0,71 Z;
                    M0,0 L1920,0 L1920,70 Q1900,65 1880,70 T1840,70 T1800,70 T1760,70 T1720,70 T1680,70 T1640,70 T1600,70 T1560,70 T1520,70 T1480,70 T1440,70 T1400,70 T1360,70 T1320,70 T1280,70 T1240,70 T1200,70 T1160,70 T1120,70 T1080,70 T1040,70 T1000,70 T960,70 T920,70 T880,70 T840,70 T800,70 T760,70 T720,70 T680,70 T640,70 T600,70 T560,70 T520,70 T480,70 T440,70 T400,70 T360,70 T320,70 T280,70 T240,70 T200,70 T160,70 T120,70 T80,70 T40,70 T0,70 Z
                  "
                />
              </path>
            </clipPath>
          </defs>
        </svg>
        
        <div 
          className="relative backdrop-blur-xl"
          style={{
            clipPath: 'url(#waveClip)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1729]/90 via-[#0f1729]/80 to-[#0f1729]/70"></div>
          
          <svg 
            className="absolute bottom-0 left-0 right-0 w-full" 
            height="15" 
            viewBox="0 0 1920 15" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(66, 153, 225, 0)" />
                <stop offset="15%" stopColor="rgba(66, 153, 225, 0.6)" />
                <stop offset="30%" stopColor="rgba(66, 153, 225, 0.8)" />
                <stop offset="50%" stopColor="rgba(66, 153, 225, 0.9)" />
                <stop offset="70%" stopColor="rgba(66, 153, 225, 0.8)" />
                <stop offset="85%" stopColor="rgba(66, 153, 225, 0.6)" />
                <stop offset="100%" stopColor="rgba(66, 153, 225, 0)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d="M0,8 Q50,3 100,8 T200,8 T300,8 T400,8 T500,8 T600,8 T700,8 T800,8 T900,8 T1000,8 T1100,8 T1200,8 T1300,8 T1400,8 T1500,8 T1600,8 T1700,8 T1800,8 T1900,8 T1920,8 L1920,15 L0,15 Z"
              fill="url(#waveGradient)"
              filter="url(#glow)"
              style={{
                animation: 'wave-glow 3s ease-in-out infinite',
              }}
            >
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="
                  M0,8 Q50,3 100,8 T200,8 T300,8 T400,8 T500,8 T600,8 T700,8 T800,8 T900,8 T1000,8 T1100,8 T1200,8 T1300,8 T1400,8 T1500,8 T1600,8 T1700,8 T1800,8 T1900,8 T1920,8 L1920,15 L0,15 Z;
                  M0,6 Q50,11 100,6 T200,6 T300,6 T400,6 T500,6 T600,6 T700,6 T800,6 T900,6 T1000,6 T1100,6 T1200,6 T1300,6 T1400,6 T1500,6 T1600,6 T1700,6 T1800,6 T1900,6 T1920,6 L1920,15 L0,15 Z;
                  M0,10 Q50,5 100,10 T200,10 T300,10 T400,10 T500,10 T600,10 T700,10 T800,10 T900,10 T1000,10 T1100,10 T1200,10 T1300,10 T1400,10 T1500,10 T1600,10 T1700,10 T1800,10 T1900,10 T1920,10 L1920,15 L0,15 Z;
                  M0,7 Q50,12 100,7 T200,7 T300,7 T400,7 T500,7 T600,7 T700,7 T800,7 T900,7 T1000,7 T1100,7 T1200,7 T1300,7 T1400,7 T1500,7 T1600,7 T1700,7 T1800,7 T1900,7 T1920,7 L1920,15 L0,15 Z;
                  M0,8 Q50,3 100,8 T200,8 T300,8 T400,8 T500,8 T600,8 T700,8 T800,8 T900,8 T1000,8 T1100,8 T1200,8 T1300,8 T1400,8 T1500,8 T1600,8 T1700,8 T1800,8 T1900,8 T1920,8 L1920,15 L0,15 Z
                "
              />
            </path>
          </svg>
          
          <div className="container mx-auto px-6 py-4 relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#4299e1]/20 blur-xl rounded-full"></div>
                  <img 
                    src="https://cdn.poehali.dev/files/754f65c8-b754-47ce-9539-b4aa31afdcab.png" 
                    alt="Cloud" 
                    className="w-10 h-10 relative z-10 drop-shadow-[0_0_10px_rgba(66,153,225,0.8)]"
                  />
                </div>
                <span className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(66,153,225,0.6)]">Cloud</span>
              </div>
              <div className="hidden md:flex gap-6">
                {[
                  { id: 'home', label: 'Главная' },
                  { id: 'features', label: 'Функции' },
                  { id: 'download', label: 'Скачать' },
                  { id: 'pricing', label: 'Цены' },
                  { id: 'faq', label: 'FAQ' },
                  { id: 'support', label: 'Поддержка' },
                  { id: 'updates', label: 'Обновления' },
                  { id: 'about', label: 'О проекте' },
                ].map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative text-sm text-gray-400 hover:text-white transition-all duration-300 group px-2 py-1"
                    style={{
                      transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (Math.random() * 2)}deg)`,
                    }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div 
                      className="absolute inset-0 bg-[#4299e1]/0 group-hover:bg-[#4299e1]/20 transition-all duration-300 -z-10"
                      style={{
                        clipPath: `polygon(${5 + Math.random() * 5}% 0, ${95 + Math.random() * 5}% ${Math.random() * 5}%, ${98 - Math.random() * 5}% ${95 + Math.random() * 5}%, ${2 + Math.random() * 5}% ${100 - Math.random() * 5}%)`,
                        filter: 'blur(2px)',
                      }}
                    ></div>
                  </button>
                ))}
              </div>
              <Button 
                onClick={() => setShowLogin(true)} 
                className="relative bg-[#4299e1] hover:bg-[#3182ce] text-white px-6 overflow-hidden group"
                style={{
                  clipPath: 'polygon(5% 0, 98% 2%, 97% 95%, 3% 100%)',
                }}
              >
                <span className="relative z-10">Войти</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4299e1] via-[#5ba3e6] to-[#4299e1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdyI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6cmdiYSg2NiwxNTMsMjI1LDAuMTUpO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6cmdiYSg2NiwxNTMsMjI1LDApO3N0b3Atb3BhY2l0eTowIiAvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxlbGxpcHNlIGN4PSI1MCUiIGN5PSI1MCUiIHJ4PSI1MCUiIHJ5PSI1MCUiIGZpbGw9InVybCgjZ2xvdykiLz48L3N2Zz4=')] opacity-40"></div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/files/754f65c8-b754-47ce-9539-b4aa31afdcab.png" 
                alt="Cloud Logo" 
                className="w-56 h-56 mx-auto mb-8 animate-float drop-shadow-[0_0_40px_rgba(66,153,225,0.6)]"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Cloud
            </h1>
            <p className="text-xl text-gray-400 mb-3">
              Текущая версия <span className="text-[#4299e1] font-semibold">1.0.0</span>
            </p>
            <p className="text-sm text-gray-500 mb-10">
              Посмотреть <button className="text-[#4299e1] hover:underline">Changelog</button>
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Cloud — приватный DLC-клиент для Cristalix с отличным Combat и хорошим Movement. 
              Регулярные обновления обеспечивают комфортную игру.
            </p>
            <Button size="lg" className="bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-xl px-14 py-7 text-lg font-semibold shadow-lg shadow-[#4299e1]/30">
              Запустить
            </Button>
          </div>
        </section>

        <section id="features" className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Функции <span className="text-[#4299e1]">чита</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Все необходимые модули для комфортной игры
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-[#0f1729] border border-white/10 rounded-xl p-1 mb-8">
                <TabsTrigger 
                  value="combat" 
                  className="rounded-lg data-[state=active]:bg-[#4299e1] data-[state=active]:text-white text-gray-400 font-medium"
                >
                  Combat
                </TabsTrigger>
                <TabsTrigger 
                  value="render" 
                  className="rounded-lg data-[state=active]:bg-[#4299e1] data-[state=active]:text-white text-gray-400 font-medium"
                >
                  Render
                </TabsTrigger>
                <TabsTrigger 
                  value="movement" 
                  className="rounded-lg data-[state=active]:bg-[#4299e1] data-[state=active]:text-white text-gray-400 font-medium"
                >
                  Movement
                </TabsTrigger>
                <TabsTrigger 
                  value="misc" 
                  className="rounded-lg data-[state=active]:bg-[#4299e1] data-[state=active]:text-white text-gray-400 font-medium"
                >
                  Misc
                </TabsTrigger>
              </TabsList>

              {Object.entries(features).map(([key, items]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0f1729]/50 border border-white/10 rounded-xl p-6 hover:border-[#4299e1]/50 transition-all hover:scale-105 backdrop-blur-sm"
                      >
                        <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
                        <p className="text-sm text-gray-400">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section id="download" className="py-24 px-6">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Скачать
              </h2>
              <p className="text-gray-400 text-lg">
                Последняя версия клиента Cloud
              </p>
            </div>

            <Card className="bg-[#0f1729]/80 border border-white/10 rounded-2xl overflow-hidden">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-[#4299e1]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name="Download" size={48} className="text-[#4299e1]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Cloud v1.0.0</h3>
                  <p className="text-gray-400 mb-8">Последняя версия от 03.11.2025</p>
                  <Button size="lg" className="w-full bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-xl py-6 text-lg font-semibold">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать клиент
                  </Button>
                </div>
                <div className="border-t border-white/10 pt-6 mt-6">
                  <h4 className="font-semibold text-white text-sm mb-4">Системные требования:</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Windows 10/11 (64-bit)</li>
                    <li>• Minecraft 1.8.9 - 1.20.2</li>
                    <li>• Java 8 или выше</li>
                    <li>• 4GB RAM минимум</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="pricing" className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Цены и <span className="text-[#4299e1]">подписки</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Выберите подходящий тариф для вашей игры
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto mb-16">
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-[#4299e1] via-[#4299e1] to-[#ef4444] h-1 rounded-full"></div>
              <div className="grid grid-cols-3 gap-0 mt-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">30 дней</h3>
                  <Button className="bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-lg">
                    Узнать подробней
                  </Button>
                </div>
                <div className="text-center border-x border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-2">90 дней</h3>
                  <Button className="bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-lg">
                    Узнать подробней
                  </Button>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    <span className="text-[#4299e1]">НАВ</span>
                    <span className="text-[#ef4444]">СЕГДА</span>
                  </h3>
                  <Button className="bg-gradient-to-r from-[#4299e1] to-[#ef4444] hover:opacity-90 text-white rounded-lg">
                    Узнать подробней
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-[#0f1729]/80 border border-white/10 rounded-2xl overflow-hidden hover:border-[#4299e1]/50 transition-all">
                <CardContent className="p-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#4299e1]/20 to-[#ef4444]/20 rounded-2xl flex items-center justify-center">
                      <span className="text-7xl">∞</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button className="bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-lg mb-4 font-semibold">
                      Выбор пользователей
                    </Button>
                    <h3 className="text-4xl font-bold mb-4">
                      <span className="text-[#4299e1]">НАВ</span>
                      <span className="text-[#ef4444]">СЕГДА</span>
                    </h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      Вы получаете клиент бессрочно, обновления на этот период.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-[#4299e1] to-[#ef4444] hover:opacity-90 text-white rounded-xl py-7 text-lg font-bold">
                      ПРИОБРЕСТИ
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#0f1729]/80 border border-white/10 rounded-2xl overflow-hidden hover:border-[#4299e1]/50 transition-all">
                <CardContent className="p-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-32 h-32 bg-[#4299e1]/20 rounded-2xl flex items-center justify-center">
                      <span className="text-6xl font-bold text-[#4299e1]">90</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-[#4299e1] mb-4">90 дней</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      Подписка на 3 месяца с полным доступом ко всем функциям.
                    </p>
                    <Button className="w-full bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-xl py-7 text-lg font-bold">
                      ПРИОБРЕСТИ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Вопросы и <span className="text-[#4299e1]">ответы</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Ответы на часто задаваемые вопросы
              </p>
            </div>

            <div className="space-y-4">
              {[
                { q: 'Обходит ли чит античит Cristalix?', a: 'Да, Cloud полностью обходит античит. Постоянные обновления для максимальной безопасности.' },
                { q: 'Как установить Cloud?', a: 'Скачайте лаунчер, войдите в аккаунт и нажмите "Запустить". Всё работает автоматически.' },
                { q: 'Есть ли риск бана?', a: 'Минимальный при правильном использовании. Следуйте рекомендациям в Discord.' },
                { q: 'Работает ли на других серверах?', a: 'Cloud оптимизирован для Cristalix, но совместим с большинством серверов.' },
                { q: 'Как получить поддержку?', a: 'Свяжитесь с нами через Discord или Telegram в разделе "Поддержка".' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#0f1729]/50 border border-white/10 rounded-xl p-7 hover:border-[#4299e1]/50 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{item.q}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="support" className="py-24 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Поддержка
              </h2>
              <p className="text-gray-400 text-lg">
                Свяжитесь с нами удобным способом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[#0f1729]/80 border border-white/10 rounded-2xl overflow-hidden hover:border-[#4299e1]/50 transition-all">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-[#4299e1]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name="MessageCircle" size={40} className="text-[#4299e1]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Discord</h3>
                  <p className="text-gray-400 mb-6">Наше сообщество</p>
                  <Button className="bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-xl w-full py-6 font-semibold">
                    Присоединиться
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[#0f1729]/80 border border-white/10 rounded-2xl overflow-hidden hover:border-[#4299e1]/50 transition-all">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-[#4299e1]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name="Send" size={40} className="text-[#4299e1]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Telegram</h3>
                  <p className="text-gray-400 mb-6">Быстрая связь</p>
                  <Button className="bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-xl w-full py-6 font-semibold">
                    Написать
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="updates" className="py-24 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                История <span className="text-[#4299e1]">обновлений</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Последние изменения и улучшения
              </p>
            </div>

            <div className="space-y-6">
              {[
                { version: '1.0.0', date: '03.11.2025', changes: ['Исправлен баг с ESP', 'Улучшена стабильность', 'Обновлен обход античита'] },
                { version: '0.9.5', date: '01.11.2025', changes: ['Новая функция AutoArmor', 'Улучшен интерфейс', 'Оптимизация производительности'] },
                { version: '0.9.0', date: '28.10.2025', changes: ['Исправлены критические баги', 'Добавлена поддержка Minecraft 1.20.2', 'Новый модуль Timer'] },
              ].map((update, idx) => (
                <Card key={idx} className="bg-[#0f1729]/80 border border-white/10 rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-5">
                      <h3 className="text-2xl font-bold text-[#4299e1]">v{update.version}</h3>
                      <span className="text-sm text-gray-400 bg-[#0a0e1a] px-4 py-2 rounded-lg">{update.date}</span>
                    </div>
                    <ul className="space-y-3">
                      {update.changes.map((change, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Icon name="Check" size={18} className="text-[#4299e1] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{change}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                О <span className="text-[#4299e1]">проекте</span>
              </h2>
            </div>

            <Card className="bg-[#0f1729]/80 border border-white/10 rounded-2xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <img 
                  src="https://cdn.poehali.dev/files/754f65c8-b754-47ce-9539-b4aa31afdcab.png" 
                  alt="Cloud" 
                  className="w-32 h-32 mx-auto mb-8"
                />
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Cloud — это профессиональный чит для Cristalix, разработанный командой опытных программистов. 
                  Мы работаем над проектом с 2023 года и постоянно улучшаем функционал.
                </p>
                <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                  Наша цель — предоставить лучший игровой опыт с максимальной безопасностью и надежностью.
                </p>
                <div className="flex justify-center items-center gap-4 bg-[#0a0e1a] rounded-xl py-6 px-8">
                  <Icon name="Users" size={32} className="text-[#4299e1]" />
                  <span className="text-2xl font-bold text-white">5000+ активных пользователей</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">© 2025 Cloud Cheats. Все права защищены.</p>
        </div>
      </footer>

      {showLogin && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md" 
          onClick={() => setShowLogin(false)}
        >
          <Card 
            className="w-full max-w-md bg-[#1a202e]/95 border border-white/10 rounded-2xl shadow-2xl animate-fade-in" 
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="p-10">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowLogin(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <Icon name="X" size={20} />
              </Button>
              
              <div className="text-center mb-8">
                <img 
                  src="https://cdn.poehali.dev/files/754f65c8-b754-47ce-9539-b4aa31afdcab.png" 
                  alt="Cloud" 
                  className="w-20 h-20 mx-auto mb-6"
                />
                <h2 className="text-2xl font-bold text-white mb-2">
                  Добро пожаловать в <span className="text-[#4299e1]">Cloud</span>
                </h2>
                <p className="text-gray-400 text-sm">
                  Пожалуйста, введите ваш логин и ключ.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Input 
                    placeholder="Логин" 
                    className="bg-[#0f1729] border-white/10 text-white placeholder:text-gray-500 rounded-xl h-14 text-base"
                  />
                </div>
                <div>
                  <Input 
                    type="password"
                    placeholder="Ключ" 
                    className="bg-[#0f1729] border-white/10 text-white placeholder:text-gray-500 rounded-xl h-14 text-base"
                  />
                </div>
                <Button className="w-full bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-xl h-14 text-base font-semibold">
                  Продолжить
                </Button>
                <p className="text-sm text-center text-gray-400 pt-2">
                  Забыли пароль? <button className="text-[#4299e1] hover:underline font-medium">Восстановить</button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;