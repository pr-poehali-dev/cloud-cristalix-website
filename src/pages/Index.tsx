import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const RainEffect = () => {
  const raindrops = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 0.5 + Math.random() * 1,
    delay: Math.random() * 2,
    opacity: 0.1 + Math.random() * 0.3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-[1px] bg-blue-400/40"
          style={{
            left: `${drop.left}%`,
            height: '60px',
            animation: `rain-fall ${drop.duration}s linear infinite`,
            animationDelay: `${drop.delay}s`,
            opacity: drop.opacity,
          }}
        />
      ))}
    </div>
  );
};

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

  return (
    <div className="min-h-screen relative bg-[#0a0e1a]">
      <RainEffect />
      
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1729]/80 via-[#0a0e1a]/95 to-[#0a0e1a]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDY2LCAxNTMsIDIyNSwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1729]/60 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/0dbd3d58-f4a1-4c66-a8d5-103566991176.png" 
                alt="Cloud" 
                className="w-10 h-10"
                style={{ imageRendering: 'pixelated' }}
              />
              <span className="text-2xl font-bold text-white">Cloud</span>
            </div>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Функции', 'Товары', 'FAQ'].map((item) => (
                <button
                  key={item}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={() => setShowLogin(true)} className="bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-lg px-6">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/files/0dbd3d58-f4a1-4c66-a8d5-103566991176.png" 
                alt="Cloud Logo" 
                className="w-48 h-48 mx-auto mb-8 animate-float"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Cloud
            </h1>
            <p className="text-xl text-gray-400 mb-3">
              Текущая версия <span className="text-[#4299e1] font-semibold">1.0.0</span>
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Посмотреть <button className="text-[#4299e1] hover:underline">Changelog</button>
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Cloud — приватный DLC-клиент для Cristalix с отличным Combat и хорошим Movement. 
              Регулярные обновления обеспечивают комфортную игру.
            </p>
            <Button size="lg" className="bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-lg px-12 py-6 text-lg">
              Запустить
            </Button>
          </div>
        </section>

        <section className="py-20 px-6">
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
                  className="rounded-lg data-[state=active]:bg-[#4299e1] data-[state=active]:text-white text-gray-400"
                >
                  Combat
                </TabsTrigger>
                <TabsTrigger 
                  value="render" 
                  className="rounded-lg data-[state=active]:bg-[#4299e1] data-[state=active]:text-white text-gray-400"
                >
                  Render
                </TabsTrigger>
                <TabsTrigger 
                  value="movement" 
                  className="rounded-lg data-[state=active]:bg-[#4299e1] data-[state=active]:text-white text-gray-400"
                >
                  Movement
                </TabsTrigger>
                <TabsTrigger 
                  value="misc" 
                  className="rounded-lg data-[state=active]:bg-[#4299e1] data-[state=active]:text-white text-gray-400"
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

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Популярные <span className="text-[#4299e1]">товары</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Мы предоставляем вам лучший клиент для комфортной игры, 
                который даст вам наилучшие впечатления от игры.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4299e1] via-[#4299e1] to-[#ef4444] h-1 rounded-full"></div>
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
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#4299e1]/20 to-[#ef4444]/20 rounded-2xl flex items-center justify-center">
                      <span className="text-6xl">∞</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button className="bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-lg mb-4">
                      Выбор пользователей
                    </Button>
                    <h3 className="text-3xl font-bold mb-4">
                      <span className="text-[#4299e1]">НАВ</span>
                      <span className="text-[#ef4444]">СЕГДА</span>
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Вы получаете клиент бессрочно, обновления на этот период.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-[#4299e1] to-[#ef4444] hover:opacity-90 text-white rounded-lg py-6 text-lg">
                      ПРИОБРЕСТИ
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#0f1729]/80 border border-white/10 rounded-2xl overflow-hidden hover:border-[#4299e1]/50 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-32 h-32 bg-[#4299e1]/20 rounded-2xl flex items-center justify-center">
                      <span className="text-5xl font-bold">90</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-[#4299e1] mb-4">90 дней</h3>
                    <p className="text-gray-400 mb-6">
                      Подписка на 3 месяца с полным доступом ко всем функциям.
                    </p>
                    <Button className="w-full bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-lg py-6 text-lg">
                      ПРИОБРЕСТИ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Часто задаваемые <span className="text-[#4299e1]">вопросы</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: 'Обходит ли чит античит Cristalix?', a: 'Да, Cloud полностью обходит античит. Постоянные обновления для максимальной безопасности.' },
                { q: 'Как установить Cloud?', a: 'Скачайте лаунчер, войдите в аккаунт и нажмите "Запустить". Всё работает автоматически.' },
                { q: 'Есть ли риск бана?', a: 'Минимальный при правильном использовании. Следуйте рекомендациям в Discord.' },
                { q: 'Работает ли на других серверах?', a: 'Cloud оптимизирован для Cristalix, но совместим с большинством серверов.' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#0f1729]/50 border border-white/10 rounded-xl p-6 hover:border-[#4299e1]/50 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-gray-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">© 2025 Cloud Cheats. Все права защищены.</p>
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
            <CardContent className="p-8">
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
                  src="https://cdn.poehali.dev/files/0dbd3d58-f4a1-4c66-a8d5-103566991176.png" 
                  alt="Cloud" 
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ imageRendering: 'pixelated' }}
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
                    className="bg-[#0f1729] border-white/10 text-white placeholder:text-gray-500 rounded-lg h-12"
                  />
                </div>
                <div>
                  <Input 
                    type="password"
                    placeholder="Ключ" 
                    className="bg-[#0f1729] border-white/10 text-white placeholder:text-gray-500 rounded-lg h-12"
                  />
                </div>
                <Button className="w-full bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-lg h-12 text-base">
                  Продолжить
                </Button>
                <p className="text-sm text-center text-gray-400">
                  Забыли пароль? <button className="text-[#4299e1] hover:underline">Восстановить</button>
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
