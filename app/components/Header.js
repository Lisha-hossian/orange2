import Link from 'next/link';
import Image from 'next/image';
import HeadLogo from '../image/orangeLogo.jpg';
export default function Header() {
  return (
    <header className=''>
      <div className='bg-grey-50 text-black border-1 border-blue-500 border-opacity-50 flex items-center'>
        <nav className='max-w-screen-2xl container flex mx-auto items-center justify-between py-6 px-4 flex-wrap'>
          <div className='hidden sm:block'>
            <ul className='flex font-regular font-semibold text-sm space-x-10 mx-4 md:flex-row items-center'>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all  hover:decoration-red-500'>
                <Link href='/women'>Women</Link>
              </li>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/men'>Men</Link>
              </li>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/teen'>Teen</Link>
              </li>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/kids'>Kids</Link>
              </li>
              <li className='hover:text-yellow-500 hover:scale-105 transition-all'>
                <Link href='/home'>Home Wear</Link>
              </li>
            </ul>
          </div>

          <div className='  '>
            <Link href='/'>
              <div className='flex items-center border border-orange-500 w-20 h-20 bg-orange-200 rounded-full'>
                <span className='text-2xl font-mono text-black bg-orange-400 font-bold  mr-6 hover:bg-orange-700  '>
                  Orange
                </span>
              </div>
            </Link>
          </div>

          <div className='hidden sm:block'>
            <ul className='flex font-regular font-semibold text-sm space-x-10 items-center'>
              <div className='flex'>
                <li>
                  <input className='  bg-slate-200 w-80 h-8 items-center m-auto rounded-sm focus:outline-none'></input>
                </li>
                <li className='flex justify-center bg-slate-200 w-20 h-8 '>
                  <button href='/' className='my-2 ml-4 '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='22'
                      viewBox='0 0 18 18'
                      fill='none'
                    >
                      <path
                        d='M15.75 15.75L11.8525 11.8525M11.8525 11.8525C12.8704 10.8346 13.5 9.4283 13.5 7.875C13.5 4.7684 10.9816 2.25 7.875 2.25C4.7684 2.25 2.25 4.7684 2.25 7.875C2.25 10.9816 4.7684 13.5 7.875 13.5C9.4283 13.5 10.8346 12.8704 11.8525 11.8525Z'
                        stroke='#0F172A'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </li>
              </div>

              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/login'>Login</Link>
              </li>

              <li className='hover:text-yellow-500 hover:scale-105 transition-all '>
                <Link href='/wishlist'>Wishlist</Link>
              </li>
              <li className='flex '>
                <Link href='/'>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6 hover:text-yellow-500 hover:scale-105 transition-all'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                    />
                  </svg>
                  <sub className='lg:absolute top-12 right-28 text-sm bg-orange-700 w-5 h-5 text-center rounded-full'>
                    0
                  </sub>
                </Link>
              </li>
              <li> </li>
            </ul>
          </div>

          <div className='block sm:hidden text-xl cursor-pointer hover:text-blue-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
              />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
}
