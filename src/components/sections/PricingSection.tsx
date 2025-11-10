import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface PricingPlan {
  days: string;
  price: string;
  emoji: string;
  desc: string;
  image: string;
  popular?: boolean;
  isLifetime?: boolean;
}

const PricingSection = () => {
  const pricingPlans: PricingPlan[] = [
    { days: '3 дня', price: '200₽', emoji: '🥉', desc: 'Идеально для тестирования', image: '/images/plan-3days.jpg' },
    { days: '7 дней', price: '350₽', emoji: '🥈', desc: 'Оптимальный выбор на неделю', image: '/images/plan-7days.jpg' },
    { days: '30 дней', price: '1200₽', emoji: '🥇', desc: 'Самый популярный тариф', image: '/images/plan-30days.jpg', popular: true },
    { days: '60 дней', price: '1900₽', emoji: '💎', desc: 'Выгодное предложение', image: '/images/plan-60days.jpg' },
    { days: '90 дней', price: '3100₽', emoji: '👑', desc: 'Максимальная выгода', image: '/images/plan-90days.jpg' },
    { days: 'НАВСЕГДА', price: '4000₽', emoji: '🔥', desc: 'Безлимитный доступ навсегда', image: '/images/plan-lifetime.jpg', isLifetime: true },
  ];

  return (
    <section id="pricing" className="py-12 lg:py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4299e1]/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Цены и <span className="text-[#4299e1]">подписки</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Выберите подходящий тариф для вашей игры
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[pricingPlans[0], pricingPlans[1], pricingPlans[2], pricingPlans[5]].map((plan, idx) => (
            <Card 
              key={idx}
              className={`relative bg-gradient-to-br ${
                plan.popular 
                  ? 'from-[#4299e1]/20 via-[#0f1729] to-[#0f1729] border-[#4299e1] md:col-span-2 lg:col-span-1' 
                  : plan.isLifetime
                  ? 'from-[#ef4444]/20 via-[#4299e1]/20 to-[#0f1729] border-[#ef4444] md:col-span-2 lg:col-span-1'
                  : 'from-[#0f1729] to-[#0a0e1a] border-white/10'
              } border-2 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-200 cursor-pointer`}
              onClick={() => window.open('http://t.me/CloudCristalix_robot', '_blank')}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#4299e1] to-[#3182ce] py-1.5 text-center">
                  <span className="text-white text-xs font-bold tracking-wider">🔥 ПОПУЛЯРНОЕ</span>
                </div>
              )}
              
              {plan.isLifetime && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#4299e1] via-purple-500 to-[#ef4444] py-1.5 text-center">
                  <span className="text-white text-xs font-bold tracking-wider">👑 ХИТ</span>
                </div>
              )}
              
              <CardContent className={`p-6 ${plan.popular || plan.isLifetime ? 'pt-10' : ''}`}>
                <div className="text-center">
                  <div className="text-5xl mb-3">{plan.emoji}</div>
                  <h3 className={`text-xl font-bold mb-1 ${
                    plan.isLifetime ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#4299e1] to-[#ef4444]' : 'text-white'
                  }`}>
                    {plan.days}
                  </h3>
                  <p className="text-gray-400 text-xs mb-4">{plan.desc}</p>
                  
                  <div className="mb-4">
                    <span className={`text-4xl font-black ${
                      plan.isLifetime ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#4299e1] to-[#ef4444]' : 'text-[#4299e1]'
                    }`}>
                      {plan.price}
                    </span>
                  </div>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-[#4299e1] hover:bg-[#3182ce]' 
                        : plan.isLifetime
                        ? 'bg-gradient-to-r from-[#4299e1] to-[#ef4444] hover:opacity-90'
                        : 'bg-white/10 hover:bg-white/20'
                    } text-white rounded-xl py-5 text-sm font-bold transition-all`}
                  >
                    {plan.isLifetime ? '🚀 КУПИТЬ' : 'ВЫБРАТЬ'}
                  </Button>

                  <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <Icon name="Check" size={16} className="text-[#4299e1]" />
                      Все модули
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <Icon name="Check" size={16} className="text-[#4299e1]" />
                      Обход античита
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <Icon name="Check" size={16} className="text-[#4299e1]" />
                      Поддержка 24/7
                    </div>
                    {plan.isLifetime && (
                      <div className="flex items-center gap-2 text-xs text-[#ef4444] font-semibold">
                        <Icon name="Zap" size={16} className="text-[#ef4444]" />
                        Обновления навсегда
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-[#0f1729]/80 border border-[#4299e1]/30 rounded-full px-6 py-3">
            <Icon name="Shield" size={20} className="text-[#4299e1]" />
            <p className="text-gray-300 text-sm">
              <span className="font-bold text-white">Гарантия возврата</span> в течение 24 часов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
