import { Shield, Lock, Eye, FileCheck } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const securityFeatures = [
  {
    icon: <Shield size={24} strokeWidth={1.5} />,
    title: 'Данные зашифрованы',
    description: 'Все контакты и заметки защищены сквозным шифрованием',
  },
  {
    icon: <Lock size={24} strokeWidth={1.5} />,
    title: 'Доступ только у вас',
    description: 'Никто — даже мы — не читаем вашу базу',
  },
  {
    icon: <Eye size={24} strokeWidth={1.5} />,
    title: 'Вы управляете приватностью',
    description: 'Делитесь информацией выборочно',
  },
  {
    icon: <FileCheck size={24} strokeWidth={1.5} />,
    title: 'Соответствие GDPR',
    description: 'Соблюдаем международные стандарты защиты данных',
  },
];

export const SecuritySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="security" className="section-dark section-padding">
      <div className="container-narrow" ref={ref}>
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Ваши контакты как в <span className="text-brand">швейцарском банке</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Naura создавалась с приоритетом на безопасность — вы контролируете,
            кто и что видит
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center ${isVisible ? `animate-fade-in-up animate-stagger-${index + 1}` : 'opacity-0'}`}
            >
              <div className="icon-container-dark mx-auto mb-4">{feature.icon}</div>
              <h3 className="text-white font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`card-dark-surface rounded-xl p-6 border-l-4 border-brand-purple ${isVisible ? 'animate-fade-in-up animate-stagger-5' : 'opacity-0'}`}
        >
          <p className="text-white font-medium">
            «Мы не продаём и не передаём ваши данные третьим лицам»
          </p>
        </div>
      </div>
    </section>
  );
};
