export const useGetRouteMarkets = (): { getRouteMarkets: (currentPath: string, symbol: string) => string } => {
    const getRouteMarkets = (currentPath: string, symbol: string): string => {
        if (currentPath && symbol) {
            const options = currentPath?.split(',')
            const optionsMarket = currentPath?.split('/')
            optionsMarket.shift()
            const existCurrentSymbol = optionsMarket.find(option => option === symbol || option === `/${symbol}`)
            const onlyBase = options.find(option => option === '/')

            if (onlyBase) {
                return `/${symbol}/${symbol}`
            } else {
                if (optionsMarket.length === 1 && options.length > 1) { 
                    return `/${optionsMarket[0]}/${symbol}`
                } else if (optionsMarket.length <= 2 && existCurrentSymbol) {
                    return currentPath
                } else if (optionsMarket.length <= 2 && !existCurrentSymbol) {
                    return `/${symbol}/${symbol}`
                } else if (optionsMarket.length > 2 && existCurrentSymbol) {
                    return `/${existCurrentSymbol}/${existCurrentSymbol}`
                } else if (optionsMarket.length > 2 && !existCurrentSymbol) {
                    return `/${symbol}/${symbol}`
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
