import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const objections = [
  {
    question: 'У меня всего 100 контактов, мне не нужно',
    answer:
      'Даже в 100 контактах есть забытые связи. Naura покажет, кого вы упускаете, и поможет превратить эти контакты в активные отношения.',
  },
  {
    question: 'Мне хватает LinkedIn и телефона',
    answer:
      'Попробуйте найти контакт стоматолога из 2019 года среди сотен мёртвых контактов. В Naura это 10 секунд и 1 запрос. Мы объединяем все источники в одну умную базу.',
  },
  {
    question: 'Сложно настраивать?',
    answer:
      'Импорт контактов = 2 клика. Геймификация сделает остальное. Мы превратили рутину в увлекательную игру со свайпами и уровнями.',
  },
  {
    question: 'А если я передумаю?',
    answer:
      'Экспорт базы в CSV в 1 клик. Ваши данные всегда ваши. Никаких ограничений и скрытых условий.',
  },
];

export const ObjectionsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-light section-padding">
      <div className="container-narrow" ref={ref}>
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            Но <span className="text-brand">подождите...</span>
          </h2>
        </div>

        <div className={`max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {objections.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-background data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left py-5 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-brand-purple flex-shrink-0" />
                    <span className="font-semibold text-foreground">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-8 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
