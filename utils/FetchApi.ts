// Models
import { IRequestMarket, IMarket } from "@/models/Market"
import { IRequest, ITicker } from "@/models/Ticker"

/**
 * Get all tickers
 * @returns Promise<ITicker[]>
 */
export const fetchGetAllTickers = async (): Promise<ITicker[]> => {
  return await fetch(`${process.env.BASE_FETCH_URL}/api/tickers`, { next: { revalidate: 60 } })
    .then(res => res.json())
    .then(res => res.data)
}

export const fetchGetTickerDetail = async ({ coin }: IRequest): Promise<ITicker[]> => {
  if (coin) {
    return await fetch(`${process.env.BASE_FETCH_URL}/api/tickers/search?coin=${coin}`)
      .then(res => res.json())
      .then(res => res.data || res)
  }
  return []
}

export const fetchGetMarketByCoin = async ({ id }: IRequestMarket): Promise<IMarket[]> => {
  return await fetch(`${process.env.BASE_FETCH_URL}/api/markets?coin=${id}`)
    .then(res => res.json())
    .then(res => res.slice(0, 5))
}