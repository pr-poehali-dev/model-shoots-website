import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary mt-10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Модельные съёмки</h3>
            <p className="text-sm text-foreground/80">
              Профессиональные съёмки для моделей. Помогаем раскрыть ваш потенциал
              и создать уникальное портфолио.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Наши услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/cards" className="hover:text-primary transition">
                  Модельные визитки
                </Link>
              </li>
              <li>
                <Link to="/services/videos" className="hover:text-primary transition">
                  Видеоролики
                </Link>
              </li>
              <li>
                <Link to="/services/shortfilms" className="hover:text-primary transition">
                  Короткометражные фильмы
                </Link>
              </li>
              <li>
                <Link to="/services/tests" className="hover:text-primary transition">
                  Модельные тесты
                </Link>
              </li>
              <li>
                <Link to="/services/castingvideos" className="hover:text-primary transition">
                  Видеопробы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <a 
              href="https://t.me/vocoders" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition"
            >
              <MessageCircle size={18} />
              <span>t.me/vocoders</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-4 text-sm text-center text-foreground/70">
          <p>© {currentYear} Модельные съёмки. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;