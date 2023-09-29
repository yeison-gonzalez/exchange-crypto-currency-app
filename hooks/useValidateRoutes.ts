// Constants
import { OPTION_URL, MAIN_ROUTE } from "@/constants/Routes"
import { SEPARATE_MODULE, SEPARATE_PARAMS_MODULE } from "@/constants/Symbols"

export const useValidateRoutes = (): { getRouteMarkets: (currentPath: string, symbol: string) => string } => {
  /**
   * Action to generate url by current params
   * @param {string} currentPath - Current path from app 
   * @param {string} symbol - Coin symbols in params 
   * @returns {string} - New route
   */
  const getRouteMarkets = (currentPath: string, symbol: string): string => {
    if (currentPath && symbol) {
      const options = currentPath?.split(SEPARATE_PARAMS_MODULE)
      const optionsMarket = currentPath?.split(SEPARATE_MODULE)
      optionsMarket.shift()

      const existCurrentSymbol = optionsMarket.find(option => option === symbol || option === `/${symbol}`)
      const onlyBase = options.find(option => option === MAIN_ROUTE.route)

      if (onlyBase) {
        return `/${symbol}/${symbol}`
      } else {
        if (optionsMarket.length === OPTION_URL.UNIC_MODULE_PARAM && options.length >= OPTION_URL.UNIC_MODULE_PARAM) { 
            return `/${optionsMarket[OPTION_URL.FIRST_MODULE_PARAM]}/${symbol}`
        } else if (optionsMarket.length <= OPTION_URL.SEVERAL_PARAMS_COIN && existCurrentSymbol) {
            return currentPath
        } else if ((optionsMarket.length <= OPTION_URL.SEVERAL_PARAMS_COIN && !existCurrentSymbol) || (optionsMarket.length > OPTION_URL.SEVERAL_PARAMS_COIN && !existCurrentSymbol)) {
            return `/${symbol}/${symbol}`
        } else if (optionsMarket.length > OPTION_URL.SEVERAL_PARAMS_COIN && existCurrentSymbol) {
            return `/${existCurrentSymbol}/${existCurrentSymbol}`
        }
        return `${currentPath}/${symbol}`
      }
    }
    return '/'
  }

  return {
      getRouteMarkets
  }
}
