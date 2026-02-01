import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onOpenModal: () => void;
}

const navItems = [
  { label: 'Визитки', href: '#features' },
  { label: 'Для кого', href: '#segments' },
  { label: 'Полезное', href: '#how-to-start' },
  { label: 'О нас', href: '#security' },
  { label: 'Контакты', href: '#footer' },
];

export const Header = ({ onOpenModal }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-[0.15em] text-foreground">
            naura
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              RU / EN
            </button>
            <Button
              onClick={onOpenModal}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Начни использовать
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border py-4 animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-brand-purple transition-colors px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenModal();
                  }}
                  className="btn-primary w-full"
                >
                  Начни использовать
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
