import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle, Search } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Модельные съёмки и<br />
            <span className="text-gradient">обучение с нуля</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Погрузитесь в мир профессиональных фото и видеосъёмок.
            Мы поможем найти ваш стиль и создать идеальный образ.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                <MessageCircle size={18} />
                Связаться
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link to="/casting">
                <Search size={18} />
                Найти кастинги
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;