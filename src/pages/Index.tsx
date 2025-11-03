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
              onClick={() => scrollToSection('pricing')} 
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
                  Посмотреть <button className="text-[#4299e1] hover:underline">Changelog</button>
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