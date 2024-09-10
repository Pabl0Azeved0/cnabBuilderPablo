import path from 'path'
import { fileURLToPath } from 'url'
import { readFile } from 'fs/promises'

export default class FileConfigurer {
  #path
  #encode = 'utf8'

  constructor(pathFile) {
    if (pathFile && pathFile !== '') {
      this.#path = pathFile
    } else {
      console.log("Using default file: cnabExample.rem")
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      this.#path = path.resolve(`${__dirname}/../cnabExample.rem`)
    }
  }

  readFile = () => readFile(this.#path, this.#encode)
}
