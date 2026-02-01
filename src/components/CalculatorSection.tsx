import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface CalculatorSectionProps {
  onOpenModal: () => void;
}

const contactTypes = [
  { value: 'client', label: 'Клиент' },
  { value: 'partner', label: 'Партнёр' },
  { value: 'expert', label: 'Эксперт' },
  { value: 'mentor', label: 'Ментор' },
];

export const CalculatorSection = ({ onOpenModal }: CalculatorSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const [contactType, setContactType] = useState('client');
  const [avgDeal, setAvgDeal] = useState([50000]);
  const [forgottenContacts, setForgottenContacts] = useState([10]);
  const [displayedLoss, setDisplayedLoss] = useState(0);

  const totalLoss = avgDeal[0] * forgottenContacts[0];

  // Count-up animation effect
  useEffect(() => {
    const diff = totalLoss - displayedLoss;
    if (diff === 0) return;

    const step = Math.ceil(Math.abs(diff) / 20);
    const timer = setTimeout(() => {
      if (diff > 0) {
        setDisplayedLoss((prev) => Math.min(prev + step, totalLoss));
      } else {
        setDisplayedLoss((prev) => Math.max(prev - step, totalLoss));
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [totalLoss, displayedLoss]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

  return (
    <section className="section-gradient section-padding">
      <div className="container-narrow" ref={ref}>
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Сколько стоит один <span className="text-brand">забытый</span> контакт?
          </h2>
        </div>

        <div
          className={`max-w-2xl mx-auto card-dark-surface rounded-3xl p-8 md:p-10 ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}
        >
          {/* Contact Type Selector */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">Тип контакта</label>
            <Select value={contactType} onValueChange={setContactType}>
              <SelectTrigger className="w-full bg-section-dark border-border text-white rounded-xl h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-section-dark-surface border-border z-50">
                {contactTypes.map((type) => (
                  <SelectItem
                    key={type.value}
                    value={type.value}
                    className="text-white hover:bg-brand-purple/20 focus:bg-brand-purple/20"
                  >
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Average Deal Slider */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <label className="text-white font-medium">Средний чек сделки</label>
              <span className="text-brand-purple-light font-bold">
                {formatNumber(avgDeal[0])} ₽
              </span>
            </div>
            <Slider
              value={avgDeal}
              onValueChange={setAvgDeal}
              min={10000}
              max={1000000}
              step={10000}
              className="py-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>10,000 ₽</span>
              <span>1,000,000 ₽</span>
            </div>
          </div>

          {/* Forgotten Contacts Slider */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <label className="text-white font-medium">Забытых контактов</label>
              <span className="text-brand-purple-light font-bold">{forgottenContacts[0]}</span>
            </div>
            <Slider
              value={forgottenContacts}
              onValueChange={setForgottenContacts}
              min={1}
              max={100}
              step={1}
              className="py-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>1</span>
              <span>100</span>
            </div>
          </div>

          {/* Result */}
          <div className="text-center border-t border-border pt-8 mb-8">
            <p className="text-muted-foreground mb-2">Вы теряете:</p>
            <p className="text-4xl md:text-5xl font-extrabold text-destructive animate-count">
              ₽{formatNumber(displayedLoss)}
            </p>
            <p className="text-muted-foreground mt-2">в год</p>
          </div>

          <p className="text-center text-white/80 mb-8">
            Naura находит "мёртвые" контакты и превращает их в встречи, сделки и
            рекомендации
          </p>

          <Button onClick={onOpenModal} className="btn-primary w-full text-lg py-4">
            Начать возвращать упущенное →
          </Button>
        </div>
      </div>
    </section>
  );
};
