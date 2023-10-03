// Models
import { ITicker } from "@/models/Ticker";
// Constants
import { SEPARATE_PARAMETERS } from "@/constants/Symbols";

export const useTransformSymbol = (): {
  handleGetIds: (cryptos: ITicker[], labels: string) => string;
} => {
  /**
   * Action to get ids from symbols
   * @param {ITicker[]} cryptos - Crypto list
   * @param {string} labels - Symbols from coins
   * @returns {string} - String with ids
   */
  const handleGetIds = (cryptos: ITicker[], labels: string): string => {
    const listId: string[] = []
    const getOptions = labels?.split(SEPARATE_PARAMETERS)

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
    handleGetIds
  }
}
