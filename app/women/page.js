import Image from 'next/image';
import ImageB2 from '../image/imgB2.png';
import ImageB1 from '../image/imgB1.png';
import ImageW1 from '../image/imgW1.png';
import ImageW2 from '../image/imgW2.png';
import ImageW3 from '../image/imgW3.png';
import ImageW4 from '../image/imgW4.png';
import ImageW5 from '../image/imgW5.png';
import ImageW6 from '../image/imgW6.png';
import ImageW7 from '../image/imgW7.png';
import ImageW8 from '../image/imgW8.png';

export default function Women() {
  return (
    <>
      <main>
        <section>
          <div>
            <ul>
              <li>
                {' '}
                <Image
                  className='w-1/2 h-[500]‚'
                  src={ImageB1}
                  alt='Picture of the author'
                />
              </li>
              <li>
                <Image
                  src={ImageB2}
                  width={'500'}
                  height={'750'}
                  alt='Picture of the author'
                />
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <li>
              <Image
                src={ImageW1}
                width={500}
                height={500}
                alt='Picture of the author'
              />
            </li>
            <li>
              {' '}
              <Image
                src={ImageW2}
                width={500}
                height={500}
                alt='Picture of the author'
              />
            </li>
            <li>
              {' '}
              <Image
                src={ImageW3}
                width={500}
                height={500}
                alt='Picture of the author'
              />
            </li>
            <li>
              <Image
                src={ImageW4}
                width={500}
                height={500}
                alt='Picture of the author'
              />
            </li>
          </div>
        </section>
        <section>
          <div>
            <li>
              {' '}
              <Image
                src={ImageW5}
                width={500}
                height={500}
                alt='Picture of the author'
              />
            </li>
            <li>
              <Image
                src={ImageW6}
                width={500}
                height={500}
                alt='Picture of the author'
              />
            </li>
            <li>
              <Image
                src={ImageW7}
                width={500}
                height={500}
                alt='Picture of the author'
              />
            </li>
            <li>
              <Image
                src={ImageW8}
                width={500}
                height={500}
                alt='Picture of the author'
              />
            </li>
          </div>
        </section>
      </main>
      <h1>It is a women page.</h1>
    </>
  );
}
