import { useState } from 'react';
import { Check, X, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const benefits = [
  'Бесплатный Premium на 6 месяцев',
  'Доступ в чат с основателями',
  'Участие в закрытой бете',
  'Доступ к бета-версии в Telegram',
];

const botFeatures = [
  'Сохраняет контакты из Telegram',
  'Добавляет теги автоматически',
  'Напоминает о взаимодействиях',
];

export const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const [email, setEmail] = useState('');
  const [telegram, setTelegram] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; telegram?: string; agreed?: string }>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!email || !validateEmail(email)) {
      newErrors.email = 'Введите корректный email';
    }
    if (!telegram) {
      newErrors.telegram = 'Введите ваш Telegram username';
    }
    if (!agreed) {
      newErrors.agreed = 'Необходимо согласиться с политикой';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Log the data (no real backend)
    console.log('Form submitted:', { email, telegram, agreed });
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setEmail('');
    setTelegram('');
    setAgreed(false);
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-section-dark border-border max-w-lg mx-4 p-0 rounded-3xl overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-10">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-success" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Спасибо!</h3>
              <p className="text-muted-foreground">
                Проверьте Telegram — мы отправим вам ссылку на бота и инвайт в
                закрытый чат
              </p>
            </div>
          ) : (
            <>
              <DialogHeader className="mb-6">
                <div className="badge-purple inline-flex items-center gap-2 mb-4 w-fit">
                  <Rocket size={14} />
                  МЫ УЖЕ БЛИЗКО!
                </div>
                <DialogTitle className="text-xl md:text-2xl font-bold text-white leading-tight">
                  Naura пока в разработке, но вы можете попасть в список первых
                  пользователей на особых условиях:
                </DialogTitle>
              </DialogHeader>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <Check size={18} className="text-success flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border my-6"></div>

              {/* Bot Features */}
              <div className="card-dark-surface rounded-xl p-4 mb-6">
                {botFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 py-1">
                    <Check size={16} className="text-success flex-shrink-0" />
                    <span className="text-white text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    className="bg-section-dark-surface border-border text-white placeholder:text-muted-foreground rounded-xl h-12"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder="@username"
                    value={telegram}
                    onChange={(e) => {
                      setTelegram(e.target.value);
                      setErrors((prev) => ({ ...prev, telegram: undefined }));
                    }}
                    className="bg-section-dark-surface border-border text-white placeholder:text-muted-foreground rounded-xl h-12"
                  />
                  {errors.telegram && (
                    <p className="text-destructive text-sm mt-1">{errors.telegram}</p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy"
                    checked={agreed}
                    onCheckedChange={(checked) => {
                      setAgreed(checked as boolean);
                      setErrors((prev) => ({ ...prev, agreed: undefined }));
                    }}
                    className="mt-1 border-border data-[state=checked]:bg-brand-purple data-[state=checked]:border-brand-purple"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    Согласен с{' '}
                    <a href="#" className="text-brand-purple hover:underline">
                      политикой конфиденциальности
                    </a>
                  </label>
                </div>
                {errors.agreed && (
                  <p className="text-destructive text-sm">{errors.agreed}</p>
                )}

                <Button type="submit" className="btn-primary w-full text-base py-4 mt-4">
                  Получить доступ к боту
                </Button>
              </form>

              <p className="text-center text-muted-foreground text-sm mt-6">
                После отправки мы пришлём: ссылку на бота + инвайт в закрытый чат
              </p>

              {/* FOMO Counter */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-white text-sm text-center mb-3">
                  Набор в первую волну закроется при 100 пользователях
                </p>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '87%' }}></div>
                </div>
                <p className="text-muted-foreground text-sm text-center mt-2">
                  Сейчас: 87 / 100 мест
                </p>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
