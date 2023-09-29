/**
 * Interface ticker
 * @constructor
 * @param {string} id - Id ticker
 * @param {string} symbol - Symbol ticker
 * @param {string} name - Name ticker
 * @param {string} nameid - Name id ticker
 * @param {number} rank - Rank ticker
 * @param {string} price_usd - Price usd from ticker
 * @param {string} percent_change_24h - Percentage ticker change in 24h
 * @param {string} percent_change_1h - Percentage ticker change in 1h
 * @param {string} percent_change_7d - Percentage ticker change in 7d
 * @param {string} price_btc - Price coin
 * @param {string} market_cap_usd - Market used to exchange coin
 * @param {number} volume24 - Volume coin
 * @param {number} volume24a - Volume coin a
 * @param {string} csupply - Value
 * @param {string} tsupply - Value
 * @param {string} msupply- Value
 */
export interface ITicker {
  id: string
  symbol: string
  name: string
  nameid: string
  rank: number
  price_usd: string
  percent_change_24h: string
  percent_change_1h: string
  percent_change_7d: string
  price_btc: string
  market_cap_usd: string
  volume24: number
  volume24a: number
  csupply: string
  tsupply: string
  msupply: string
}

/**
 * Interface reques for coin
 * @constructor
 * @param {string} coin - symbols coin from params
 */
export interface IRequest {
  coin: string
}
