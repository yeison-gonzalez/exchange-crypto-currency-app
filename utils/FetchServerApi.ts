// Models
import { IRequestMarket, IMarket } from "@/models/Market"
import { IRequest, ITicker } from "@/models/Ticker"

/**
 * Get all tickers
 * @returns Promise<ITicker[]>
 */
export const fetchGetAllTickers = async (): Promise<ITicker[]> => {
  return fetch(`${process.env.API_URL}/tickers/?limit=10`, { next: { revalidate: 60 } })
    .then(res => res.json())
    .then(res => res.data)
}

export const fetchGetTickerDetail = async ({ coin }: IRequest): Promise<ITicker[]> => {
  if (coin) {
    return fetch(`${process.env.API_URL}/ticker/?id=${coin}`)
      .then(res => res.json())
      .then(res => res.data || res)
  }
  return []
}

export const fetchGetMarketByCoin = async ({ id }: IRequestMarket): Promise<IMarket[]> => {
  return fetch(`${process.env.API_URL}/coin/markets/?id=${id}`)
    .then(res => res.json())
    .then(res => res.slice(0, 5))
}
