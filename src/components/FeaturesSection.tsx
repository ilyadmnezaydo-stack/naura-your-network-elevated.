import { Upload, Tags, Bell, MessageSquare, Calendar, QrCode } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: <Upload size={24} strokeWidth={1.5} />,
    title: 'Массовый импорт контактов',
    description: 'Интеграция с телефоном, почтой, соцсетями. Все контакты за пару кликов',
  },
  {
    icon: <Tags size={24} strokeWidth={1.5} />,
    title: 'Умная сегментация',
    description: 'Автоматическое распределение по категориям, интересам, степени знакомства',
  },
  {
    icon: <Bell size={24} strokeWidth={1.5} />,
    title: 'Напоминания и задачи',
    description: 'Дни рождения, забытые связи. Naura подскажет повод и тему',
  },
  {
    icon: <MessageSquare size={24} strokeWidth={1.5} />,
    title: 'История коммуникаций',
    description: 'Заметки, голосовые записи с транскрибацией прямо в карточке контакта',
  },
  {
    icon: <Calendar size={24} strokeWidth={1.5} />,
    title: 'Интеграция с календарём',
    description: 'Планируйте встречи из Naura, синхронизация с вашим календарём',
  },
  {
    icon: <QrCode size={24} strokeWidth={1.5} />,
    title: 'Электронная визитка',
    description: 'Персональный QR-код, который ведёт к вашему публичному профилю',
  },
];

export const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="section-light section-padding">
      <div className="container-narrow" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Сотни "мертвых" контактов, разбросанных в разных местах без системы?
            Многое <span className="text-brand font-semibold">держите в голове</span>?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`feature-card ${isVisible ? `animate-fade-in-up animate-stagger-${index + 1}` : 'opacity-0'}`}
            >
              <div className="icon-container mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
