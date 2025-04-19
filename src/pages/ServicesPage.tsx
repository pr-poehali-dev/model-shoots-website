import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, MessageCircle } from 'lucide-react';

const services = {
  cards: {
    title: 'Модельные визитки',
    description: 'Профессиональные фотосъёмки для создания модельных визиток и портфолио',
    image: '/placeholder.svg',
    features: [
      'Съёмка в студии с профессиональным оборудованием',
      'Подбор образа и стиля',
      'Работа с опытным фотографом',
      'Ретушь и обработка фотографий',
      'Консультация по позированию',
      'Подготовка к сотрудничеству с агентствами'
    ]
  },
  videos: {
    title: 'Видеоролики',
    description: 'Создание качественных рекламных и презентационных видеороликов',
    image: '/placeholder.svg',
    features: [
      'Разработка концепции видеоролика',
      'Профессиональная видеосъёмка',
      'Работа с режиссером',
      'Монтаж и цветокоррекция',
      'Звуковое сопровождение',
      'Финальный продукт в высоком качестве'
    ]
  },
  shortfilms: {
    title: 'Короткометражные фильмы',
    description: 'Полный цикл производства короткометражного кино',
    image: '/placeholder.svg',
    features: [
      'Написание сценария',
      'Подбор актёров и локаций',
      'Режиссерская работа',
      'Полноценные съёмки с кинооборудованием',
      'Профессиональный монтаж',
      'Музыкальное оформление и звуковые эффекты'
    ]
  },
  tests: {
    title: 'Модельные тесты',
    description: 'Профессиональные тестовые съёмки для оценки потенциала модели',
    image: '/placeholder.svg',
    features: [
      'Разноплановые образы и сценарии',
      'Оценка фотогеничности',
      'Рекомендации по развитию навыков',
      'Обратная связь от профессионалов',
      'Подборка лучших фотографий и видео',
      'Советы по улучшению портфолио'
    ]
  },
  castingvideos: {
    title: 'Видеопробы',
    description: 'Профессиональные видеопробы для кастингов в кино и рекламе',
    image: '/placeholder.svg',
    features: [
      'Запись самопрезентации',
      'Работа над дикцией и подачей',
      'Актёрские упражнения на камеру',
      'Монтаж и подготовка видеоматериала',
      'Советы по прохождению видеокастингов',
      'Подготовка к живым кастингам'
    ]
  }
};

type ServiceType = keyof typeof services;

const ServicesPage = () => {
  const { type } = useParams<{ type: string }>();
  const serviceType = type as ServiceType;

  // Проверка наличия сервиса
  if (!serviceType || !services[serviceType]) {
    return (
      <div className="container-page text-center">
        <h1 className="heading-1">Услуга не найдена</h1>
        <p className="mb-6">Запрашиваемая услуга не существует или была перемещена.</p>
        <Button asChild>
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    );
  }

  const service = services[serviceType];

  return (
    <div className="container-page">
      <div className="text-center mb-10">
        <h1 className="heading-1">{service.title}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {service.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
        <div className="bg-muted rounded-lg overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-auto"
          />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Что включено</h2>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-8">
            <Button asChild size="lg" className="gap-2">
              <a 
                href="https://t.me/vocoders"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                Связаться для записи
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="my-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Другие услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(services)
            .filter(([key]) => key !== serviceType)
            .slice(0, 3)
            .map(([key, service]) => (
              <Card key={key} className="overflow-hidden">
                <img 
                  src="/placeholder.svg"
                  alt={service.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link to={`/services/${key}`}>Подробнее</Link>
                  </Button>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;