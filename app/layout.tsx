// Libraries
import type { Metadata } from 'next'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import bitcoin from '../public/bitcoin.png'
// Styles
import './globals.css'
import { ListExchanges } from '@/components'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Exchange crypto currency',
  description: 'App to exchange crypto currency',
}

export default function RootLayout({
  children,
}: {
    children: React.ReactNode
  }): React.ReactElement {

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center gap-y-6 p-7">
          <div className="flex flex-col gap-4 items-center">
            <Link href='/'>
              <div className='flex flex-row mb-6 items-center gap-x-2'>
                <Image
                  src={bitcoin}
                  alt="Bitcoin"
                  width={45}
                  height={45}
                />
                <h2 className='text-4xl text-white font-bold'>Exchange currency</h2>
              </div>
            </Link>
            <div className='flex flex-row gap-x-6'>
              <ListExchanges />
              <article>
                {children}
              </article>
            </div>
          </div>
        </main>
        <footer className='text-center px-6 pb-6'>
          <p className='text-sm text-white font-normal'>
            © Todos los derechos reservados 2023 / Yeison Gonzalez
          </p>
        </footer>
      </body>
    </html>
  )
}
