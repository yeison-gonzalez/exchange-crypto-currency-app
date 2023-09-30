// Models
import { IRequestMarket, IMarket } from "@/models/Market"
import { IRequest, ITicker } from "@/models/Ticker"

/**
 * Get all tickers
 * @returns Promise<ITicker[]>
 */
export const fetchGetAllTickers = async (): Promise<ITicker[]> => {
  try {
    return fetch('https://api.coinlore.net/api/tickers/?limit=10')
      .then(res => res.json())
      .then(res => res.data)
  } catch (err) {
    throw new Error('Error loading data')
  }
}

export const fetchGetTickerDetail = async ({ coin }: IRequest): Promise<ITicker[]> => {
  try {
    if (coin) {
      return fetch(`https://api.coinlore.net/api/ticker/?id=${coin}`)
        .then(res => res.json())
    }
    return []
  } catch (err) {
    throw new Error('Error loading data')
  }
}

export const fetchGetMarketByCoin = async ({ id }: IRequestMarket): Promise<IMarket[]> => {
    try {
        return fetch(`https://api.coinlore.net/api/coin/markets/?id=${id}`)
            .then(res => res.json())
            .then(res => res.slice(0, 5))
    } catch (err) {
      throw new Error('Error loading data')
    }
}