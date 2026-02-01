import { Send } from 'lucide-react';

const footerLinks = [
  { label: 'Визитки', href: '#features' },
  { label: 'Для кого', href: '#segments' },
  { label: 'О нас', href: '#security' },
  { label: 'Контакты', href: '#footer' },
];

export const Footer = () => {
  return (
    <footer id="footer" className="section-dark py-16">
      <div className="container-narrow">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-[0.15em] text-white mb-4 inline-block">
              naura
            </a>
            <p className="text-muted-foreground max-w-sm">
              Персональная CRM для управления профессиональными контактами
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-brand-purple transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:naura.io@naura.io"
                className="text-muted-foreground hover:text-brand-purple transition-colors"
              >
                naura.io@naura.io
              </a>
              <a
                href="https://t.me/+JhOWoP3FRRQ1MDVi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-brand-purple transition-colors"
              >
                <Send size={16} />
                Наш блог в Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Naura. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};
