import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const RainEffect = () => {
  const raindrops = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 2 + Math.random() * 3,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-[2px] h-[20px] bg-gradient-to-b from-primary/80 to-transparent"
          style={{
            left: `${drop.left}%`,
            animation: `rain-fall ${drop.duration}s linear infinite`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const PixelCloud = () => (
  <div className="relative w-64 h-32 mx-auto mb-8 animate-float">
    <img 
      src="https://cdn.poehali.dev/files/0dbd3d58-f4a1-4c66-a8d5-103566991176.png" 
      alt="Cloud Logo" 
      className="w-full h-full object-contain"
      style={{ imageRendering: 'pixelated' }}
    />
  </div>
);

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'download', 'pricing', 'faq', 'support', 'updates', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative">
      <RainEffect />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-pixel text-primary cursor-pointer" onClick={() => scrollToSection('home')}>
              CLOUD
            </h1>
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
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button onClick={() => setShowLogin(true)} className="pixel-border">
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center animate-fade-in">
            <PixelCloud />
            <h2 className="text-4xl md:text-6xl font-pixel text-primary mb-6">
              Cloud Cheats
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Самый мощный чит для Cristalix. Обходит античит, постоянные обновления, удобный интерфейс.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('download')} className="pixel-border">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('features')} className="pixel-border">
                <Icon name="Zap" size={20} className="mr-2" />
                Функции
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="min-h-screen py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-pixel text-primary mb-12 text-center">
              Функции чита
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'Crosshair', title: 'Aim Assist', desc: 'Точное наведение на противников' },
                { icon: 'Eye', title: 'ESP', desc: 'Видение игроков сквозь стены' },
                { icon: 'Zap', title: 'Kill Aura', desc: 'Автоматическая атака врагов' },
                { icon: 'Shield', title: 'Anti-Knockback', desc: 'Защита от отбрасывания' },
                { icon: 'Activity', title: 'Speed', desc: 'Увеличение скорости движения' },
                { icon: 'Package', title: 'AutoArmor', desc: 'Автоматическая броня' },
              ].map((feature, idx) => (
                <Card key={idx} className="pixel-border border-2 hover:border-primary transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <Icon name={feature.icon} size={32} className="text-primary mb-4" />
                    <h3 className="text-xl font-pixel text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="min-h-screen py-20 px-4 flex items-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-pixel text-primary mb-12 text-center">
              Скачать
            </h2>
            <Card className="pixel-border border-2">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Icon name="Download" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-pixel mb-2">Cloud v2.5.1</h3>
                  <p className="text-muted-foreground mb-6">Последняя версия от 03.11.2025</p>
                  <Button size="lg" className="w-full pixel-border">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать чит
                  </Button>
                </div>
                <div className="border-t border-border pt-6 mt-6">
                  <h4 className="font-pixel text-sm mb-4">Системные требования:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Windows 10/11</li>
                    <li>• Minecraft 1.8.9 - 1.20.2</li>
                    <li>• Java 8 или выше</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="pricing" className="min-h-screen py-20 px-4 flex items-center">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-pixel text-primary mb-12 text-center">
              Цены и подписки
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: 'День', price: '99₽', period: '1 день', features: ['Все функции', 'Обновления', 'Поддержка'] },
                { name: 'Неделя', price: '499₽', period: '7 дней', features: ['Все функции', 'Обновления', 'Поддержка', 'Скидка 29%'], highlight: true },
                { name: 'Месяц', price: '1499₽', period: '30 дней', features: ['Все функции', 'Обновления', 'Поддержка', 'Скидка 49%'] },
              ].map((plan, idx) => (
                <Card key={idx} className={`pixel-border border-2 ${plan.highlight ? 'border-primary scale-105' : ''}`}>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-pixel text-primary mb-4">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <Icon name="Check" size={16} className="text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full pixel-border" variant={plan.highlight ? 'default' : 'outline'}>
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="min-h-screen py-20 px-4 flex items-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-pixel text-primary mb-12 text-center">
              Вопросы и ответы
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: 'Обходит ли чит античит?', a: 'Да, Cloud полностью обходит античит Cristalix. Мы постоянно обновляем защиту.' },
                { q: 'Как установить чит?', a: 'Скачайте файл, запустите лаунчер Minecraft и добавьте чит в папку mods.' },
                { q: 'Есть ли риск бана?', a: 'Риск минимален при правильном использовании. Следуйте нашим рекомендациям.' },
                { q: 'Работает ли на других серверах?', a: 'Cloud оптимизирован для Cristalix, но работает и на других серверах.' },
                { q: 'Как получить поддержку?', a: 'Свяжитесь с нами через Discord или Telegram в разделе "Поддержка".' },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="pixel-border border-2 border-border px-6">
                  <AccordionTrigger className="hover:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="support" className="min-h-screen py-20 px-4 flex items-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-pixel text-primary mb-12 text-center">
              Поддержка
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="pixel-border border-2 hover:border-primary transition-all">
                <CardContent className="p-6 text-center">
                  <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-pixel mb-2">Discord</h3>
                  <p className="text-muted-foreground mb-4">Наше сообщество</p>
                  <Button variant="outline" className="pixel-border">
                    Присоединиться
                  </Button>
                </CardContent>
              </Card>
              <Card className="pixel-border border-2 hover:border-primary transition-all">
                <CardContent className="p-6 text-center">
                  <Icon name="Send" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-pixel mb-2">Telegram</h3>
                  <p className="text-muted-foreground mb-4">Быстрая связь</p>
                  <Button variant="outline" className="pixel-border">
                    Написать
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="updates" className="min-h-screen py-20 px-4 flex items-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-pixel text-primary mb-12 text-center">
              История обновлений
            </h2>
            <div className="space-y-6">
              {[
                { version: '2.5.1', date: '03.11.2025', changes: ['Исправлен баг с ESP', 'Улучшена стабильность', 'Обновлен обход античита'] },
                { version: '2.5.0', date: '01.11.2025', changes: ['Новая функция AutoArmor', 'Улучшен интерфейс', 'Оптимизация производительности'] },
                { version: '2.4.5', date: '28.10.2025', changes: ['Исправлены критические баги', 'Добавлена поддержка Minecraft 1.20.2'] },
              ].map((update, idx) => (
                <Card key={idx} className="pixel-border border-2">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-pixel text-primary">v{update.version}</h3>
                      <span className="text-sm text-muted-foreground">{update.date}</span>
                    </div>
                    <ul className="space-y-2">
                      {update.changes.map((change, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Icon name="GitCommit" size={16} className="text-primary mr-2 mt-1" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen py-20 px-4 flex items-center">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-5xl font-pixel text-primary mb-12">
              О проекте
            </h2>
            <Card className="pixel-border border-2">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Cloud — это профессиональный чит для Cristalix, разработанный командой опытных программистов. 
                  Мы работаем над проектом с 2023 года и постоянно улучшаем функционал.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Наша цель — предоставить лучший игровой опыт с максимальной безопасностью и надежностью.
                </p>
                <div className="flex justify-center gap-4 mt-8">
                  <Icon name="Users" size={24} className="text-primary" />
                  <span className="text-xl font-bold">5000+ активных пользователей</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Cloud Cheats. Все права защищены.
          </p>
        </div>
      </footer>

      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" onClick={() => setShowLogin(false)}>
          <Card className="w-full max-w-md pixel-border border-2 border-primary animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-pixel text-primary">Вход</h2>
                <Button variant="ghost" size="icon" onClick={() => setShowLogin(false)}>
                  <Icon name="X" size={24} />
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Логин</label>
                  <Input placeholder="Введите логин" className="pixel-border" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Пароль</label>
                  <Input type="password" placeholder="Введите пароль" className="pixel-border" />
                </div>
                <Button className="w-full pixel-border">
                  Продолжить
                </Button>
                <p className="text-sm text-center text-muted-foreground">
                  Забыли пароль? <button className="text-primary hover:underline">Восстановить</button>
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
