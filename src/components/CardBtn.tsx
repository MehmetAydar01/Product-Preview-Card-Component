import { Button } from '@/components/ui/button';
import iconCart from '@/assets/images/icon-cart.svg';

type CardBtnProps = {
  text: string;
};

function CardBtn({ text }: CardBtnProps) {
  return (
    <Button
      size='lg'
      className='w-full bg-darkCyan text-white capitalize hover:bg-green-950 font-semibold py-6'
    >
      <img src={iconCart} alt='icon cart' /> {text}
    </Button>
  );
}

export default CardBtn;
