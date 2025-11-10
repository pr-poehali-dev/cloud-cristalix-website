import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Feature {
  name: string;
  desc: string;
  keybind?: string;
}

interface Features {
  combat: Feature[];
  render: Feature[];
  movement: Feature[];
  misc: Feature[];
}

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('combat');

  const features: Features = {
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

  return (
    <section id="features" className="py-12 lg:py-24 px-6">
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
          <div className="lg:hidden mb-6">
            <div className="relative">
              <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
                {['combat', 'render', 'movement', 'misc'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-shrink-0 px-6 py-3 rounded-xl font-medium transition-all snap-center ${
                      activeTab === tab
                        ? 'bg-[#4299e1] text-white shadow-lg shadow-[#4299e1]/30'
                        : 'bg-[#0f1729] text-gray-400 border border-white/10'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <TabsList className="hidden lg:grid w-full grid-cols-4 bg-[#0f1729] border border-white/10 rounded-xl p-1 mb-8">
            <TabsTrigger 
              value="combat" 
              className="rounded-lg data-[state=active]:bg-[#4299e1] data-[state=active]:text-white text-gray-400 font-medium text-xs lg:text-base"
            >
              Combat
            </TabsTrigger>
            <TabsTrigger 
              value="render" 
              className="rounded-lg data-[state=active]:bg-[#4299e1] data-[state=active]:text-white text-gray-400 font-medium text-xs lg:text-base"
            >
              Render
            </TabsTrigger>
            <TabsTrigger 
              value="movement" 
              className="rounded-lg data-[state=active]:bg-[#4299e1] data-[state=active]:text-white text-gray-400 font-medium text-xs lg:text-base"
            >
              Movement
            </TabsTrigger>
            <TabsTrigger 
              value="misc" 
              className="rounded-lg data-[state=active]:bg-[#4299e1] data-[state=active]:text-white text-gray-400 font-medium text-xs lg:text-base"
            >
              Misc
            </TabsTrigger>
          </TabsList>

          {Object.entries(features).map(([key, featureList]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                <div className="space-y-2 lg:space-y-3 max-h-[400px] lg:max-h-none overflow-y-auto lg:overflow-visible pr-2 lg:pr-0 custom-scrollbar">
                  {featureList.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group bg-[#0a0e1a]/60 border border-white/10 rounded-lg p-3 lg:p-4 hover:border-[#4299e1]/50 hover:bg-[#0a0e1a]/80 transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-2 lg:gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm lg:text-base font-semibold text-white group-hover:text-[#4299e1] transition-colors mb-0.5 lg:mb-1">
                            {feature.name}
                          </h3>
                          <p className="text-xs lg:text-sm text-gray-400">
                            {feature.desc}
                          </p>
                        </div>
                        {feature.keybind && (
                          <span className="text-[10px] lg:text-xs px-1.5 lg:px-2 py-0.5 rounded bg-[#4299e1]/20 text-[#4299e1] border border-[#4299e1]/30 font-mono whitespace-nowrap flex-shrink-0">
                            {feature.keybind}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 lg:sticky lg:top-24 hidden lg:block">
                  <img 
                    src={`/images/${key}-features.png`}
                    alt={`${key.charAt(0).toUpperCase() + key.slice(1)} Features`}
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturesSection;
