import Link from 'next/link';
import Image from 'next/image';

import Icons from '../image/pay.png';
import VisaIcon from '../image/visa.png';

import MasterIcon from '../image/mastercard.png';
import CardIcon from '../image/card.png';
import Twitter from '../image/twitter.png';
import InIcon from '../image/in.png';
import YIcon from '../image/ytube.png';
import Button from './Button';

export default function Footer() {
  return (
    <footer className=' font-black border border-red-400 bg-gray-50 m-0'>
      <div className='flex justify-evenly items-start flex-wrap'>
        <div className='flex mx-10 my-16'>
          {/* <ul className=''>
            <li>
              <Image className='w-14 h-12' src={OrangeL} alt='logo' />
            </li>
          </ul> */}
          <div className='flex items-center border border-orange-500 w-[100] h-28 bg-orange-200 rounded-full'>
            <span className='text-4xl font-mono text-black bg-orange-400 font-bold  mr-6 '>
              Orange
            </span>
          </div>

          <div className='flex flex-wrap'>
            <ul className='flex flex-col mx-24 my-12 gap-3'>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/help'>Help</Link>
              </li>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/returns'>Returns</Link>
              </li>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/my-purchases'>My purchases</Link>
              </li>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/orange-outfits'>Orange Outfits</Link>
              </li>
            </ul>
            {/* </div> */}
            {/* <div className='flex font-regular text-sm leading-8 m-4'> */}
            <ul className='flex flex-col mx-20 my-12 gap-3 '>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/sustainability'>Sustainability</Link>
              </li>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/club-orange'>Club Orange</Link>
              </li>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/special-days'>Special Days</Link>
              </li>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/shops'>Shops</Link>
              </li>
            </ul>
            {/* </div> */}

            {/* <div className='flex font-regular text-sm leading-8 m-4'> */}
            <ul className='flex flex-col mx-20 my-12 gap-3'>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/gift-card'>Gift Card</Link>
              </li>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/site-map'>Site Map</Link>
              </li>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/imprint'>Imprint</Link>
              </li>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/job-offers'>Job Offers</Link>
              </li>
            </ul>
            {/* </div> */}
            {/* <div className='flex font-regular text-sm leading-8 mr-6'> */}
            <ul className='flex flex-col mx-20 my-12 gap-3 '>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/about-us'>About Us</Link>
              </li>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/contact-us'>Contact Us</Link>
              </li>
            </ul>
            {/* </div> */}
            <div className=''>
              <h3 className='mx-10 mt-10 py-2'>Follow Us</h3>
              <ul className='flex flex-row gap-4 mx-2 my-2'>
                <li>
                  <Link href={''}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='black'
                    >
                      <path
                        d='M18.3941 5.1886C18.3355 5.1336 18.2583 5.1054 18.1761 5.1104C17.0419 5.1844 16.1313 4.951 15.3965 4.3966C14.4021 3.646 13.9265 2.562 13.8069 0.7716C13.7965 0.619 13.6695 0.5 13.5161 0.5H10.5111C10.3503 0.5 10.2199 0.6304 10.2199 0.7912C10.2213 4.7036 10.2231 8.1344 10.2127 12.2516C10.2185 12.6324 10.7869 12.638 10.7953 12.2532C10.8059 8.22 10.8029 4.9016 10.8025 1.0826H13.2465C13.3657 3.5682 14.9501 5.8144 17.9037 5.7052V8.2796C16.6583 8.194 15.4667 8.1356 14.3277 7.5374C14.0275 7.4422 13.3899 6.9446 13.2759 7.5022C13.2439 7.7568 13.3135 11.9042 13.3003 13.2246C13.1423 20.3664 3.06726 21.0592 2.12046 13.7792C1.83766 10.8912 4.05926 8.1578 6.97186 7.8102C7.35386 7.7576 7.28146 7.1922 6.90286 7.2318C3.68326 7.6158 1.22766 10.6402 1.54086 13.8362C2.58586 21.857 13.7083 21.0952 13.8829 13.2182C13.8957 11.7706 13.8403 8.9922 13.8513 7.963C14.4053 8.2078 14.9477 8.4724 15.5249 8.597C16.4023 8.7872 17.2851 8.8002 18.1659 8.8888C18.3327 8.9092 18.4899 8.7664 18.4863 8.599V5.4016C18.4863 5.3208 18.4529 5.2438 18.3941 5.1886Z'
                        fill='black'
                      />
                      <path
                        d='M4.58521 13.3506C4.63761 16.7574 9.31161 17.7046 10.6064 14.4954C10.664 14.3452 10.5888 14.1768 10.4386 14.1194C10.2882 14.0616 10.12 14.1368 10.0624 14.2872C9.01481 16.8894 5.21121 16.1232 5.16781 13.349C5.16441 12.0956 6.032 11.0418 7.2308 10.843C7.664 10.7724 8.17121 10.837 8.6332 10.8348C8.79421 10.8348 8.92441 10.7044 8.92441 10.5436V7.51156C8.91861 7.13156 8.3486 7.12636 8.3418 7.51156V10.2464C6.3702 9.97116 4.59281 11.259 4.58521 13.3506Z'
                        fill='black'
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href={''}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='26'
                      height='19'
                      viewBox='0 0 26 19'
                      fill='black'
                    >
                      <path
                        d='M5.2409 2.21313L11.2617 10.2513L5.20288 16.7867H6.56649L11.871 11.0649L16.1569 16.7867H20.7973L14.4377 8.29639L20.0773 2.21313H18.7137L13.8285 7.48283L9.88131 2.21313H5.2409ZM7.24619 3.21604H9.378L18.7917 15.7837H16.6599L7.24619 3.21604Z'
                        fill='black'
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href={''}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                      fill='black'
                    >
                      <g clipPath='url(#clip0_90_10051)'>
                        <path
                          d='M12.765 1.125H5.235C2.96511 1.125 1.125 2.96511 1.125 5.235V12.765C1.125 15.0349 2.96511 16.875 5.235 16.875H12.765C15.0349 16.875 16.875 15.0349 16.875 12.765V5.235C16.875 2.96511 15.0349 1.125 12.765 1.125Z'
                          stroke='white'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M9 13.125C11.2782 13.125 13.125 11.2782 13.125 9C13.125 6.72183 11.2782 4.875 9 4.875C6.72183 4.875 4.875 6.72183 4.875 9C4.875 11.2782 6.72183 13.125 9 13.125Z'
                          stroke='white'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M13.5 4.125C13.7071 4.125 13.875 3.95711 13.875 3.75C13.875 3.54289 13.7071 3.375 13.5 3.375C13.2929 3.375 13.125 3.54289 13.125 3.75C13.125 3.95711 13.2929 4.125 13.5 4.125Z'
                          stroke='white'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_90_10051'>
                          <rect width='18' height='18' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href={''}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='18'
                      height='18'
                      fill='black'
                    >
                      <path d='M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.733 0 1.325-.592 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z' />
                    </svg>
                  </Link>
                </li>
                <li className='w-6 h-6 bg-white '>
                  <Image src={YIcon} alt='Youtube' />
                </li>
                <li className='w-6 h-6 bg-white '>
                  <Image src={InIcon} alt='in-icon' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap '>
        <ul className='flex flex-row gap-4 mt-14 m-auto'>
          <li className=''>Download on</li>
          <li className=''>
            <Link href={''}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='30'
                height='30'
                fill='currentColor'
              >
                <path d='M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42Zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.92 1.21 2 2.56 3.46 2.49 1.42-.07 1.94-.91 3.65-.91s2.23.91 3.65.89c1.5-.03 2.48-1.21 3.39-2.41a11 11 0 0 0 1.52-2.77 4.41 4.41 0 0 1-2.71-4.04Z' />
              </svg>
            </Link>
          </li>
          <li>
            <Link href={''}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='30'
                height='30'
                fill='currentColor'
              >
                <path d='M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49Z' />
              </svg>
            </Link>
          </li>
        </ul>
        <ul className='flex mx-8 my-14 '>
          <li>
            <Button />
          </li>
        </ul>

        <ul className='flex gap-4 mx-20 my-12'>
          <li className='w-14 h-14'>
            <Image src={Icons} alt='pay' />
          </li>

          <li className='w-14 h-14'>
            <Image src={MasterIcon} alt='pay' />
          </li>
          <li>{/* <Image src={PayIcon} alt='pay' /> */}</li>
          <li className='w-14 h-14'>
            <Image src={VisaIcon} alt='pay' />
          </li>
          <li className='w-12 h-12'>
            <Image src={CardIcon} alt='pay' />
          </li>
        </ul>

        {/* <PaymentIcon /> */}
      </div>
      <hr />
      <div className='flex'>
        <ul className='flex gap-4 m-auto hover:text-yellow-500 hover:scale-105 transition-all'>
          <li>FAQ</li>
          <li>|</li>
          <li>Privacy and cookie policy</li>
          <li>|</li>
          <li>General terms and conditions of business</li>
          <li>|</li>
          <li>Ethics channel</li>
          <li>|</li>
          <li>Data protection</li>
          <li>|</li>
          <li>app</li>
          <li>|</li>
          <li>Terms of Use</li>
        </ul>
        <p className='mt-20 mb-4 mr-6 text-sm '>
          &copy; 2025 Orange. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
