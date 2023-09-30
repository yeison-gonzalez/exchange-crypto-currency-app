// Libraries
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// Image
import bitcoin from '../public/bitcoin.png'
// Components
import { ListExchanges } from '@/components'
// Constants
import { MAIN_ROUTE } from '@/constants/Routes'
// Styles
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Exchange crypto currency',
  description: 'App to get crypto currency by USD',
}

export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center gap-y-6 p-7">
          <div className="flex flex-col gap-4 items-center">
            <Link href={MAIN_ROUTE.route}>
              <div className='flex flex-row mb-6 items-center gap-x-2'>
                <Image
                  src={bitcoin}
                  alt="Bitcoin"
                  className='w-11 h-11 xs:w-6 xs:h-6'
                />
                <h2 className='text-4xl text-white font-bold xs:text-2xl'>Exchange currency</h2>
              </div>
            </Link>
            <div className='flex flex-row gap-x-6 sm:flex-col-reverse sm:gap-y-6 xs:gap-y-6 xs:flex-col-reverse'>
              <ListExchanges />
              <article>
                {children}
              </article>
            </div>
          </div>
        </main>
        <footer className='text-center px-6 pb-6'>
          <p className='text-sm text-white font-normal'>
            © All rights reserved (2023 / Yeison González)
          </p>
        </footer>
      </body>
    </html>
  )
}
