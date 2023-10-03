'use client'

export default function Error(): JSX.Element {
  return (
    <div className="rounded-2xl p-4 bg-red-500 text-center">
      <h2 className="text-base text-white font-semibold">Something went wrong!</h2>
    </div>
  )
}