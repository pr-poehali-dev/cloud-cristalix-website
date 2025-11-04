import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [activeTab, setActiveTab] = useState('combat');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedPlan, setSelectedPlan] = useState(2);
  const [sliderValue, setSliderValue] = useState(2);

  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMousePosition({ x, y });
        rafId = 0;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const pricingPlans = [
    { days: '3 дня', price: '200₽', emoji: '🥉', desc: 'Идеально для тестирования', image: 'https://cdn.poehali.dev/projects/3ba16267-2dd4-44d8-82ea-66fa8d1f167c/files/0d744ba6-3d61-45b6-bdb2-c27274138792.jpg' },
    { days: '7 дней', price: '350₽', emoji: '🥈', desc: 'Оптимальный выбор на неделю', image: 'https://cdn.poehali.dev/projects/3ba16267-2dd4-44d8-82ea-66fa8d1f167c/files/d17ec92a-11eb-47a4-b768-0c1688acb713.jpg' },
    { days: '30 дней', price: '1200₽', emoji: '🥇', desc: 'Самый популярный тариф', image: 'https://cdn.poehali.dev/projects/3ba16267-2dd4-44d8-82ea-66fa8d1f167c/files/61f1eb4e-ff3b-4c6f-bbf1-f9a4ad069eac.jpg', popular: true },
    { days: '60 дней', price: '1900₽', emoji: '💎', desc: 'Выгодное предложение', image: 'https://cdn.poehali.dev/projects/3ba16267-2dd4-44d8-82ea-66fa8d1f167c/files/fd64adcf-d98e-4f43-8899-078bd34dc788.jpg' },
    { days: '90 дней', price: '3100₽', emoji: '👑', desc: 'Максимальная выгода', image: 'https://cdn.poehali.dev/projects/3ba16267-2dd4-44d8-82ea-66fa8d1f167c/files/4c6d7575-5f13-4bb5-b331-76b1459fb182.jpg' },
    { days: 'НАВСЕГДА', price: '4000₽', emoji: '🔥', desc: 'Безлимитный доступ навсегда', image: 'https://cdn.poehali.dev/projects/3ba16267-2dd4-44d8-82ea-66fa8d1f167c/files/19e68a3d-fe88-43fa-9a0c-f124e3b04bc2.jpg', isLifetime: true },
  ];

  const features = {
    combat: [
      { name: 'AimBot', desc: 'Поворачивает голову до хитбокса.' },
      { name: 'Hitbox', desc: 'Увеличение хитбоксов у сущностей.' },
      { name: 'AutoGApple', desc: 'Автоматическое поедание золотых яблок.' },
      { name: 'AutoClicker', desc: 'Автоматически кликает.' },
      { name: 'AutoArmor', desc: 'Надевает лучшую броню.' },
      { name: 'TriggerBot', desc: 'Автоматическая атака при наведении на сущность.' },
      { name: 'AutoTotem', desc: 'Автоматически берёт тотем в руку.' },
    ],
    render: [
      { name: 'ESP', desc: 'Вид игроков через стены.' },
      { name: 'ClickGUI', desc: 'Гуи', keybind: 'RSHIFT' },
      { name: 'NameTags', desc: 'Кастомное выделение никнейма игрока.' },
      { name: 'Crosshair', desc: 'Настраиваемый прицел.' },
      { name: 'BlockESP', desc: 'Подсвечивает блоки в мире.' },
      { name: 'Keystrokes', desc: 'Отображает нажатия клавиш.' },
      { name: 'Chams', desc: 'Рендер игроков через стены.' },
      { name: 'Notifications', desc: 'Уведомления клиента.' },
      { name: 'TargetESP', desc: 'Подсвечивает цель аимбота.' },
      { name: 'Tracers', desc: 'Линии до игроков.' },
      { name: 'Triangles', desc: 'Треугольники до определённых мест или игроков.' },
      { name: 'NoRender', desc: 'Убирает рендер определённых элементов.' },
      { name: 'ChinaHat', desc: 'Китайская шляпа у вас на голове.' },
      { name: 'Trails', desc: 'Линия бегущая за вами.', keybind: 'Trails' },
      { name: 'PenisESP', desc: '...' },
      { name: 'HUD', desc: 'Добавляет элементов в оверлей.' },
      { name: 'BlockOverlay', desc: 'Подсвечивает блок под курсором.' },
    ],
    movement: [
      { name: 'AutoSprint', desc: 'Автоматическое нажатие ctrl.' },
      { name: 'Fly', desc: 'Ракета юху или полноценный флай.' },
      { name: 'EntityFly', desc: 'Позволяет летать на лодке и других сущностях.' },
      { name: 'MultiJump', desc: 'Прыжок в воздухе.' },
      { name: 'AutoWalk', desc: 'Автоматически идёт вперёд.' },
      { name: 'Parkour', desc: 'Автоматически прыгает, когда Вы на краю блока.' },
      { name: 'BHop', desc: 'Прыгает при приземлении, ускоряя передвижение.' },
      { name: 'NoGravity', desc: 'Убирает гравитацию у игрока.' },
      { name: 'SafeWalk', desc: 'Шифт, когда вы у краю блока.' },
      { name: 'Velocity', desc: 'Полный анти киок бек.' },
    ],
    misc: [
      { name: 'Additions', desc: 'Дополнительные функции для отдельных режимов.' },
      { name: 'AntiBot', desc: 'Отключает атаку NPC.' },
      { name: 'ClickTP', desc: 'Телепорт по клику на мыши.' },
      { name: 'FriendManager', desc: 'Удаляет или добавляет друзей в список по клику.' },
      { name: 'Optimization', desc: 'Небольшая оптимизация игры.' },
      { name: 'World', desc: 'Кастомизация мира.' },
      { name: 'NoFriendInteract', desc: 'Не дает взаимодействовать с друзьями.' },
      { name: 'NoCommands', desc: 'Отключение команд клиента.' },
      { name: 'ShippingBot', desc: 'Автоматически выдаёт грузы (в режиме выживание бомжа в России).' },
      { name: 'StaffAlert', desc: 'Уведомления о заходе модераторов на реалм.' },
      { name: 'Spinner', desc: 'Вращает головой (визуально).' },
      { name: 'AutoRespawn', desc: 'Автоматическое возрождение после смерти.' },
      { name: 'AutoFish', desc: 'Автоматически ловит рыбу.' },
      { name: 'ShowCaves', desc: 'Показывает пещеры.' },
      { name: 'AutoTool', desc: 'Автоматически выбирает лучший инструмент для блока.' },
      { name: 'AutoEat', desc: 'Автоматически ест, когда у вас не полный голод.' },
      { name: 'FastBreak', desc: 'Эффект спешки.' },
      { name: 'AutoMine', desc: 'Автоматически добывает блок.' },
      { name: 'FastPlace', desc: 'Быстрая установка блоков.' },
      { name: 'ChestStealer', desc: 'Автоматически забирает предметы из сундуков.' },
      { name: 'InvMove', desc: 'Позволяет двигаться с открытым инвентарём.' },
      { name: 'Configs', desc: 'Управление конфигами.' },
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
                src="https://cdn.poehali.dev/files/754f65c8-b754-47ce-9539-b4aa31afdcab.png" 
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
                { id: 'support', label: 'Поддержка' },
                { id: 'updates', label: 'Обновления' },
                { id: 'about', label: 'О проекте' },
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
        <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdyI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6cmdiYSg2NiwxNTMsMjI1LDAuMTUpO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6cmdiYSg2NiwxNTMsMjI1LDApO3N0b3Atb3BhY2l0eTowIiAvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxlbGxpcHNlIGN4PSI1MCUiIGN5PSI1MCUiIHJ4PSI1MCUiIHJ5PSI1MCUiIGZpbGw9InVybCgjZ2xvdykiLz48L3N2Zz4=')] opacity-40"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="mb-8">
                  <img 
                    src="https://cdn.poehali.dev/files/754f65c8-b754-47ce-9539-b4aa31afdcab.png" 
                    alt="Cloud Logo" 
                    className="w-40 h-40 mx-auto lg:mx-0 mb-8 animate-float drop-shadow-[0_0_25px_rgba(66,153,225,0.5)]"
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
                  perspective: '2000px',
                }}
              >
                <div
                  className="relative transition-transform duration-500 ease-out will-change-transform"
                  style={{
                    transform: `rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg) translateZ(30px)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div
                    className="absolute inset-0 bg-[#4299e1]/15 blur-2xl rounded-3xl"
                    style={{
                      transform: 'translateZ(-30px)',
                    }}
                  ></div>
                  <img 
                    src="https://cdn.poehali.dev/files/d560ba32-268d-4b1b-b19f-faafec7a80a3.png" 
                    alt="Cloud GUI" 
                    className="relative z-10 w-full max-w-2xl rounded-3xl border-2 border-[#4299e1]/30"
                    style={{
                      boxShadow: '0 20px 60px rgba(66, 153, 225, 0.3)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 px-6">
          <div className="container mx-auto max-w-7xl">
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

              <TabsContent value="combat" className="mt-0">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-3">
                    {features.combat.map((feature, idx) => (
                      <div
                        key={idx}
                        className="group bg-[#0a0e1a]/60 border border-white/10 rounded-lg p-4 hover:border-[#4299e1]/50 hover:bg-[#0a0e1a]/80 transition-all cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-base font-semibold text-white group-hover:text-[#4299e1] transition-colors mb-1">
                              {feature.name}
                            </h3>
                            <p className="text-sm text-gray-400">
                              {feature.desc}
                            </p>
                          </div>
                          {feature.keybind && (
                            <span className="text-xs px-2 py-0.5 rounded bg-[#4299e1]/20 text-[#4299e1] border border-[#4299e1]/30 font-mono whitespace-nowrap">
                              {feature.keybind}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 lg:sticky lg:top-24">
                    <img 
                      src="https://cdn.poehali.dev/files/fb37bc3c-c1c9-4e50-be40-abf2a1228a06.png" 
                      alt="Combat Features" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="render" className="mt-0">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-3">
                    {features.render.map((feature, idx) => (
                      <div
                        key={idx}
                        className="group bg-[#0a0e1a]/60 border border-white/10 rounded-lg p-4 hover:border-[#4299e1]/50 hover:bg-[#0a0e1a]/80 transition-all cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-base font-semibold text-white group-hover:text-[#4299e1] transition-colors mb-1">
                              {feature.name}
                            </h3>
                            <p className="text-sm text-gray-400">
                              {feature.desc}
                            </p>
                          </div>
                          {feature.keybind && (
                            <span className="text-xs px-2 py-0.5 rounded bg-[#4299e1]/20 text-[#4299e1] border border-[#4299e1]/30 font-mono whitespace-nowrap">
                              {feature.keybind}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 lg:sticky lg:top-24">
                    <img 
                      src="https://cdn.poehali.dev/files/c68d0336-33d6-4b6b-ae3c-fa19176c5e5c.png" 
                      alt="Render Features" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="movement" className="mt-0">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-3">
                    {features.movement.map((feature, idx) => (
                      <div
                        key={idx}
                        className="group bg-[#0a0e1a]/60 border border-white/10 rounded-lg p-4 hover:border-[#4299e1]/50 hover:bg-[#0a0e1a]/80 transition-all cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-base font-semibold text-white group-hover:text-[#4299e1] transition-colors mb-1">
                              {feature.name}
                            </h3>
                            <p className="text-sm text-gray-400">
                              {feature.desc}
                            </p>
                          </div>
                          {feature.keybind && (
                            <span className="text-xs px-2 py-0.5 rounded bg-[#4299e1]/20 text-[#4299e1] border border-[#4299e1]/30 font-mono whitespace-nowrap">
                              {feature.keybind}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 lg:sticky lg:top-24">
                    <img 
                      src="https://cdn.poehali.dev/files/de4d5d23-2016-486f-a8dd-f169aae42b17.png" 
                      alt="Movement Features" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="misc" className="mt-0">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-3">
                    {features.misc.map((feature, idx) => (
                      <div
                        key={idx}
                        className="group bg-[#0a0e1a]/60 border border-white/10 rounded-lg p-4 hover:border-[#4299e1]/50 hover:bg-[#0a0e1a]/80 transition-all cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-base font-semibold text-white group-hover:text-[#4299e1] transition-colors mb-1">
                              {feature.name}
                            </h3>
                            <p className="text-sm text-gray-400">
                              {feature.desc}
                            </p>
                          </div>
                          {feature.keybind && (
                            <span className="text-xs px-2 py-0.5 rounded bg-[#4299e1]/20 text-[#4299e1] border border-[#4299e1]/30 font-mono whitespace-nowrap">
                              {feature.keybind}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 lg:sticky lg:top-24">
                    <img 
                      src="https://cdn.poehali.dev/files/0804f60f-b2a6-438f-98ea-ea22e19ce056.png" 
                      alt="Misc Features" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
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

            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm font-medium">🥉 3 дня</span>
                      <span className="text-gray-400 text-sm font-medium">🔥 НАВСЕГДА</span>
                    </div>
                    
                    <div className="relative py-2">
                      <input 
                        type="range" 
                        min="0" 
                        max="5" 
                        step="0.01"
                        value={sliderValue}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setSliderValue(val);
                          setSelectedPlan(Math.round(val));
                        }}
                        onMouseUp={(e) => {
                          const val = Number((e.target as HTMLInputElement).value);
                          const rounded = Math.round(val);
                          setSliderValue(rounded);
                          setSelectedPlan(rounded);
                        }}
                        onTouchEnd={(e) => {
                          const val = Number((e.target as HTMLInputElement).value);
                          const rounded = Math.round(val);
                          setSliderValue(rounded);
                          setSelectedPlan(rounded);
                        }}
                        className="w-full h-2 rounded-full appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #4299e1 0%, #4299e1 ${(sliderValue / 5) * 85}%, #ef4444 ${(sliderValue / 5) * 85}%, #ef4444 100%)`,
                          transition: 'background 0.15s ease-out'
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-6 gap-1 text-center">
                      {pricingPlans.map((plan, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedPlan(idx);
                            setSliderValue(idx);
                          }}
                          className={`text-xs py-2 px-1 rounded-xl transition-all duration-200 cursor-pointer ${
                            selectedPlan === idx 
                              ? 'text-white bg-[#4299e1]/20 font-bold scale-105' 
                              : 'text-gray-500 hover:text-gray-300'
                          }`}
                        >
                          <div className="text-base mb-1">{plan.emoji}</div>
                          <div className="whitespace-nowrap text-[10px]">{plan.days}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Card className="bg-[#0f1729]/80 border border-white/10 rounded-2xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div className="mb-6">
                          <div className="text-6xl mb-4">{pricingPlans[selectedPlan].emoji}</div>
                          
                          {pricingPlans[selectedPlan].popular && (
                            <div className="inline-block px-3 py-1 bg-[#4299e1]/20 border border-[#4299e1]/50 rounded-full text-[#4299e1] text-xs font-bold mb-3">
                              🔥 ПОПУЛЯРНОЕ
                            </div>
                          )}
                          
                          <h3 className={`text-4xl font-bold mb-3 transition-all duration-300 ${pricingPlans[selectedPlan].isLifetime ? '' : 'text-white'}`}>
                            {pricingPlans[selectedPlan].isLifetime ? (
                              <>
                                <span className="text-[#4299e1]">НАВ</span>
                                <span className="text-[#ef4444]">СЕГДА</span>
                              </>
                            ) : (
                              pricingPlans[selectedPlan].days
                            )}
                          </h3>
                          
                          <p className="text-6xl font-black text-[#4299e1] mb-3 transition-all duration-300">
                            {pricingPlans[selectedPlan].price}
                          </p>
                          
                          <p className="text-gray-400 transition-all duration-300">
                            {pricingPlans[selectedPlan].desc}
                          </p>
                        </div>
                        
                        <Button 
                          onClick={() => window.open('http://t.me/CloudCristalix_robot', '_blank')}
                          className={`w-full ${pricingPlans[selectedPlan].isLifetime 
                            ? 'bg-gradient-to-r from-[#4299e1] to-[#ef4444]' 
                            : 'bg-[#4299e1]'} hover:opacity-90 text-white rounded-xl py-7 text-lg font-bold`}
                        >
                          ПРИОБРЕСТИ
                        </Button>

                        <div className="mt-6 pt-6 border-t border-white/10">
                          <ul className="text-sm text-gray-400 space-y-2 text-left">
                            <li className="flex items-center gap-2">
                              <Icon name="Check" size={16} className="text-[#4299e1]" />
                              Все модули разблокированы
                            </li>
                            <li className="flex items-center gap-2">
                              <Icon name="Check" size={16} className="text-[#4299e1]" />
                              Обход античита Cristalix
                            </li>
                            <li className="flex items-center gap-2">
                              <Icon name="Check" size={16} className="text-[#4299e1]" />
                              Поддержка 24/7 в Discord
                            </li>
                            {pricingPlans[selectedPlan].isLifetime && (
                              <li className="flex items-center gap-2">
                                <Icon name="Check" size={16} className="text-[#ef4444]" />
                                <span className="text-[#ef4444] font-semibold">Бесплатные обновления навсегда</span>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-white/10 lg:sticky lg:top-24">
                  <img 
                    src={pricingPlans[selectedPlan].image}
                    alt={`Тариф ${pricingPlans[selectedPlan].days}`}
                    className="w-full h-auto transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-gradient-to-b from-[#0a0e1a] to-[#050711] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NiwxNTMsMjI1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-3 gap-8">
              
              <Card id="download" className="group bg-gradient-to-br from-[#0f1729]/90 to-[#0a0e1a]/90 border border-white/10 rounded-2xl overflow-hidden hover:border-[#4299e1]/70 hover:shadow-[0_0_30px_rgba(66,153,225,0.3)] transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4299e1]/0 to-[#4299e1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-[#4299e1]/30 blur-xl rounded-full group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-24 h-24 bg-gradient-to-br from-[#4299e1]/30 to-[#4299e1]/10 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon name="Download" size={48} className="text-[#4299e1] group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    
                    <div className="inline-block mb-2">
                      <div className="bg-[#4299e1]/20 px-4 py-1 rounded-full border border-[#4299e1]/30">
                        <p className="text-xs font-semibold text-[#4299e1]">ПОСЛЕДНЯЯ ВЕРСИЯ</p>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-[#4299e1] transition-colors duration-300">Скачать</h3>
                    <p className="text-lg font-semibold text-gray-300 mb-1">Cloud v1.0.0</p>
                    <p className="text-xs text-gray-500 mb-6">03.11.2025</p>
                    
                    <Button 
                      onClick={() => window.open('http://t.me/CloudCristalix_robot', '_blank')}
                      className="w-full bg-gradient-to-r from-[#4299e1] to-[#3182ce] hover:from-[#3182ce] hover:to-[#2c5aa0] text-white rounded-xl py-6 font-bold text-lg shadow-lg hover:shadow-[#4299e1]/50 transform hover:scale-105 transition-all duration-300 mb-6 group/btn"
                    >
                      <Icon name="Download" size={22} className="mr-2 group-hover/btn:animate-bounce" />
                      Скачать клиент
                    </Button>
                    
                    <div className="border-t border-white/10 pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Системные требования</p>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <ul className="text-xs text-gray-400 space-y-3 text-left">
                        <li className="flex items-center gap-3 hover:text-gray-300 transition-colors group/item">
                          <div className="w-6 h-6 rounded-lg bg-[#4299e1]/20 flex items-center justify-center group-hover/item:bg-[#4299e1]/30 transition-colors">
                            <Icon name="Monitor" size={14} className="text-[#4299e1]" />
                          </div>
                          <span className="font-medium">Windows 10/11 (64-bit)</span>
                        </li>
                        <li className="flex items-center gap-3 hover:text-gray-300 transition-colors group/item">
                          <div className="w-6 h-6 rounded-lg bg-[#4299e1]/20 flex items-center justify-center group-hover/item:bg-[#4299e1]/30 transition-colors">
                            <Icon name="Gamepad2" size={14} className="text-[#4299e1]" />
                          </div>
                          <span className="font-medium">Minecraft 1.8.9 - 1.20.2</span>
                        </li>
                        <li className="flex items-center gap-3 hover:text-gray-300 transition-colors group/item">
                          <div className="w-6 h-6 rounded-lg bg-[#4299e1]/20 flex items-center justify-center group-hover/item:bg-[#4299e1]/30 transition-colors">
                            <Icon name="Coffee" size={14} className="text-[#4299e1]" />
                          </div>
                          <span className="font-medium">Java 8 или выше</span>
                        </li>
                        <li className="flex items-center gap-3 hover:text-gray-300 transition-colors group/item">
                          <div className="w-6 h-6 rounded-lg bg-[#4299e1]/20 flex items-center justify-center group-hover/item:bg-[#4299e1]/30 transition-colors">
                            <Icon name="HardDrive" size={14} className="text-[#4299e1]" />
                          </div>
                          <span className="font-medium">4GB RAM минимум</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card id="support" className="group bg-gradient-to-br from-[#0f1729]/90 to-[#0a0e1a]/90 border border-white/10 rounded-2xl overflow-hidden hover:border-[#4299e1]/70 hover:shadow-[0_0_30px_rgba(66,153,225,0.3)] transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4299e1]/0 to-[#4299e1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-[#4299e1]/30 blur-xl rounded-full group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-24 h-24 bg-gradient-to-br from-[#4299e1]/30 to-[#4299e1]/10 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                        <Icon name="Headphones" size={48} className="text-[#4299e1] group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    
                    <div className="inline-block mb-2">
                      <div className="bg-green-500/20 px-4 py-1 rounded-full border border-green-500/30">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <p className="text-xs font-semibold text-green-400">ОНЛАЙН 24/7</p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#4299e1] transition-colors duration-300">Поддержка</h3>
                    <p className="text-sm text-gray-400 mb-8">Всегда на связи</p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="relative group/discord bg-gradient-to-br from-[#0a0e1a]/80 to-[#0a0e1a]/40 border border-white/5 rounded-xl p-5 hover:border-[#5865F2]/50 hover:shadow-[0_0_20px_rgba(88,101,242,0.3)] transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/0 to-[#5865F2]/20 opacity-0 group-hover/discord:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-[#5865F2]/20 rounded-xl flex items-center justify-center group-hover/discord:bg-[#5865F2]/30 group-hover/discord:scale-110 transition-all duration-300">
                              <Icon name="MessageCircle" size={24} className="text-[#5865F2]" />
                            </div>
                            <div className="text-left flex-1">
                              <p className="text-base font-bold text-white">Discord</p>
                              <p className="text-xs text-gray-500">Активное сообщество</p>
                            </div>
                            <div className="bg-green-500/20 px-2 py-1 rounded-full">
                              <p className="text-xs font-bold text-green-400">2.5K</p>
                            </div>
                          </div>
                          <Button 
                            onClick={() => window.open('https://discord.gg/f7dRFuYcXP', '_blank')}
                            className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl py-4 text-sm font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
                          >
                            Присоединиться →
                          </Button>
                        </div>
                      </div>

                      <div className="relative group/telegram bg-gradient-to-br from-[#0a0e1a]/80 to-[#0a0e1a]/40 border border-white/5 rounded-xl p-5 hover:border-[#0088cc]/50 hover:shadow-[0_0_20px_rgba(0,136,204,0.3)] transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0088cc]/0 to-[#0088cc]/20 opacity-0 group-hover/telegram:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-[#0088cc]/20 rounded-xl flex items-center justify-center group-hover/telegram:bg-[#0088cc]/30 group-hover/telegram:scale-110 transition-all duration-300">
                              <Icon name="Send" size={24} className="text-[#0088cc]" />
                            </div>
                            <div className="text-left flex-1">
                              <p className="text-base font-bold text-white">Telegram</p>
                              <p className="text-xs text-gray-500">Мгновенные ответы</p>
                            </div>
                            <div className="bg-[#0088cc]/20 px-2 py-1 rounded-full">
                              <p className="text-xs font-bold text-[#0088cc]">⚡ FAST</p>
                            </div>
                          </div>
                          <Button 
                            onClick={() => window.open('https://t.me/CloudCristalix', '_blank')}
                            className="w-full bg-[#0088cc] hover:bg-[#006699] text-white rounded-xl py-4 text-sm font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
                          >
                            Написать →
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#0a0e1a]/60 border border-white/5 rounded-xl p-4">
                      <p className="text-xs text-gray-500">Среднее время ответа: <span className="text-[#4299e1] font-bold">~ 5 мин</span></p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card id="about" className="group bg-gradient-to-br from-[#0f1729]/90 to-[#0a0e1a]/90 border border-white/10 rounded-2xl overflow-hidden hover:border-[#4299e1]/70 hover:shadow-[0_0_30px_rgba(66,153,225,0.3)] transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4299e1]/0 to-[#4299e1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-[#4299e1]/30 blur-xl rounded-full group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-24 h-24 bg-gradient-to-br from-[#4299e1]/30 to-[#4299e1]/10 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-500">
                        <img 
                          src="https://cdn.poehali.dev/files/754f65c8-b754-47ce-9539-b4aa31afdcab.png" 
                          alt="Cloud" 
                          className="w-16 h-16 group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <div className="inline-block mb-2">
                      <div className="bg-purple-500/20 px-4 py-1 rounded-full border border-purple-500/30">
                        <p className="text-xs font-semibold text-purple-400">С 2023 ГОДА</p>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#4299e1] transition-colors duration-300">О проекте</h3>
                    <p className="text-sm text-gray-400 mb-6">Cloud Client</p>
                    
                    <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                      Профессиональный чит для <span className="text-[#4299e1] font-semibold">Cristalix</span>, созданный командой опытных разработчиков
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="group/stat bg-gradient-to-r from-[#0a0e1a]/80 to-[#0a0e1a]/40 border border-white/5 rounded-xl p-4 hover:border-[#4299e1]/30 hover:shadow-[0_0_15px_rgba(66,153,225,0.2)] transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#4299e1]/20 rounded-lg flex items-center justify-center group-hover/stat:bg-[#4299e1]/30 group-hover/stat:scale-110 transition-all duration-300">
                              <Icon name="Users" size={22} className="text-[#4299e1]" />
                            </div>
                            <div className="text-left">
                              <p className="text-2xl font-bold text-white group-hover/stat:text-[#4299e1] transition-colors">120+</p>
                              <p className="text-xs text-gray-500">Активных юзеров</p>
                            </div>
                          </div>
                          <div className="text-green-400 text-xs font-bold">+8% ↑</div>
                        </div>
                      </div>

                      <div className="group/stat bg-gradient-to-r from-[#0a0e1a]/80 to-[#0a0e1a]/40 border border-white/5 rounded-xl p-4 hover:border-green-500/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover/stat:bg-green-500/30 group-hover/stat:scale-110 transition-all duration-300">
                              <Icon name="Shield" size={22} className="text-green-400" />
                            </div>
                            <div className="text-left">
                              <p className="text-2xl font-bold text-white group-hover/stat:text-green-400 transition-colors">100%</p>
                              <p className="text-xs text-gray-500">Безопасность</p>
                            </div>
                          </div>
                          <Icon name="Check" size={20} className="text-green-400" />
                        </div>
                      </div>

                      <div className="group/stat bg-gradient-to-r from-[#0a0e1a]/80 to-[#0a0e1a]/40 border border-white/5 rounded-xl p-4 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover/stat:bg-purple-500/30 group-hover/stat:scale-110 transition-all duration-300">
                              <Icon name="Zap" size={22} className="text-purple-400" />
                            </div>
                            <div className="text-left">
                              <p className="text-2xl font-bold text-white group-hover/stat:text-purple-400 transition-colors">24/7</p>
                              <p className="text-xs text-gray-500">Обновления</p>
                            </div>
                          </div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        <section id="faq" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050711] via-[#0a0e1a] to-[#050711]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NiwxNTMsMjI1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="bg-[#4299e1]/10 px-5 py-2 rounded-full border border-[#4299e1]/30">
                  <p className="text-sm font-bold text-[#4299e1]">FAQ</p>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Вопросы и <span className="text-[#4299e1]">ответы</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Ответы на часто задаваемые вопросы
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  icon: 'ShieldCheck',
                  color: 'green',
                  q: 'Обходит ли чит античит Cristalix?', 
                  a: 'Да, Cloud полностью обходит античит. Постоянные обновления для максимальной безопасности.' 
                },
                { 
                  icon: 'Download',
                  color: 'blue',
                  q: 'Как установить Cloud?', 
                  a: 'Скачайте лаунчер, войдите в аккаунт и нажмите "Запустить". Всё работает автоматически.' 
                },
                { 
                  icon: 'AlertTriangle',
                  color: 'yellow',
                  q: 'Есть ли риск бана?', 
                  a: 'Минимальный при правильном использовании. Следуйте рекомендациям в Discord.' 
                },
                { 
                  icon: 'Server',
                  color: 'purple',
                  q: 'Работает ли на других серверах?', 
                  a: 'Cloud оптимизирован для Cristalix, но совместим с большинством серверов.' 
                },
                { 
                  icon: 'Headphones',
                  color: 'pink',
                  q: 'Как получить поддержку?', 
                  a: 'Свяжитесь с нами через Discord или Telegram в разделе "Поддержка".' 
                },
                { 
                  icon: 'Rocket',
                  color: 'orange',
                  q: 'Как часто выходят обновления?', 
                  a: 'Мы выпускаем обновления еженедельно для поддержки стабильной работы и новых функций.' 
                },
              ].map((item, idx) => {
                const colorMap: Record<string, {bg: string, icon: string, border: string}> = {
                  green: { bg: 'bg-green-500/20', icon: 'text-green-400', border: 'border-green-500/30' },
                  blue: { bg: 'bg-[#4299e1]/20', icon: 'text-[#4299e1]', border: 'border-[#4299e1]/30' },
                  yellow: { bg: 'bg-yellow-500/20', icon: 'text-yellow-400', border: 'border-yellow-500/30' },
                  purple: { bg: 'bg-purple-500/20', icon: 'text-purple-400', border: 'border-purple-500/30' },
                  pink: { bg: 'bg-pink-500/20', icon: 'text-pink-400', border: 'border-pink-500/30' },
                  orange: { bg: 'bg-orange-500/20', icon: 'text-orange-400', border: 'border-orange-500/30' },
                };
                const colors = colorMap[item.color];
                
                return (
                  <div
                    key={idx}
                    className="group bg-gradient-to-br from-[#0f1729]/80 to-[#0a0e1a]/60 border border-white/10 rounded-2xl p-6 hover:border-[#4299e1]/50 hover:shadow-[0_0_20px_rgba(66,153,225,0.2)] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon name={item.icon as any} size={24} className={colors.icon} />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#4299e1] transition-colors pt-2">{item.q}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed ml-16">{item.a}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="updates" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#050711] to-[#0a0e1a]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#4299e1]/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="bg-purple-500/10 px-5 py-2 rounded-full border border-purple-500/30">
                  <p className="text-sm font-bold text-purple-400">CHANGELOG</p>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                История <span className="text-[#4299e1]">обновлений</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Следите за развитием проекта
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4299e1]/50 via-purple-500/50 to-transparent"></div>
              
              <div className="space-y-8">
                {[
                  { 
                    version: '1.0.0', 
                    date: '03 ноября 2025', 
                    tag: 'STABLE',
                    tagColor: 'green',
                    icon: 'Rocket',
                    changes: [
                      { type: 'fix', text: 'Исправлен баг с ESP на серверах Cristalix' },
                      { type: 'improve', text: 'Улучшена стабильность работы в фоновом режиме' },
                      { type: 'security', text: 'Обновлен обход античита для версии 1.8-1.20' }
                    ] 
                  },
                  { 
                    version: '0.9.5', 
                    date: '01 ноября 2025', 
                    tag: 'BETA',
                    tagColor: 'blue',
                    icon: 'Sparkles',
                    changes: [
                      { type: 'new', text: 'Новая функция AutoArmor с настройкой приоритета' },
                      { type: 'improve', text: 'Улучшен интерфейс меню настроек' },
                      { type: 'improve', text: 'Оптимизация производительности на 25%' }
                    ] 
                  },
                  { 
                    version: '0.9.0', 
                    date: '28 октября 2025', 
                    tag: 'PATCH',
                    tagColor: 'yellow',
                    icon: 'Wrench',
                    changes: [
                      { type: 'fix', text: 'Исправлены критические баги с вылетами' },
                      { type: 'new', text: 'Добавлена поддержка Minecraft 1.20.2' },
                      { type: 'new', text: 'Новый модуль Timer с гибкими настройками' }
                    ] 
                  },
                ].map((update, idx) => {
                  const tagColors: Record<string, string> = {
                    green: 'bg-green-500/20 text-green-400 border-green-500/30',
                    blue: 'bg-[#4299e1]/20 text-[#4299e1] border-[#4299e1]/30',
                    yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
                  };
                  
                  const changeIcons: Record<string, { icon: string, color: string }> = {
                    new: { icon: 'Plus', color: 'text-green-400' },
                    fix: { icon: 'Bug', color: 'text-red-400' },
                    improve: { icon: 'TrendingUp', color: 'text-[#4299e1]' },
                    security: { icon: 'ShieldCheck', color: 'text-purple-400' },
                  };
                  
                  return (
                    <div key={idx} className="relative pl-20">
                      <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-[#4299e1]/30 to-purple-500/30 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                        <Icon name={update.icon as any} size={28} className="text-[#4299e1]" />
                      </div>
                      
                      <div className="group bg-gradient-to-br from-[#0f1729]/90 to-[#0a0e1a]/60 border border-white/10 rounded-2xl p-8 hover:border-[#4299e1]/50 hover:shadow-[0_0_30px_rgba(66,153,225,0.2)] transition-all duration-300">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                          <h3 className="text-3xl font-bold text-white group-hover:text-[#4299e1] transition-colors">v{update.version}</h3>
                          <div className={`px-3 py-1 rounded-lg border text-xs font-bold ${tagColors[update.tagColor]}`}>
                            {update.tag}
                          </div>
                          <div className="ml-auto text-sm text-gray-400 flex items-center gap-2">
                            <Icon name="Calendar" size={16} />
                            {update.date}
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-1 gap-3">
                          {update.changes.map((change, i) => {
                            const iconData = changeIcons[change.type];
                            return (
                              <div key={i} className="flex items-start gap-3 bg-[#0a0e1a]/40 rounded-xl p-4 hover:bg-[#0a0e1a]/60 transition-colors">
                                <div className="w-8 h-8 bg-[#0f1729] rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Icon name={iconData.icon as any} size={16} className={iconData.color} />
                                </div>
                                <p className="text-gray-300 leading-relaxed pt-1">{change.text}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


      </main>

      <footer className="relative z-10 bg-gradient-to-b from-[#050711] to-[#020408] border-t border-white/5 pt-20 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2NiwxNTMsMjI1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4299e1]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#4299e1]/20 blur-xl rounded-full"></div>
                  <img 
                    src="https://cdn.poehali.dev/files/754f65c8-b754-47ce-9539-b4aa31afdcab.png" 
                    alt="Cloud" 
                    className="w-14 h-14 relative"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white">Cloud<span className="text-[#4299e1]">.</span></h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Профессиональный чит для Minecraft с постоянными обновлениями, высочайшим уровнем безопасности и круглосуточной технической поддержкой
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-[#4299e1]/10 rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={18} className="text-[#4299e1]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">120+ активных юзеров</p>
                    <p className="text-gray-500 text-xs">Клиентов всего 2400+</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Icon name="Shield" size={18} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">100% безопасность</p>
                    <p className="text-gray-500 text-xs">Без банов при правильном использовании</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a href="https://discord.gg/f7dRFuYcXP" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-2.5 bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-xl hover:bg-[#5865F2]/20 hover:border-[#5865F2]/50 transition-all">
                  <Icon name="MessageCircle" size={18} className="text-[#5865F2]" />
                  <span className="text-sm font-semibold text-[#5865F2]">Discord</span>
                  <Icon name="ExternalLink" size={14} className="text-[#5865F2] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="https://t.me/CloudCristalix" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-2.5 bg-[#0088cc]/10 border border-[#0088cc]/30 rounded-xl hover:bg-[#0088cc]/20 hover:border-[#0088cc]/50 transition-all">
                  <Icon name="Send" size={18} className="text-[#0088cc]" />
                  <span className="text-sm font-semibold text-[#0088cc]">Telegram</span>
                  <Icon name="ExternalLink" size={14} className="text-[#0088cc] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider flex items-center gap-2">
                <Icon name="Grid" size={16} className="text-[#4299e1]" />
                Навигация
              </h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-sm text-gray-400 hover:text-[#4299e1] transition-colors flex items-center gap-2 group"><Icon name="Zap" size={14} className="opacity-50 group-hover:opacity-100" /> Функции</a></li>
                <li><a href="#pricing" className="text-sm text-gray-400 hover:text-[#4299e1] transition-colors flex items-center gap-2 group"><Icon name="DollarSign" size={14} className="opacity-50 group-hover:opacity-100" /> Цены</a></li>
                <li><a href="#download" className="text-sm text-gray-400 hover:text-[#4299e1] transition-colors flex items-center gap-2 group"><Icon name="Download" size={14} className="opacity-50 group-hover:opacity-100" /> Скачать</a></li>
                <li><a href="#updates" className="text-sm text-gray-400 hover:text-[#4299e1] transition-colors flex items-center gap-2 group"><Icon name="History" size={14} className="opacity-50 group-hover:opacity-100" /> Обновления</a></li>
                <li><a href="#about" className="text-sm text-gray-400 hover:text-[#4299e1] transition-colors flex items-center gap-2 group"><Icon name="Info" size={14} className="opacity-50 group-hover:opacity-100" /> О проекте</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider flex items-center gap-2">
                <Icon name="Headphones" size={16} className="text-[#4299e1]" />
                Помощь
              </h4>
              <ul className="space-y-3">
                <li><a href="#faq" className="text-sm text-gray-400 hover:text-[#4299e1] transition-colors flex items-center gap-2 group"><Icon name="HelpCircle" size={14} className="opacity-50 group-hover:opacity-100" /> FAQ</a></li>
                <li><a href="#support" className="text-sm text-gray-400 hover:text-[#4299e1] transition-colors flex items-center gap-2 group"><Icon name="Mail" size={14} className="opacity-50 group-hover:opacity-100" /> Связаться</a></li>
                <li><a href="https://discord.gg/f7dRFuYcXP" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-[#4299e1] transition-colors flex items-center gap-2 group"><Icon name="MessageCircle" size={14} className="opacity-50 group-hover:opacity-100" /> Discord</a></li>
                <li><a href="https://t.me/CloudCristalix" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-[#4299e1] transition-colors flex items-center gap-2 group"><Icon name="Send" size={14} className="opacity-50 group-hover:opacity-100" /> Telegram</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider flex items-center gap-2">
                <Icon name="Activity" size={16} className="text-[#4299e1]" />
                Статус системы
              </h4>
              
              <div className="space-y-3 mb-6">
                <div className="bg-[#0f1729]/50 border border-green-500/30 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-400">Cristalix bypass
</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-green-400">ONLINE</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0f1729]/50 border border-green-500/30 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-400">Cloud Api
</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-green-400">ONLINE</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0f1729]/50 border border-[#4299e1]/30 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-400">Обновления</span>
                    <div className="flex items-center gap-1.5">
                      <Icon name="CheckCircle" size={12} className="text-[#4299e1]" />
                      <span className="text-xs font-bold text-[#4299e1]">v1.0.0</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <a href="#" className="block bg-gradient-to-r from-[#4299e1]/10 to-purple-500/10 border border-[#4299e1]/30 rounded-xl p-4 hover:border-[#4299e1]/50 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#4299e1]">НОВОЕ</span>
                  <Icon name="ArrowRight" size={14} className="text-[#4299e1] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-gray-300">Обновление 1.0.0 уже доступно!</p>
              </a>
            </div>

          </div>

          <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">© 2025 <span className="text-[#4299e1] font-bold">Cloud</span>. Все права защищены.</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>Сделано с</span>
                  <Icon name="Heart" size={14} className="text-red-400 fill-red-400 animate-pulse" />
                  <span>для геймеров</span>
                </div>
                <div className="h-4 w-px bg-white/10"></div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Icon name="Zap" size={14} className="text-yellow-400" />
                  <span>Powered by Cloud Team</span>
                </div>
              </div>
            </div>
          </div>
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