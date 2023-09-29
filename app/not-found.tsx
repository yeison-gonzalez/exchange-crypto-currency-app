import Link from 'next/link'

export default function Custom404(): JSX.Element {
  return (
    <main className="flex flex-col gap-y-4 text-center rounded-3xl bg-black p-4">
      <h2 className="text-3xl font-bold text-white">There was a problem</h2>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-sm font-normal text-white'>We could not find the page  you were looking for.</p>
        <p className='text-sm font-normal text-white'>Go back to the <Link href='/' className='text-sm font-bold underline text-white'>Dashboard</Link></p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mt-2 stroke-red-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      </div>
    </main>
  )
}