import { useState, useEffect } from 'react';
import { Search, X, ExternalLink, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

interface CastingResult {
  id: string;
  title: string;
  platform: string;
  description: string;
  date: string;
  link: string;
  image: string;
}

// База кастингов с локальными изображениями
const ALL_CASTINGS: CastingResult[] = [
  {
    id: '1',
    title: 'Кастинг для рекламы косметики L\'Oreal',
    platform: 'CastingPro',
    description: 'Требуются девушки 18-25 лет для съемок в рекламе новой линейки косметики. Опыт необязателен. Оплата: от 35 000 руб.',
    date: '2023-10-15',
    link: 'https://example.com/casting1',
    image: '/placeholder.svg'
  },
  {
    id: '2',
    title: 'Модели для показа Mercedes-Benz Fashion Week',
    platform: 'ModelScout',
    description: 'Приглашаем моделей для участия в сезонном показе одежды. Рост от 175 см. Опыт работы обязателен. Оплата: от 50 000 руб.',
    date: '2023-10-20',
    link: 'https://example.com/casting2',
    image: '/placeholder.svg'
  },
  {
    id: '3',
    title: 'Актрисы для короткометражного фильма "Взгляд"',
    platform: 'FilmCasting',
    description: 'Для съемок короткометражного фильма требуются актрисы 20-30 лет. Проект для кинофестиваля. Оплата: от 25 000 руб.',
    date: '2023-10-25',
    link: 'https://example.com/casting3',
    image: '/placeholder.svg'
  },
  {
    id: '4',
    title: 'Фотомодели для журнала Vogue',
    platform: 'ModelsToday',
    description: 'Требуются модели для фотосессии в стиле высокой моды. Возраст: 18-30 лет. Портфолио обязательно. Оплата: от 45 000 руб.',
    date: '2023-11-05',
    link: 'https://example.com/casting4',
    image: '/placeholder.svg'
  },
  {
    id: '5',
    title: 'Видеосъемка для бренда спортивной одежды Nike',
    platform: 'SportModels',
    description: 'Ищем девушек с атлетическим телосложением для съемок рекламы спортивной одежды. Оплата: от 40 000 руб.',
    date: '2023-11-10',
    link: 'https://example.com/casting5',
    image: '/placeholder.svg'
  },
  {
    id: '6',
    title: 'Фотосессия для каталога Zara',
    platform: 'FashionFind',
    description: 'Ищем девушек для съемок в каталоге осенней коллекции Zara. Требуемый рост: от 172 см. Оплата: от 38 000 руб.',
    date: '2023-11-15',
    link: 'https://example.com/casting6',
    image: '/placeholder.svg'
  },
  {
    id: '7',
    title: 'Модели для YouTube канала о моде',
    platform: 'DigitalModels',
    description: 'Требуются модели для съемок в обучающих видео о моде и стиле. Опыт не обязателен. Оплата: от 3000 руб./час',
    date: '2023-11-18',
    link: 'https://example.com/casting7',
    image: '/placeholder.svg'
  },
  {
    id: '8',
    title: 'Актрисы для сериала на Netflix',
    platform: 'StarCasting',
    description: 'Идет набор актрис для съемок в новом российском сериале на Netflix. Возраст: 20-35 лет. Оплата: от 80 000 руб.',
    date: '2023-11-20',
    link: 'https://example.com/casting8',
    image: '/placeholder.svg'
  },
  {
    id: '9',
    title: 'Модели для обложки журнала Glamour',
    platform: 'GlamourCasting',
    description: 'Ищем яркую модель для съемок на обложке журнала Glamour. Нужен опыт работы с глянцем. Оплата: от 60 000 руб.',
    date: '2023-11-22',
    link: 'https://example.com/casting9',
    image: '/placeholder.svg'
  },
  {
    id: '10',
    title: 'TikTok модели для рекламы косметики',
    platform: 'DigitalAdModels',
    description: 'Требуются девушки со своей аудиторией в TikTok для съемок в рекламе косметики. Оплата: от 50 000 руб. + бартер',
    date: '2023-11-25',
    link: 'https://example.com/casting10',
    image: '/placeholder.svg'
  }
];

// Расширенная функция поиска кастингов
const searchCastings = (query: string, filters: Record<string, boolean>): CastingResult[] => {
  if (!query && Object.values(filters).every(value => value)) {
    // Если нет запроса и все фильтры включены, вернем все кастинги
    return ALL_CASTINGS;
  }
  
  return ALL_CASTINGS.filter(casting => {
    // Проверка совпадения поискового запроса
    const matchesQuery = !query || 
      casting.title.toLowerCase().includes(query.toLowerCase()) ||
      casting.description.toLowerCase().includes(query.toLowerCase()) ||
      casting.platform.toLowerCase().includes(query.toLowerCase());
    
    // Проверка фильтров
    const matchesPhotoFilter = filters.photo && 
      (casting.title.toLowerCase().includes('фото') || 
       casting.description.toLowerCase().includes('фото'));
    
    const matchesVideoFilter = filters.video && 
      (casting.title.toLowerCase().includes('видео') || 
       casting.description.toLowerCase().includes('видео'));
    
    const matchesActingFilter = filters.acting && 
      (casting.title.toLowerCase().includes('актр') || 
       casting.description.toLowerCase().includes('актр'));
    
    const matchesFashionFilter = filters.fashion && 
      (casting.title.toLowerCase().includes('мод') || 
       casting.title.toLowerCase().includes('fashion') ||
       casting.description.toLowerCase().includes('мод'));
    
    // Возвращаем true, если кастинг подходит по запросу И по хотя бы одному из включенных фильтров
    return matchesQuery && (matchesPhotoFilter || matchesVideoFilter || matchesActingFilter || matchesFashionFilter);
  });
};

const CastingSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    photo: true,
    video: true,
    acting: true,
    fashion: true
  });
  const [results, setResults] = useState<CastingResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  
  // Автоматический поиск при первом рендере для демонстрации
  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    setIsSearching(true);
    setHasSearched(true);
    
    // Имитация задержки поиска для реалистичности
    setTimeout(() => {
      const searchResults = searchCastings(searchQuery, filters);
      setResults(searchResults);
      setIsSearching(false);
    }, 1200);
  };

  // Поиск при изменении фильтров
  useEffect(() => {
    if (hasSearched) {
      handleSearch();
    }
  }, [filters]);

  const clearSearch = () => {
    setSearchQuery('');
    if (hasSearched) {
      handleSearch();
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              placeholder="Поиск кастингов в интернете..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
            {searchQuery && (
              <button 
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <Button type="submit" disabled={isSearching} className="gap-2">
            {isSearching ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Поиск...
              </>
            ) : (
              <>
                <Search size={18} />
                Найти
              </>
            )}
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="photo" 
              checked={filters.photo}
              onCheckedChange={(checked) => 
                setFilters({...filters, photo: checked as boolean})
              }
            />
            <Label htmlFor="photo">Фотосъёмки</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="video" 
              checked={filters.video}
              onCheckedChange={(checked) => 
                setFilters({...filters, video: checked as boolean})
              }
            />
            <Label htmlFor="video">Видеосъёмки</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="acting" 
              checked={filters.acting}
              onCheckedChange={(checked) => 
                setFilters({...filters, acting: checked as boolean})
              }
            />
            <Label htmlFor="acting">Актёрское мастерство</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="fashion" 
              checked={filters.fashion}
              onCheckedChange={(checked) => 
                setFilters({...filters, fashion: checked as boolean})
              }
            />
            <Label htmlFor="fashion">Модельный бизнес</Label>
          </div>
        </div>
      </form>

      {isSearching ? (
        <div className="text-center py-10">
          <Loader2 size={40} className="animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Поиск кастингов по всему интернету...</p>
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Search size={20} className="text-primary" />
            Результаты поиска ({results.length})
          </h2>
          
          {results.map((result) => (
            <Card key={result.id} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img 
                    src={result.image} 
                    alt={result.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium">{result.title}</h3>
                    <span className="text-sm text-muted-foreground shrink-0 ml-2">
                      {formatDate(result.date)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{result.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-secondary px-2 py-1 rounded">{result.platform}</span>
                    <Button asChild variant="outline" size="sm" className="gap-1">
                      <a href={result.link} target="_blank" rel="noopener noreferrer">
                        Подробнее
                        <ExternalLink size={14} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : hasSearched ? (
        <div className="text-center py-10">
          <p className="text-muted-foreground">Кастинги не найдены. Попробуйте изменить запрос или настройки фильтров.</p>
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">Введите запрос для поиска кастингов в интернете</p>
          <p className="text-sm text-muted-foreground mt-2">Мы соберем актуальные кастинги с различных платформ</p>
        </div>
      )}
    </div>
  );
};

export default CastingSearch;