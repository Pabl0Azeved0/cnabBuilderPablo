import SearchResponse from './searchResponse.js'

const COMPANY_FROM = 33
const COMPANY_TO = 72
const ADDRESS_FROM = 73
const ADDRESS_TO = 153

export default class CnabFileManager {
  #cnabHeader
  #cnabBodySegmentoP = []
  #cnabBodySegmentoQ = []
  #cnabBodySegmentoR = []
  #cnabTail

  constructor(fileContent) {
    const cnabArray = fileContent.split('\n').filter(line => line.trim() !== '')
    this.#cnabHeader = this.#sliceArrayPosition(cnabArray, 0, 2)
    this.#cnabTail = this.#sliceArrayPosition(cnabArray, -2)

    const cnabContent = this.#sliceArrayPosition(cnabArray, 2, -2)

    if (cnabContent.length % 3 !== 0) {
      throw new Error("Invalid file format. Segments Q, P, and R must have the same number of lines!")
    }

    for (let i = 0; i < cnabContent.length; i += 3) {
      this.#cnabBodySegmentoP.push(cnabContent[i])
      this.#cnabBodySegmentoQ.push(cnabContent[i + 1])
      this.#cnabBodySegmentoR.push(cnabContent[i + 2])
    }
  }

  get cnabBodySegmentoP() {
    return this.#cnabBodySegmentoP
  }

  get cnabBodySegmentoQ() {
    return this.#cnabBodySegmentoQ
  }

  get cnabBodySegmentoR() {
    return this.#cnabBodySegmentoR
  }

  searchForCompany = value => {
    value = value.toUpperCase()
    return this.#search(value, 'Q')
  }

  searchForSegment = value => {
    value = value.toUpperCase()
    const found = []

    found.push(...this.#search(value, 'Q'))
    found.push(...this.#search(value, 'P'))
    found.push(...this.#search(value, 'R'))

    return found
  }

  #search = (value, segmentType) => {
    const found = []
    const segmentArray = this[`cnabBodySegmento${segmentType}`] // Access using getter

    for (const [index, row] of segmentArray.entries()) {
      const pos = row.search(value)

      if (pos !== -1) {
        const companyName = row.substring(COMPANY_FROM, COMPANY_TO).trim()
        const address = row.substring(ADDRESS_FROM, ADDRESS_TO).trim()
        const fileRow = ((index * 3) + (segmentType === 'Q' ? 4 : segmentType === 'P' ? 3 : 5))
        found.push(new SearchResponse(companyName, value, fileRow, pos + 1, segmentType, row, address))
      }
    }

    return found
  }

  #sliceArrayPosition = (arr, ...positions) => [...arr].slice(...positions)
}
