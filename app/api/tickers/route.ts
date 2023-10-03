import { NextResponse } from 'next/server'

/**
 * Call endpoint to get all tickers from API
 * @returns {Promise<NextResponse>}
 */
export async function GET(): Promise<NextResponse> {
  const res = await fetch(`${process.env.API_URL}/tickers/?limit=10`)
  const data = await res.json()
  return NextResponse.json(data)
}
