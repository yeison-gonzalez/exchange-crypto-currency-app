/**
 * Interface data market
 * @constructor
 * @param {string} name - Name market
 * @param {string} base - Value base market
 * @param {string} quote - Value quote market
 * @param {number} price - Value coin price in market
 * @param {number} price_usd - Value coint price in usd
 * @param {number} volume - Volume coin in market
 * @param {number} volume_usd - Volume coin in usd
 * @param {number} time - Time
 */
export interface IMarket {
  name: string
  base: string
  quote: string
  price: number
  price_usd: number
  volume: number
  volume_usd: number
  time: number
}

/**
 * Interface request market
 * @constructor
 * @param {string} - Id request
 */
export interface IRequestMarket { 
  id: string
}