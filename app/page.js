import Image from 'next/image';
import Link from 'next/link';
import heroImage from './image/img2.jpg';
import bgImage from './image/imgM11.png';
import headImage from './image/img.png';
import secondImage from './image/img4.png';
import lastImage from './image/last-img.png';
import thirdImage from './image/img5.png';
import forthImage from './image/img6.png';
import fifthImage from './image/img7.png';
import sixthOImage from './image/img8.png';
import seventhTImage from './image/img9.png';
import eightTImage from './image/img10.png';
import ninthFImage from './image/img11.png';
import tenthMImage from './image/imgM12.png';
import eleventhMImage from './image/imgM13.png';

export default function Home() {
  return (
    <>
      <main className='px-4 lg:px-0'>
        <section className='relative'>
          <Image
            className='h-[400px] lg:h-[800px] object-cover object-top'
            src={headImage}
            alt=''
          />
          <div className='container'>
            <div className='absolute bottom-[110px] right-[50px] '>
              <h1 className='font-serif text-4xl font-bold mx-16 my-0 leading-3'>
                <span className='h1-fill text-white block leading-9 '>
                  New Summer Fashion
                </span>
                <span className='h1-outline text-transparent decoration-white  '>
                  2025
                </span>
              </h1>

              <Link
                href='/men'
                className='relative font-xl font-bold text-white px-8 py-20 mr-18px top-2 left-9 lg:left-32 hover:text-yellow-500 hover:scale-105 transition-all underline '
              >
                For Men
              </Link>
              <Link
                href='/'
                className='relative font-xl font-bold text-white px-8 py-20 mr-18px  top-2 left-9 lg:left-32 hover:text-yellow-500 hover:scale-105 transition-all underline'
              >
                For Women
              </Link>
            </div>
          </div>
        </section>
        <section className='flex flex-wrap relative py-4'>
          <Image
            src={secondImage}
            alt='img4'
            className='lg:w-5/12 object-cover object-top'
          />

          {/* <div className='flex font-semibold text-lg m-auto text-white gap-80 absolute bottom-28'>
            <Link
              href='/'
              className='flex underline mx-12 hover:text-yellow-500 hover:scale-105 transition-all'
            >
              For Elegant
            </Link>
            <Link
              href='/'
              className='hover:text-yellow-500 hover:scale-105 transition-all underline'
            >
              View All
            </Link>
          </div> */}
          <div className=' py-24 lg:py-32 lg:w-7/12'>
            <div className='flex flex-col items-center justify-center bg-[#F5F5F5] py-16 px-8 lg:px-0'>
              <h2 className='font-medium text-4xl lg:text-5xl text-center mb-6 leading-snug'>
                HIGH-QUALITY WOMEN&apos;S FASHION – FROM SMART TO CASUAL
              </h2>
              <p className='text-base text-center mb-8 max-w-[544px]'>
                Join for thousands of brand new fashion. Embrace pure confidence
                with Orange ONE, the perfect first layer and trends with Orange.
                Start your journey today!
              </p>
              <button className=' border border-black text-white font-semibold bg-black w-80 h-14 m-auto rounded-md hover:bg-sky-500 '>
                Join Now
              </button>
            </div>
            <ul className='flex justify-evenly m-6 font-semibold'>
              <li className='hover:underline hover:text-yellow-500 hover:scale-105 transition-all'>
                <Link href={'/women'}>SELECTION</Link>
              </li>
              <li className='hover:underline hover:text-yellow-500 hover:scale-105 transition-all'>
                <Link href={'/women'}>COLLECTIONS</Link>
              </li>
              <li className='hover:underline hover:text-yellow-500 hover:scale-105 transition-all'>
                <Link href={'/women'}>PLUS SIZES</Link>
              </li>
              <li className='hover:underline hover:text-yellow-500 hover:scale-105 transition-all'>
                <Link className='text-red-500' href={'/women'}>
                  SALE-70%
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <div className='flex items-center justify-center  my-4 py-4 w-screen h-10 bg-slate-50 lg:text-4xl font-semibold'>
          <ul className='flex gap-20 flex-wrap'>
            <li>Summer Collection 2025</li>
            <li className=''>UP TO 35% OFF</li>
          </ul>
        </div>
        <section className='my-8'>
          <div className='flex justify-evenly'>
            <ul className='flex gap-2 flex-col lg:flex-row'>
              <li className='w-full lg:w-4/12'>
                <Image
                  className='w-[500px] h-[750px]'
                  src={thirdImage}
                  alt='img5'
                />
                <div className='flex justify-between ml-8 mr-2 mt-2 mb-4'>
                  <span className=''>Green-Outfit</span>
                  <span className=''>€1.999,00</span>
                </div>
              </li>
              <li className='w-full lg:w-4/12'>
                <Image
                  className='w-[500px] h-[750px]'
                  src={fifthImage}
                  alt='img6'
                />
                <div className='flex justify-between mt-2 mb-4'>
                  <span className=''>Casual-Outfit</span>
                  <span className=''>€509,00</span>
                </div>
              </li>
              <li className='w-full lg:w-4/12'>
                <Image
                  className='w-[500px] h-[750px]'
                  src={forthImage}
                  alt='img7'
                />
                <div className='item-details flex justify-between mt-2 mb-4'>
                  <span>Flower-Outfit </span>

                  <span>€799,00</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <div></div>
        <section>
          <div className='flex justify-evenly gap-4 my-6 flex-wrap'>
            <ul className='flex gap-2 '>
              <li className=''>
                {' '}
                <Image
                  className='w-[370] h-[518] object-cover'
                  src={sixthOImage}
                  alt='img8'
                />
                <div className='text-center'>
                  <Link href={'/women'}>
                    <span className='font-bold lg:text-xl hover:underline hover:text-yellow-500 hover:scale-105 transition-all'>
                      PARTY-DRESS
                    </span>
                  </Link>
                </div>
              </li>

              <li>
                {' '}
                <Image
                  className='w-[370] h-[518] object-cover'
                  src={seventhTImage}
                  alt='img9'
                />
                <div className='text-center '>
                  <Link href={'/women'}>
                    {' '}
                    <span className='font-bold lg:text-xl hover:underline hover:text-yellow-500 hover:scale-105 transition-all'>
                      PANT-BLAZER
                    </span>
                  </Link>
                </div>
              </li>
              <li>
                {' '}
                <Image
                  className='w-[370] h-[518] object-cover'
                  src={eightTImage}
                  alt='img10'
                />
                <div className='text-center '>
                  <Link href={'/women'}>
                    {' '}
                    <span className='font-bold lg:text-xl hover:underline hover:text-yellow-500 hover:scale-105 transition-all'>
                      CASUAL-DRESSES
                    </span>
                  </Link>
                </div>
              </li>
              <li>
                <Image
                  className='w-[370] h-[518] object-cover'
                  src={ninthFImage}
                  alt='img11'
                />
                <div className='text-center '>
                  <Link href={'/women'}>
                    {' '}
                    <span className='font-bold lg:text-xl hover:underline hover:text-yellow-500 hover:scale-105 transition-all'>
                      COATS
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className='flex font-semibold lg:text-xl justify-evenly bg-slate-100 my-4 py-4'>
            <Link
              className='hover:text-yellow-500 hover:scale-105 transition-all'
              href={'/men'}
            >
              FOR NEW CASUAL LOOK COLLECTION
            </Link>

            <Link
              className='flex underline items-center hover:text-yellow-500 hover:scale-105 transition-all'
              href={'/men'}
            >
              CLICK HERE
            </Link>
          </div>
        </section>
        <section className=''>
          {/* <div className='relative'>
            <div className='flex  justify-evenly my-6'>
              <Image className='lg:w-[500] h-[750]' src={bgImage} alt='' />
              <div className='flex lg:absolute top-1/2 left-52 underline '>
                <Link className='font-semibold lg: ' href={'/men'}>
                  OFFICE-WEAR
                </Link>
              </div>
              <div className='flex justify-evenly  bottom-40 left-52 '>
                <Image className='w-[500] h-[750]' src={tenthMImage} alt='' />
                <div className='flex lg:absolute top-1/2 right-40 underline'>
                  <Link className='font-semibold' href={'/men'}>
                    CASUAL-WEAR
                  </Link>
                </div>
              </div>
              <div className='flex bottom-1/4 left-52 lg:'>
                <Image
                  className='w-[500] h-[750]'
                  src={eleventhMImage}
                  alt=''
                />
                <div className='flex lg:absolute bottom-1/2 left-1/2 underline'>
                  <Link className='font-semibold' href={'/men'}>
                    SUMMER-WEAR
                  </Link>
                </div>
              </div>
            </div> */}
          <div className='flex justify-evenly relative '>
            <ul className='flex gap-2 '>
              <li className=''>
                <Image
                  className='lg:w-[500] h-[750] object-cover'
                  src={bgImage}
                  alt=''
                />
              </li>
              <div className='flex lg:absolute top-1/2 left-80  text-white font-bold underline  decoration-orange-400 hover:text-yellow-500 hover:scale-105 transition-all'>
                <Link className='' href={'/men'}>
                  SWEAT
                </Link>
              </div>
              <li className=''>
                <Image
                  className='lg:w-[500] h-[750] object-cover '
                  src={tenthMImage}
                  alt=''
                />
              </li>
              <div className='flex lg:absolute top-1/2 left-1/2 text-white font-bold underline  decoration-orange-400  hover:text-yellow-500 hover:scale-105 transition-all'>
                <Link className='' href={'/men'}>
                  SUITS
                </Link>
              </div>
              <li className=''>
                <Image
                  className='lg:w-[500] h-[750] object-cover'
                  src={eleventhMImage}
                  alt=''
                />
              </li>
              <div className='flex lg:absolute bottom-1/2 right-80  text-white font-bold underline decoration-orange-400  hover:text-yellow-500 hover:scale-105 transition-all'>
                <Link className='' href={'/men'}>
                  CASUAL
                </Link>
              </div>
            </ul>
          </div>
          <div className='flex font-semibold text-2xl justify-end my-4 py-4'>
            <ul className='flex items-center'>
              <li>
                {' '}
                <Link
                  className='hover:text-yellow-500 hover:scale-105 transition-all'
                  href={'/men'}
                >
                  {' '}
                  MEN NEW COLLECTION{' '}
                </Link>
              </li>
              <li>
                <Link className='flex items-center' href={'/men'}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='54'
                    height='54'
                    viewBox='0 0 54 54'
                    fill='none'
                    className='flex items-center m-2'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M5.40002 27C5.40002 25.8816 6.30665 24.975 7.42502 24.975L41.4183 24.975L35.7471 19.7089C34.9276 18.9479 34.8801 17.6666 35.6411 16.847C36.4021 16.0275 37.6834 15.9801 38.5029 16.7411L47.9529 25.5161C48.3656 25.8992 48.6 26.4369 48.6 27C48.6 27.563 48.3656 28.1007 47.9529 28.4839L38.5029 37.2589C37.6834 38.0199 36.4021 37.9724 35.6411 37.1529C34.8801 36.3333 34.9276 35.0521 35.7471 34.2911L41.4183 29.025L7.42502 29.025C6.30665 29.025 5.40002 28.1183 5.40002 27Z'
                      fill='black'
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <div className=' flex  border border-red-600 h-12  bg-red-500 gap-2 justify-center'>
          <ul className='flex gap-4 items-center'>
            <li>
              <span className='font-semibold my-2'>SALE UP TO-70%</span>
            </li>
            <li>
              <span className='text-xs my-2'>Last reduction</span>
            </li>
            <li>
              <span className='font-semibold my-2'>BUY NOW</span>
            </li>
          </ul>
        </div>

        <section className='relative'>
          <div className='flex '>
            <Image className='h-[400px] object-fill' src={lastImage} alt='' />

            <div className='hidden lg:flex container my-6 absolute right-[20] items-center border border-black-700 w-1/2 lg:w-50 h-72 bg-white font-medium'>
              <div className=' flex '>
                <h2
                  className='absolute top-10 left-4
              font-bold text-3xl m-6'
                >
                  Orange newsletter
                </h2>
                <p className='flex flex-wrap text-center leading-8'>
                  <span className='absolute bottom-36  mx-4 mb-2'>
                    With the Orange newsletter you are always up to date about
                    new products,
                  </span>
                  <span className=' absolute bottom-32 left-6 mx-2'>
                    exclusive specials, lifestyle and fashion trends.
                  </span>
                </p>
                <div className=' absolute bottom-6 mx-6 my-4 '>
                  <button className=' border border-black text-white font-semibold bg-black w-80 h-16 m-auto rounded-md  hover:bg-sky-500'>
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
