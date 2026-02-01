import { useState } from 'react';
import { Briefcase, Zap, Rocket, RotateCcw } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FlipCardProps {
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
  solutionDetail: string;
}

const FlipCard = ({ icon, title, problem, solution, solutionDetail }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''} group`}>
      <div className="flip-card-inner">
        {/* Front - Problem */}
        <div className="flip-card-front hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
          <div className="icon-container-dark mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
          <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
          <p className="text-muted-foreground text-sm flex-1">{problem}</p>
          <button
            onClick={() => setIsFlipped(true)}
            className="flex items-center gap-2 text-brand-purple-light text-sm mt-4 hover:gap-3 transition-all duration-300 group/btn"
          >
            <RotateCcw size={16} className="group-hover/btn:rotate-180 transition-transform duration-500" />
            Перевернуть
          </button>
        </div>

        {/* Back - Solution */}
        <div className="flip-card-back">
          <div className="icon-container-dark mb-4">{icon}</div>
          <h3 className="text-lg font-bold text-white mb-3">{solution}</h3>
          <p className="text-white/80 text-sm flex-1">{solutionDetail}</p>
          <button
            onClick={() => setIsFlipped(false)}
            className="flex items-center gap-2 text-white text-sm mt-4 hover:gap-3 transition-all duration-300 group/btn"
          >
            <RotateCcw size={16} className="group-hover/btn:-rotate-180 transition-transform duration-500" />
            Назад
          </button>
        </div>
      </div>
    </div>
  );
};

const segments = [
  {
    icon: <Briefcase size={24} strokeWidth={1.5} />,
    title: 'Зарабатываю на связях',
    problem:
      'Упускаете сделки и возможности, потому что забыли вовремя написать клиенту',
    solution: 'Развивайте отношения и зарабатывайте больше',
    solutionDetail:
      'Умные напоминания подскажут, когда связаться и о чём напомнить',
  },
  {
    icon: <Zap size={24} strokeWidth={1.5} />,
    title: 'Решаю задачи через знакомства',
    problem:
      'Пытаетесь вспомнить нужного человека, когда нужно срочно найти специалиста или помощь',
    solution: 'Решайте вопросы быстрее и экономьте ресурсы',
    solutionDetail:
      'Все контакты в одном месте, систематизированы и доступны через поиск',
  },
  {
    icon: <Rocket size={24} strokeWidth={1.5} />,
    title: 'Расширяю окружение',
    problem:
      'После знакомства контакты тонут в телефоне, связь пропадает',
    solution: 'Создайте круг единомышленников и экспертов вокруг себя',
    solutionDetail:
      'Персональная QR-визитка + авто-теги помогут создать связь, которая не потеряется',
  },
];

export const SegmentsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="segments" className="section-dark section-padding">
      <div className="container-narrow" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Нетворк есть у всех. А <span className="text-brand">польза</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {segments.map((segment, index) => (
            <div
              key={segment.title}
              className={`${isVisible ? `animate-fade-in-up animate-stagger-${index + 1}` : 'opacity-0'}`}
            >
              <FlipCard {...segment} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
