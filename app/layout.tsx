// Libraries
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// Styles
import './globals.css'
import { ListExchanges } from '@/components'

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
            <div className='mb-6'>
              <h2 className='text-4xl text-white font-bold'>Exchange currency</h2>
            </div>
            <div className='flex flex-row gap-x-6'>
              <ListExchanges />
              <article>
                {children}
              </article>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
