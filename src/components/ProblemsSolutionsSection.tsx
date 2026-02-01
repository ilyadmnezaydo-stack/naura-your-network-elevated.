import { X, Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const items = [
  {
    problem: 'Неловко писать, если давно не общались',
    solution: 'Напомним, когда стоит выйти на связь и подскажем, что написать',
  },
  {
    problem: 'Люди теряются из виду после знакомства',
    solution: 'Автоматическая фиксация и теги помогут не забыть, где и о чём вы общались',
  },
  {
    problem: 'Не помнишь, кто чем занимается',
    solution: 'Умные карточки контактов — с профессией, тегами и заметками',
  },
  {
    problem: 'Трудно найти нужного человека в нужный момент',
    solution: 'Поиск по сфере, тегу, приоритету, месту знакомства',
  },
  {
    problem: 'Слишком много знакомств, чтобы держать в голове',
    solution: 'Напомним о важных датах, задачах и предложим нужный контакт',
  },
  {
    problem: 'Лень разбирать сотни контактов вручную',
    solution: 'Массовый импорт и авто-тегирование',
  },
  {
    problem: 'Встречи проходят — договорённости теряются',
    solution: 'Встроенный постмитинг, заметки и синхронизация с календарём',
  },
  {
    problem: 'Боитесь выглядеть корыстным, когда просите',
    solution: 'Поддерживайте регулярный контакт — это естественно',
  },
];

export const ProblemsSolutionsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-light section-padding">
      <div className="container-narrow" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            Network, который <span className="text-brand">работает</span>
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-4 md:gap-8 p-5 rounded-xl transition-colors ${
                index % 2 === 0 ? 'bg-background' : 'bg-section-light-alt'
              } ${isVisible ? `animate-fade-in-up` : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X size={14} className="text-destructive" />
                </div>
                <p className="text-foreground">{item.problem}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-success" />
                </div>
                <p className="text-foreground">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
