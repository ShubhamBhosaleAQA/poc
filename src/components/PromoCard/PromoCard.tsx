import './PromoCard.css';
import { Button } from '../Button/Button';

type PromoCardProps = {
  title: string;
  description: string;
  ctaText: string;
  onCtaClick?: () => void;
  ctaVariant?: 'primary' | 'secondary';
  ctaFullWidth?: boolean;
  color?: string;
};

export const PromoCard = ({
  title,
  description,
  ctaText,
  onCtaClick,
  ctaVariant = 'primary',
  ctaFullWidth = false,
  color,
}: PromoCardProps) => {
  return (
    <section className="promo-card" style={{ backgroundColor: color }}>
      <h3 className="promo-card__title">{title}</h3>
      <p className="promo-card__description">{description}</p>
      <Button variant={ctaVariant} size="md" fullWidth={ctaFullWidth} onClick={onCtaClick}>
        {ctaText}
      </Button>
    </section>
  );
};
