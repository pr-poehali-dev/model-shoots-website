import { MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <div className="container-page">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="heading-1">Свяжитесь с нами</h1>
          <p className="text-muted-foreground">
            Есть вопросы или нужна консультация? Мы всегда на связи в Telegram!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <img
            src="/placeholder.svg"
            alt="Модельная фотография"
            className="w-full h-80 md:h-auto object-cover rounded-lg"
          />
          
          <Card className="p-8 shadow-md">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <MessageCircle size={32} className="text-primary" />
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Наш Telegram</h2>
              
              <p className="text-muted-foreground mb-8">
                Мы всегда на связи в Telegram. Напишите нам для получения консультации
                или чтобы договориться о съёмке.
              </p>
              
              <Button asChild size="lg" className="gap-2">
                <a 
                  href="https://t.me/vocoders" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg"
                >
                  <MessageCircle size={20} />
                  t.me/vocoders
                </a>
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold">Часто задаваемые вопросы</h2>
          
          <div className="space-y-4">
            <div className="bg-card p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">Как проходят модельные съёмки?</h3>
              <p className="text-muted-foreground">
                Модельные съёмки проходят в профессиональной студии или на локации, в зависимости от выбранного стиля. 
                Вы получите подробные инструкции по подготовке. В день съёмки мы поможем с макияжем, причёской и подбором образов.
              </p>
            </div>
            
            <div className="bg-card p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">Нужен ли опыт для участия в съёмках?</h3>
              <p className="text-muted-foreground">
                Опыт не требуется! Мы работаем с моделями любого уровня подготовки, 
                включая тех, кто только начинает свой путь. Наши специалисты обучат вас всему необходимому.
              </p>
            </div>
            
            <div className="bg-card p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">Сколько времени занимает одна съёмка?</h3>
              <p className="text-muted-foreground">
                Длительность съёмки зависит от выбранного пакета услуг. Модельные тесты обычно занимают 2-3 часа,
                съёмка видеороликов может занять от 4 до 8 часов, короткометражные фильмы снимаются несколько дней.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          <img 
            src="/placeholder.svg" 
            alt="Модная фотография"
            className="w-full aspect-square object-cover rounded-md"
          />
          <img 
            src="/placeholder.svg" 
            alt="Процесс съёмки"
            className="w-full aspect-square object-cover rounded-md"
          />
          <img 
            src="/placeholder.svg" 
            alt="Студийная съёмка"
            className="w-full aspect-square object-cover rounded-md md:col-span-1 col-span-2"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;