import { QrCode, Upload, Sparkles, BellRing } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Зарегистрируйтесь, создав свою QR-визитку',
    icon: <QrCode size={24} strokeWidth={1.5} />,
  },
  {
    number: '02',
    title: 'Загрузите контакты',
    icon: <Upload size={24} strokeWidth={1.5} />,
  },
  {
    number: '03',
    title: 'Наведите порядок, сортируя контакты в удовольствие',
    icon: <Sparkles size={24} strokeWidth={1.5} />,
    hasAccent: true,
  },
  {
    number: '04',
    title: 'Развивайте отношения благодаря умным напоминаниям',
    icon: <BellRing size={24} strokeWidth={1.5} />,
  },
];

export const HowToStartSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-to-start" className="section-dark section-padding">
      <div className="container-narrow" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Начните за <span className="text-brand">2 минуты</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative ${isVisible ? `animate-fade-in-up animate-stagger-${index + 1}` : 'opacity-0'}`}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-muted to-brand-purple -translate-x-4 z-0"></div>
              )}

              <div className="relative z-10 text-center md:text-left">
                <span className="text-4xl md:text-5xl font-extrabold text-brand-purple mb-4 block">
                  {step.number}
                </span>
                <div className="icon-container-dark mx-auto md:mx-0 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-white font-semibold text-sm md:text-base">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Gamification Accent Block */}
        <div
          className={`rounded-3xl p-8 md:p-10 lg:p-12 ${isVisible ? 'animate-fade-in-up animate-stagger-5' : 'opacity-0'}`}
          style={{ background: 'var(--gradient-card-accent)' }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                «Сортируйте контакты играя»
              </h3>
              <p className="text-white/80 mb-6">
                Забудьте про скучные таблицы. Контакты появляются как карточки —
                свайпайте влево/вправо, получайте баллы, открывайте уровни.
              </p>
              <p className="text-lg font-bold text-white">
                15 минут в день × 7 дней = 3000 разобранных контактов
              </p>
            </div>

            {/* Swipe Cards Visualization */}
            <div className="relative h-64 flex items-center justify-center">
              <div className="relative w-56 h-40">
                <div className="swipe-card" style={{ transform: 'rotate(-8deg) translateY(10px)' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-muted"></div>
                    <div>
                      <div className="h-3 w-20 bg-white/60 rounded"></div>
                      <div className="h-2 w-16 bg-white/30 rounded mt-1"></div>
                    </div>
                  </div>
                  <span className="badge-purple text-[10px] mt-3 inline-block">PARTNER</span>
                </div>
                <div className="swipe-card" style={{ transform: 'rotate(4deg) translateY(-5px) translateX(20px)' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-purple/40"></div>
                    <div>
                      <div className="h-3 w-24 bg-white/60 rounded"></div>
                      <div className="h-2 w-14 bg-white/30 rounded mt-1"></div>
                    </div>
                  </div>
                  <span className="badge-purple text-[10px] mt-3 inline-block">VIP</span>
                </div>
                <div className="swipe-card" style={{ transform: 'rotate(-2deg) translateY(-20px) translateX(-10px)' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-purple-light/50"></div>
                    <div>
                      <div className="h-3 w-16 bg-white/60 rounded"></div>
                      <div className="h-2 w-20 bg-white/30 rounded mt-1"></div>
                    </div>
                  </div>
                  <span className="badge-purple text-[10px] mt-3 inline-block">TECH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
