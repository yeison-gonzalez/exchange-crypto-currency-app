import { ITicker } from "@/components"

export const useGetIdsBySymbol = (): {
  getFirstParamFromUrl: (param: string) => string;
  handleGetIds: (cryptos: ITicker[], labels: string) => string;
} => {
  const getFirstParamFromUrl = (param: string): string => {
    const options = param?.split('%2C')
    return options[0] 
  }

  const handleGetIds = (cryptos: ITicker[], labels: string): string => {
    const listId: string[] = []
    const getOptions = labels?.split('%2C')

    if (getOptions?.length && cryptos?.length) {
        getOptions?.map(option => {
            const currentCrypto = cryptos?.find((cryto => cryto.symbol === option))
            if (currentCrypto) {
              listId.push(currentCrypto.id)
            } else {
              return '';
            }
        })
    }
    return listId.toString()
  }

  return {
    getFirstParamFromUrl,
    handleGetIds
  }
}
