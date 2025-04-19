import CastingSearch from '@/components/CastingSearch';
import { Separator } from '@/components/ui/separator';

const CastingPage = () => {
  return (
    <div className="container-page">
      <div className="text-center mb-10">
        <h1 className="heading-1">Поиск кастингов</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Используйте наш сервис для поиска актуальных кастингов в модельной и киноиндустрии.
          Начните карьеру модели или актрисы с нами!
        </p>
      </div>

      <div className="bg-card rounded-lg border p-6 shadow-sm mb-10">
        <h2 className="text-2xl font-semibold mb-4">Как это работает?</h2>
        <ol className="space-y-3 mb-6">
          <li className="flex items-start gap-2">
            <span className="flex items-center justify-center bg-primary text-primary-foreground rounded-full w-6 h-6 text-sm shrink-0 mt-0.5">1</span>
            <div>
              <p><strong>Введите запрос</strong> в поисковую строку (например, "фотомодель", "актриса")</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex items-center justify-center bg-primary text-primary-foreground rounded-full w-6 h-6 text-sm shrink-0 mt-0.5">2</span>
            <div>
              <p><strong>Выберите фильтры</strong> для уточнения результатов поиска</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex items-center justify-center bg-primary text-primary-foreground rounded-full w-6 h-6 text-sm shrink-0 mt-0.5">3</span>
            <div>
              <p><strong>Получите результаты</strong> из различных источников в одном месте</p>
            </div>
          </li>
        </ol>
      </div>

      <Separator className="my-8" />

      <CastingSearch />

      <div className="mt-16 bg-secondary p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Советы по участию в кастингах</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card p-4 rounded-md">
            <h3 className="font-medium mb-2">Подготовьте портфолио</h3>
            <p className="text-sm text-muted-foreground">
              Убедитесь, что у вас есть качественные фотографии в разных образах и стилях.
            </p>
          </div>
          <div className="bg-card p-4 rounded-md">
            <h3 className="font-medium mb-2">Будьте пунктуальны</h3>
            <p className="text-sm text-muted-foreground">
              Приходите на кастинги заблаговременно, чтобы подготовиться и избежать стресса.
            </p>
          </div>
          <div className="bg-card p-4 rounded-md">
            <h3 className="font-medium mb-2">Уверенность и естественность</h3>
            <p className="text-sm text-muted-foreground">
              Будьте собой и демонстрируйте уверенность, не переигрывайте.
            </p>
          </div>
          <div className="bg-card p-4 rounded-md">
            <h3 className="font-medium mb-2">Следуйте инструкциям</h3>
            <p className="text-sm text-muted-foreground">
              Внимательно слушайте указания и следуйте требованиям кастинг-директора.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastingPage;