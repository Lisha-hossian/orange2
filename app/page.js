import Image from 'next/image';
import Link from 'next/link';
import heroImage from './image/img2.jpg';

export default function Home() {
  return (
    <>
      <header>
        <div className='bg-white text-black'>
          <nav className='flex items-center justify-between p-4 flex-wrap'>
            <div>
              <ul className='flex font-regular text-sm space-x-10 mx-4'>
                <li className='hover:text-blue-500 hover:scale-105 transition-all hover:underline hover:decoration-red-500'>
                  <Link href='/women'>Women</Link>
                </li>
                <li className='hover:text-yellow-300 hover:scale-105 transition-all hover:decoration-red-500'>
                  <Link href='/men'>Men</Link>
                </li>
                <li className='hover:text-yellow-300 hover:scale-105 transition-all hover:decoration-red-500'>
                  <Link href='/teen'>Teen</Link>
                </li>
                <li className='hover:text-yellow-300 hover:scale-105 transition-all hover:decoration-red-500'>
                  <Link href='/kids'>Kids</Link>
                </li>
                <li className='hover:text-yellow-300 hover:scale-105 transition-all hover:decoration-red-500'>
                  <Link href='/home'>Home</Link>
                </li>
              </ul>
            </div>
            <div>
              <span className='font-bold text-2xl text-orange-700'>Orange</span>
            </div>
            <div>
              <ul className='flex font-regular text-sm space-x-10 mx-4'>
                <li>
                  <Link href='/seek'>Seek</Link>
                </li>
                <li>
                  <Link href='/login'>Login</Link>
                </li>

                <li>
                  <Link href='/wishlist'>Wishlist</Link>
                </li>
                <li>
                  <Link href='/shopping-cart'>Shopping Cart</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section className=''>
          <div className='flex'>
            <Image src={heroImage} alt='img2' />
          </div>
        </section>
        <footer className='box-sizing border border-red-400 bg-slate-400'>
          <div className='flex items-center justify-between'>
            <h1>
              <span className='text-xl text-orange-600 ml-6 '>Orange</span>
            </h1>

            <div className='flex font-regular text-sm  leading-8 m-4'>
              <ul className=''>
                <li>
                  <Link href='/help'>Help</Link>
                </li>
                <li>
                  <Link href='/returns'>Returns</Link>
                </li>
                <li>
                  <Link href='/my-purchases'>My purchases</Link>
                </li>
                <li>
                  <Link href='/orange-outfits'>Orange Outfits</Link>
                </li>
              </ul>
            </div>
            <div className='flex font-regular text-sm leading-8 m-4'>
              <ul>
                <li>
                  <Link href='/sustainability'>Sustainability</Link>
                </li>
                <li>
                  <Link href='/club-orange'>Club Orange</Link>
                </li>
                <li>
                  <Link href='/special-days'>Special Days</Link>
                </li>
                <li>
                  <Link href='/shops'>Shops</Link>
                </li>
              </ul>
            </div>

            <div className='flex font-regular text-sm leading-8 m-4'>
              <ul>
                <li>
                  <Link href='/gift-card'>Gift Card</Link>
                </li>
                <li>
                  <Link href='/site-map'>Site Map</Link>
                </li>
                <li>
                  <Link href='/imprint'>Imprint</Link>
                </li>
                <li>
                  <Link href='/job-offers'>Job Offers</Link>
                </li>
              </ul>
            </div>
            <div className='flex font-regular text-sm leading-8 mr-6'>
              <ul>
                <li>
                  <Link href='/about-us'>About Us</Link>
                </li>
                <li>
                  <Link href='/contact-us'>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
