import localFont from 'next/font/local'


export const oppo = localFont({
  src: [
    {
      path: '../../public/fonts/opposans.woff2',
      weight: '400',
      style: 'normal',
    },
    
  ],
  variable:"--font-oppo"
})