import { type NextRequest, NextResponse } from 'next/server'

/**
 * Call endpoint to get all markets by coin from API
 * @returns {Promise<NextResponse>}
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const coinId = searchParams.get('coin')
  const res = await fetch(`${process.env.API_URL}/coin/markets/?id=${coinId}`)
  const data = await res.json()
  return NextResponse.json(data)
}
