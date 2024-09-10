import Logger from '../utils/logger.js'
import CnabFileManager from './cnabFileManager.js'
import JsonExporter from '../utils/jsonExporter.js'

const handleCnabFile = async (yargs) => {
  return async file => {
    const { search, value, exportJson } = yargs
    const cnabFileManager = new CnabFileManager(file)

    let searchResponses

    if (search === 'empresa') {
      searchResponses = cnabFileManager.searchForCompany(value)
    } else if (search === 'segmento') {
      searchResponses = cnabFileManager.searchForSegment(value)
    } else {
      throw new Error("Invalid search type specified.")
    }

    if (searchResponses.length === 0) {
      console.warn("No results found for the specified search criteria.")
    } else {
      await Logger.log(searchResponses)

      if (exportJson) {
        await JsonExporter.saveJsonFile(searchResponses)
      }
    }
  }
}

export default handleCnabFile
