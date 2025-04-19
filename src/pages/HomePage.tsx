import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Camera, Video, Film, Search, MessageCircle } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      title: 'Модельные визитки',
      description: 'Профессиональные фотосъёмки для вашего портфолио и модельных агентств.',
      imageSrc: 'https://source.unsplash.com/random/600x400?model,portfolio',
      icon: <Camera size={24} />,
      linkTo: '/services/cards'
    },
    {
      title: 'Видеоролики',
      description: 'Создание качественных видеороликов для коммерческих и личных проектов.',
      imageSrc: 'https://source.unsplash.com/random/600x400?model,video',
      icon: <Video size={24} />,
      linkTo: '/services/videos'
    },
    {
      title: 'Короткометражные фильмы',
      description: 'Полный цикл производства короткометражного кино с профессиональной командой.',
      imageSrc: 'https://source.unsplash.com/random/600x400?film,actress',
      icon: <Film size={24} />,
      linkTo: '/services/shortfilms'
    }
  ];

  return (
    <>
      <Hero />

      <section className="container-page">
        <div className="text-center mb-12">
          <h2 className="heading-2">Наши услуги</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг по созданию модельного портфолио и обучению с нуля
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              linkTo={service.linkTo}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/services/cards">Все услуги</Link>
          </Button>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2">Обучение с нуля</h2>
            <p className="mb-4">
              Наша команда профессионалов поможет вам освоить основы модельной индустрии, даже если у вас нет опыта.
              Мы разработали специальные программы обучения, которые включают:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Подбор индивидуального образа и стиля</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Основы позирования и работы на камеру</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Актёрское мастерство для видеосъёмок</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Создание эффектного портфолио</span>
              </li>
            </ul>
            <Button asChild className="gap-2">
              <Link to="/contact">
                <MessageCircle size={18} />
                Записаться на консультацию
              </Link>
            </Button>
          </div>
          <div className="bg-muted p-8 rounded-lg">
            <img 
              src="https://source.unsplash.com/random/800x600?model,training" 
              alt="Обучение моделей" 
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="container-page">
        <div className="bg-secondary p-8 rounded-lg text-center">
          <h2 className="heading-2">Найдите кастинги прямо сейчас</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Используйте наш поисковой сервис для поиска актуальных кастингов в сети.
            Получите доступ к возможностям в модельной и киноиндустрии.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/casting">
              <Search size={18} />
              Перейти к поиску кастингов
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;