import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkTo: string;
}

const ServiceCard = ({ title, description, imageSrc, linkTo }: ServiceCardProps) => {
  return (
    <div className="group rounded-lg overflow-hidden border border-border hover:shadow-md transition">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button asChild variant="default" className="w-full">
          <Link to={linkTo} className="flex items-center justify-center gap-1">
            Подробнее <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;