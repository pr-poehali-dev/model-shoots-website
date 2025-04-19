import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MessageCircle, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Модельные визитки', path: '/services/cards' },
    { name: 'Видеоролики', path: '/services/videos' },
    { name: 'Короткометражные фильмы', path: '/services/shortfilms' },
    { name: 'Модельные тесты', path: '/services/tests' },
    { name: 'Видеопробы', path: '/services/castingvideos' },
    { name: 'Поиск кастингов', path: '/casting' },
    { name: 'Контакты', path: '/contact' },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">Модельные съёмки</span>
        </Link>

        {/* Мобильное меню */}
        <div className="lg:hidden flex items-center gap-4">
          <a 
            href="https://t.me/vocoders" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition"
          >
            <MessageCircle size={24} />
          </a>
          <button onClick={toggleMenu} className="text-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-background z-40 lg:hidden pt-20 px-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-md text-lg ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <a
                href="https://t.me/vocoders"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 px-3 bg-primary text-primary-foreground rounded-md mt-4"
              >
                <MessageCircle size={20} />
                Связаться в Telegram
              </a>
            </nav>
          </div>
        )}

        {/* Десктопная навигация */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `py-2 px-3 rounded-md text-sm ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-secondary'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <a
            href="https://t.me/vocoders"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 py-2 px-3 ml-2 bg-primary text-primary-foreground rounded-md text-sm"
          >
            <MessageCircle size={16} />
            Telegram
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;