import { writeFile } from 'fs/promises'

const FILE_NAME = "searchResult.json"

export default class JsonExporter {

  static saveJsonFile = async (searchResponseArray) => {
    const jsonString = this.#exportSearchResponseArray(searchResponseArray)

    await writeFile(FILE_NAME, jsonString, 'utf8')
  }

  static #exportSearchResponseArray = (searchResponseArray) => {
    const exportObjectArray = this.#getExportObjectArray(searchResponseArray)

    return JSON.stringify(exportObjectArray, null, 2)
  }

  static #getExportObjectArray = (searchResponseArray) => {
    const exportObjectArray = []

    for (const searchResponse of searchResponseArray) {
      const company = searchResponse.company
      const address = searchResponse.address
      const pos = {
        from: searchResponse.from,
        to: searchResponse.to,
        row: searchResponse.row
      }

      exportObjectArray.push({ company, address, pos })
    }

    return exportObjectArray
  }
}
