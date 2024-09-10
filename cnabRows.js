'use strict';

import FileConfigurer from './configs/fileConfigurer.js'
import handleCnabFile from './cnab/cnabFileHandler.js'
import handleError from './utils/errorHandler.js'
import YargsHelper from './utils/yargsHelper.js';

const yargsHelper = new YargsHelper()

console.time('leitura Async')
new FileConfigurer(yargsHelper.path)
  .readFile()
  .then(await handleCnabFile(yargsHelper.yargs))
  .catch(handleError)
  .finally(console.timeEnd('leitura Async'))
