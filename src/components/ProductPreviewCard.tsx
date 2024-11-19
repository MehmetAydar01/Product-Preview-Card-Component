import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ProductDesktopImg from '@/assets/images/image-product-desktop.jpg';
import ProductMobileImg from '@/assets/images/image-product-mobile.jpg';
import CardBtn from './CardBtn';

function ProductPreviewCard() {
  return (
    <Card className='max-w-sm sm:max-w-xl w-full border-none shadow-none sm:flex font-montserrat mx-4'>
      <CardHeader className='p-0 space-y-0'>
        {/* Small'dan daha büyük ekranlarda gösterilecek resim */}
        <img
          src={ProductDesktopImg}
          alt='product image'
          className='hidden sm:inline-block rounded-tl-xl rounded-bl-xl object-cover h-full'
        />

        {/* Küçük ekranlarda gösterilecek resim */}
        <img
          src={ProductMobileImg}
          alt='product image'
          className='inline-block sm:hidden w-full rounded-t-xl object-cover'
        />
      </CardHeader>
      <CardContent className='w-full p-6 sm:p-8'>
        <CardDescription
          className='uppercase text-darkGrayishBlue font-medium text-xs'
          style={{ letterSpacing: '0.3em' }}
        >
          perfume
        </CardDescription>
        <CardTitle className='text-3xl sm:w-52 font-fraunces my-6 font-bold text-veryDarkBlue'>
          Gabrielle Essence Eau De Parfum
        </CardTitle>
        <p className='text-darkGrayishBlue font-medium text-sm mb-6'>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <p className='flex items-center mb-6'>
          <span className='mr-6 text-3xl text-darkCyan font-bold font-fraunces'>
            $149.99
          </span>
          <span className='line-through text-darkGrayishBlue text-sm'>
            $169.99
          </span>
        </p>
        <CardBtn text='add to cart' />
      </CardContent>
    </Card>
  );
}

export default ProductPreviewCard;
