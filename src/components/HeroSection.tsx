import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface HeroSectionProps {
  onOpenModal: () => void;
}

export const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-light pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container-narrow" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Управляйте вашими{' '}
              <span className="text-brand">связями</span> с Naura
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Персональная CRM, которая наводит порядок в контактах и помогает
              эффективно использовать нетворк для решения личных и
              профессиональных задач
            </p>
            <Button
              onClick={onOpenModal}
              className="btn-primary text-base md:text-lg px-8 py-4"
            >
              Начать пользоваться
            </Button>
            <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
              <Users size={18} className="text-brand-purple" />
              <span>Разобрали 50,000+ контактов за первый месяц беты</span>
            </div>
          </div>

          {/* Phone Mockup */}
          <div
            className={`relative ${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}
          >
            <div className="relative mx-auto w-72 md:w-80 lg:w-96">
              {/* Phone Frame */}
              <div className="bg-section-dark rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-section-dark rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-section-dark-surface px-6 py-3 flex justify-between items-center">
                    <span className="text-white text-xs">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white/40 rounded-sm"></div>
                      <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="bg-section-dark p-4 min-h-[480px]">
                    {/* Search */}
                    <div className="bg-section-dark-surface rounded-xl p-3 mb-4">
                      <span className="text-muted-foreground text-sm">
                        Поиск контактов...
                      </span>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-section-dark-surface rounded-2xl p-4 mb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple to-brand-purple-light flex items-center justify-center text-white font-bold">
                          АС
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">Анна Смирнова</h4>
                          <p className="text-muted-foreground text-sm">
                            Product Lead @ Яндекс
                          </p>
                          <div className="flex gap-2 mt-2">
                            <span className="badge-purple text-[10px]">VIP</span>
                            <span className="badge-purple text-[10px]">TECH</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          Последний контакт: 3 дня назад
                        </p>
                      </div>
                    </div>

                    {/* Another Contact */}
                    <div className="bg-section-dark-surface rounded-2xl p-4 opacity-70">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground font-bold">
                          МП
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">Михаил Петров</h4>
                          <p className="text-muted-foreground text-sm">
                            Инвестор
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-purple/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-purple-light/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
