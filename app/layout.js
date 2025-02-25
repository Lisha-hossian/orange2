import localFont from 'next/font/local';
import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';

// const swiza = localFont({
//   src: [
//     {
//       path: '/fonts/swiza-regular-webfont.woff2',
//       weight: '400',
//       style: 'normal',
//     },

//     {
//       path: '/fonts/swiza-medium-webfont.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//   ],
// });

export const metadata = {
  title: 'Creating a fashion e-commerce website',
  description: 'New fashion,sales',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={` antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
