import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BottomSections = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Как установить Cloud?',
      answer: 'Скачайте файл, запустите его и следуйте инструкциям установщика. После установки запустите Minecraft через наш лаунчер.'
    },
    {
      question: 'Безопасно ли использовать чит?',
      answer: 'Да, при правильном использовании и соблюдении рекомендаций наш чит полностью безопасен и обходит античит.'
    },
    {
      question: 'Какие версии Minecraft поддерживаются?',
      answer: 'Cloud поддерживает версии Minecraft от 1.8.9 до 1.20.2. Оптимизирован для игры на серверах Cristalix.'
    },
    {
      question: 'Как получить возврат средств?',
      answer: 'Обратитесь в поддержку в течение 24 часов после покупки, если чит не работает по нашей вине.'
    },
    {
      question: 'Можно ли использовать на нескольких ПК?',
      answer: 'Одна лицензия привязывается к одному компьютеру. Для использования на нескольких ПК нужно приобрести дополнительные лицензии.'
    }
  ];

  return (
    <>
      <section className="py-12 lg:py-24 px-6 bg-gradient-to-b from-[#0a0e1a] to-[#050711] relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            
            <Card id="download" className="group bg-gradient-to-br from-[#0f1729]/90 to-[#0a0e1a]/90 border border-white/10 rounded-2xl overflow-hidden hover:border-[#4299e1]/70 transition-colors duration-200 relative">
              <CardContent className="p-5 lg:p-8 relative z-10">
                <div className="text-center">
                  <div className="relative mb-4 lg:mb-6">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-[#4299e1]/30 to-[#4299e1]/10 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto">
                      <Icon name="Download" size={32} className="text-[#4299e1] lg:w-12 lg:h-12" />
                    </div>
                  </div>
                  
                  <div className="inline-block mb-2">
                    <div className="bg-[#4299e1]/20 px-4 py-1 rounded-full border border-[#4299e1]/30">
                      <p className="text-xs font-semibold text-[#4299e1]">ПОСЛЕДНЯЯ ВЕРСИЯ</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl lg:text-3xl font-bold text-white mb-0.5 lg:mb-1 group-hover:text-[#4299e1] transition-colors duration-300">Скачать</h3>
                  <p className="text-base lg:text-lg font-semibold text-gray-300 mb-0.5 lg:mb-1">Cloud v1.0.0</p>
                  <p className="text-[10px] lg:text-xs text-gray-500 mb-4 lg:mb-6">03.11.2025</p>
                  
                  <Button 
                    onClick={() => window.open('http://t.me/CloudCristalix_robot', '_blank')}
                    className="w-full bg-gradient-to-r from-[#4299e1] to-[#3182ce] hover:from-[#3182ce] hover:to-[#2c5aa0] text-white rounded-xl py-4 lg:py-6 font-bold text-base lg:text-lg shadow-lg transition-colors duration-200 mb-4 lg:mb-6"
                  >
                    <Icon name="Download" size={18} className="mr-2 lg:w-5 lg:h-5" />
                    Скачать клиент
                  </Button>
                  
                  <div className="border-t border-white/10 pt-4 lg:pt-6">
                    <div className="flex items-center justify-between mb-3 lg:mb-4">
                      <p className="text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-wider">Системные требования</p>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <ul className="text-[10px] lg:text-xs text-gray-400 space-y-2 lg:space-y-3 text-left">
                      <li className="flex items-center gap-2 lg:gap-3">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-lg bg-[#4299e1]/20 flex items-center justify-center flex-shrink-0">
                          <Icon name="Monitor" size={12} className="text-[#4299e1] lg:w-3.5 lg:h-3.5" />
                        </div>
                        <span className="font-medium">Windows 10/11 (64-bit)</span>
                      </li>
                      <li className="flex items-center gap-2 lg:gap-3">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-lg bg-[#4299e1]/20 flex items-center justify-center flex-shrink-0">
                          <Icon name="Gamepad2" size={12} className="text-[#4299e1] lg:w-3.5 lg:h-3.5" />
                        </div>
                        <span className="font-medium">Minecraft 1.8.9 - 1.20.2</span>
                      </li>
                      <li className="flex items-center gap-2 lg:gap-3">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-lg bg-[#4299e1]/20 flex items-center justify-center flex-shrink-0">
                          <Icon name="Coffee" size={12} className="text-[#4299e1] lg:w-3.5 lg:h-3.5" />
                        </div>
                        <span className="font-medium">Java 8 или выше</span>
                      </li>
                      <li className="flex items-center gap-2 lg:gap-3">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-lg bg-[#4299e1]/20 flex items-center justify-center flex-shrink-0">
                          <Icon name="HardDrive" size={12} className="text-[#4299e1] lg:w-3.5 lg:h-3.5" />
                        </div>
                        <span className="font-medium">4GB RAM минимум</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="support" className="group bg-gradient-to-br from-[#0f1729]/90 to-[#0a0e1a]/90 border border-white/10 rounded-2xl overflow-hidden hover:border-[#4299e1]/70 transition-colors duration-200 relative">
              <CardContent className="p-5 lg:p-8 relative z-10">
                <div className="text-center">
                  <div className="relative mb-4 lg:mb-6">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-[#4299e1]/30 to-[#4299e1]/10 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto">
                      <Icon name="Headphones" size={32} className="text-[#4299e1] lg:w-12 lg:h-12" />
                    </div>
                  </div>
                  
                  <div className="inline-block mb-2">
                    <div className="bg-green-500/20 px-4 py-1 rounded-full border border-green-500/30">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <p className="text-xs font-semibold text-green-400">ОНЛАЙН 24/7</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl lg:text-3xl font-bold text-white mb-1 lg:mb-2 group-hover:text-[#4299e1] transition-colors duration-300">Поддержка</h3>
                  <p className="text-xs lg:text-sm text-gray-400 mb-4 lg:mb-8">Всегда на связи</p>
                  
                  <div className="space-y-2 lg:space-y-4 mb-4 lg:mb-6">
                    <div className="relative group/discord bg-gradient-to-br from-[#0a0e1a]/80 to-[#0a0e1a]/40 border border-white/5 rounded-xl p-4 lg:p-5 hover:border-[#5865F2]/50 transition-colors duration-200 overflow-hidden">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 lg:gap-4 mb-2 lg:mb-4">
                          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#5865F2]/20 rounded-xl flex items-center justify-center group-hover/discord:bg-[#5865F2]/30 transition-colors">
                            <Icon name="MessageCircle" size={18} className="text-[#5865F2] lg:w-6 lg:h-6" />
                          </div>
                          <div className="flex-1 text-left">
                            <p className="text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-wider">Discord Server</p>
                            <p className="text-sm lg:text-base font-semibold text-white">Сообщество</p>
                          </div>
                          <Icon name="ArrowRight" size={16} className="text-gray-400 group-hover/discord:text-[#5865F2] transition-colors duration-200 lg:w-5 lg:h-5" />
                        </div>
                        <p className="text-[10px] lg:text-xs text-gray-500 text-left">Присоединяйся к нашему Discord серверу</p>
                      </div>
                    </div>

                    <div className="relative group/telegram bg-gradient-to-br from-[#0a0e1a]/80 to-[#0a0e1a]/40 border border-white/5 rounded-xl p-4 lg:p-5 hover:border-[#0088cc]/50 transition-colors duration-200 overflow-hidden">
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 lg:gap-4 mb-2 lg:mb-4">
                          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0088cc]/20 rounded-xl flex items-center justify-center group-hover/telegram:bg-[#0088cc]/30 transition-colors">
                            <Icon name="Send" size={18} className="text-[#0088cc] lg:w-6 lg:h-6" />
                          </div>
                          <div className="flex-1 text-left">
                            <p className="text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-wider">Telegram канал</p>
                            <p className="text-sm lg:text-base font-semibold text-white">Новости и обновления</p>
                          </div>
                          <Icon name="ArrowRight" size={16} className="text-gray-400 group-hover/telegram:text-[#0088cc] transition-colors duration-200 lg:w-5 lg:h-5" />
                        </div>
                        <p className="text-[10px] lg:text-xs text-gray-500 text-left">Следи за новостями в Telegram</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[10px] lg:text-xs text-gray-500">Время ответа: <span className="text-[#4299e1] font-semibold">{"<"} 10 минут</span></p>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-[#0f1729]/90 to-[#0a0e1a]/90 border border-white/10 rounded-2xl overflow-hidden hover:border-[#4299e1]/70 transition-colors duration-200 relative">
              <CardContent className="p-5 lg:p-8 relative z-10">
                <div className="text-center">
                  <div className="relative mb-4 lg:mb-6">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-[#4299e1]/30 to-[#4299e1]/10 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto">
                      <Icon name="Info" size={32} className="text-[#4299e1] lg:w-12 lg:h-12" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl lg:text-3xl font-bold text-white mb-1 lg:mb-2 group-hover:text-[#4299e1] transition-colors duration-300">О проекте</h3>
                  <p className="text-xs lg:text-sm text-gray-400 mb-4 lg:mb-6">Наша история</p>
                  
                  <p className="text-[10px] lg:text-xs text-gray-400 leading-relaxed mb-4 lg:mb-6 text-left">
                    Cloud — это результат многолетней работы команды профессиональных разработчиков. Мы создаем инструменты, которые делают игру более интересной и комфортной.
                  </p>
                  
                  <div className="space-y-2 lg:space-y-3">
                    <div className="bg-[#0a0e1a]/60 border border-white/10 rounded-lg p-2 lg:p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] lg:text-xs text-gray-400">Опыт разработки</span>
                        <span className="text-xs lg:text-sm font-bold text-[#4299e1]">2+ года</span>
                      </div>
                    </div>
                    <div className="bg-[#0a0e1a]/60 border border-white/10 rounded-lg p-2 lg:p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] lg:text-xs text-gray-400">Активных пользователей</span>
                        <span className="text-xs lg:text-sm font-bold text-[#4299e1]">2400+</span>
                      </div>
                    </div>
                    <div className="bg-[#0a0e1a]/60 border border-white/10 rounded-lg p-2 lg:p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] lg:text-xs text-gray-400">Обновлений</span>
                        <span className="text-xs lg:text-sm font-bold text-[#4299e1]">150+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 lg:py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Частые <span className="text-[#4299e1]">вопросы</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Ответы на самые популярные вопросы
            </p>
          </div>

          <div className="space-y-3 lg:space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#0f1729]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-[#4299e1]/50 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 lg:p-6 text-left flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3 lg:gap-4 flex-1">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-[#4299e1]/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="HelpCircle" size={18} className="text-[#4299e1] lg:w-5 lg:h-5" />
                    </div>
                    <h3 className="text-base lg:text-lg font-semibold text-white group-hover:text-[#4299e1] transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <Icon
                    name="ChevronDown"
                    size={20}
                    className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-[#4299e1]' : ''
                    }`}
                  />
                </button>
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: openFaq === idx ? '500px' : '0',
                    opacity: openFaq === idx ? 1 : 0,
                  }}
                >
                  <div className="px-4 lg:px-6 pb-4 lg:pb-6 pt-0">
                    <div className="pl-11 lg:pl-14">
                      <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="updates" className="py-12 lg:py-24 px-6 bg-gradient-to-b from-[#0a0e1a] to-[#050711]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Последние <span className="text-[#4299e1]">обновления</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Следите за развитием проекта
            </p>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <div className="bg-gradient-to-br from-[#0f1729]/90 to-[#0a0e1a]/90 border border-[#4299e1]/30 rounded-2xl p-5 lg:p-8">
              <div className="flex items-start gap-3 lg:gap-4 mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#4299e1]/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" size={20} className="text-[#4299e1] lg:w-6 lg:h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 lg:gap-3 mb-1 lg:mb-2">
                    <h3 className="text-lg lg:text-xl font-bold text-white">Версия 1.0.0</h3>
                    <span className="px-2 lg:px-3 py-0.5 lg:py-1 bg-green-500/20 border border-green-500/30 rounded-full text-[10px] lg:text-xs font-semibold text-green-400">
                      STABLE
                    </span>
                  </div>
                  <p className="text-xs lg:text-sm text-gray-400 mb-2 lg:mb-3">03.11.2025</p>
                  <p className="text-sm lg:text-base text-white mb-3 lg:mb-4 font-medium">
                    Сносим старьё! Весь GUI и HUD были переписаны с нуля для вашего максимального комфорта!
                  </p>
                  <ul className="space-y-1.5 lg:space-y-2 text-xs lg:text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4299e1] mt-0.5 flex-shrink-0">[~]</span>
                      <span>Обновлен Fly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-0.5 flex-shrink-0">[-]</span>
                      <span>Временно вырезан BlockEsp Gui</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4299e1] mt-0.5 flex-shrink-0">[~]</span>
                      <span>Исправлена неработоспособность подсветки некоторых блоков в BlockEsp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4299e1] mt-0.5 flex-shrink-0">[~]</span>
                      <span>Теперь при запуске некоторые значения в модулях сразу активны</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">[+]</span>
                      <span>В Optimization добавлена настройка дистанции рендера черепов и стендов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">[+]</span>
                      <span>Добавлен JumpCircle</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#0f1729]/50 border border-white/10 rounded-2xl p-5 lg:p-8">
              <div className="flex items-start gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Icon name="History" size={20} className="text-gray-400 lg:w-6 lg:h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-1 lg:mb-2">Версия 0.9</h3>
                  <p className="text-xs lg:text-sm text-gray-400 mb-3 lg:mb-4">25.10.2025</p>
                  <ul className="space-y-1.5 lg:space-y-2 text-xs lg:text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-0.5 flex-shrink-0">[+]</span>
                      <span>Возвращен модуль EntityESP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-0.5 flex-shrink-0">[+]</span>
                      <span>Баг фикс</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-gradient-to-b from-[#050711] to-[#020408] border-t border-white/5 pt-20 pb-8 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-6 lg:gap-10 mb-10 lg:mb-16">
            
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#4299e1]/20 blur-xl rounded-full"></div>
                  <img 
                    src="/images/logo.png" 
                    alt="Cloud" 
                    className="w-10 h-10 lg:w-14 lg:h-14 relative"
                  />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">Cloud<span className="text-[#4299e1]">.</span></h3>
              </div>
              <p className="text-xs lg:text-sm text-gray-400 leading-relaxed mb-4 lg:mb-6">
                Профессиональный чит для Minecraft с постоянными обновлениями, высочайшим уровнем безопасности и круглосуточной технической поддержкой
              </p>
              
              <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-6">
                <div className="flex items-center gap-2 lg:gap-3 text-sm">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#4299e1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={16} className="text-[#4299e1] lg:w-4 lg:h-4" />
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm text-white font-semibold">120+ активных юзеров</p>
                    <p className="text-gray-500 text-[10px] lg:text-xs">Клиентов всего 2400+</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 lg:gap-3 text-sm">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={16} className="text-green-400 lg:w-4 lg:h-4" />
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm text-white font-semibold">100% безопасность</p>
                    <p className="text-gray-500 text-[10px] lg:text-xs">Без банов при правильном использовании</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 lg:gap-3">
                <a href="https://discord.gg/f7dRFuYcXP" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-2 lg:py-2.5 bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-xl hover:bg-[#5865F2]/20 hover:border-[#5865F2]/50 transition-all">
                  <Icon name="MessageCircle" size={16} className="text-[#5865F2] lg:w-4 lg:h-4" />
                  <span className="text-xs lg:text-sm font-semibold text-[#5865F2]">Discord</span>
                  <Icon name="ExternalLink" size={12} className="text-[#5865F2] opacity-0 group-hover:opacity-100 transition-opacity lg:w-3 lg:h-3" />
                </a>
                <a href="https://t.me/CloudCristalix" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-2 lg:py-2.5 bg-[#0088cc]/10 border border-[#0088cc]/30 rounded-xl hover:bg-[#0088cc]/20 hover:border-[#0088cc]/50 transition-all">
                  <Icon name="Send" size={16} className="text-[#0088cc] lg:w-4 lg:h-4" />
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
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider flex items-center gap-2">
                <Icon name="Headphones" size={16} className="text-[#4299e1]" />
                Помощь
              </h4>
              <ul className="space-y-3">
                <li><a href="#faq" className="text-sm text-gray-400 hover:text-[#4299e1] transition-colors flex items-center gap-2 group"><Icon name="HelpCircle" size={14} className="opacity-50 group-hover:opacity-100" /> FAQ</a></li>
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
                    <span className="text-xs text-gray-400">Cristalix bypass</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-xs font-bold text-green-400">ONLINE</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0f1729]/50 border border-green-500/30 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-400">Cloud Api</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-xs font-bold text-green-400">ONLINE</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0f1729]/50 border border-[#4299e1]/30 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-400">Обновления</span>
                    <div className="flex items-center gap-1.5">
                      <Icon name="CheckCircle" size={12} className="text-[#4299e1]" />
                      <span className="text-xs font-bold text-[#4299e1]">АКТИВНО</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs lg:text-sm text-gray-500">
                © 2025 Cloud. Все права защищены
              </p>
              <div className="flex items-center gap-4 lg:gap-6">
                <a href="#" className="text-xs lg:text-sm text-gray-500 hover:text-[#4299e1] transition-colors">Политика конфиденциальности</a>
                <a href="#" className="text-xs lg:text-sm text-gray-500 hover:text-[#4299e1] transition-colors">Условия использования</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BottomSections;