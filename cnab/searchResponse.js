export default class SearchResponse {
  company
  row
  from
  to
  segmentType
  segment
  value
  address

  constructor(company, value, row, from, segmentType, segment, address) {
    this.company = company.trim()
    this.row = row
    this.from = from
    this.to = from + value.length
    this.segmentType = segmentType
    this.segment = segment
    this.value = value
    this.address = this.#addressBuilder(address)
  }

  #addressBuilder = (address) => {
    const logradouro = address.substring(0, 40).trim()
    const bairro = address.substring(40, 55).trim()
    const cep = address.substring(55, 63).trim()
    const cidade = address.substring(63, 78).trim()
    const uf = address.substring(78, 80).trim()

    return { logradouro, bairro, cep, cidade, uf }
  }
}
