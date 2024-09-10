import yargs from 'yargs';

export default class YargsHelper {
  #yargs;
  constructor() {
    this.#yargs = yargs(process.argv.slice(2))
      .usage('Usage: $0 [options]')
      .option('search', {
        alias: 's',
        describe: 'Specify what to search in the file',
        type: 'string',
        demandOption: true,
        choices: ['empresa', 'segmento'],
      })
      .option('value', {
        alias: 'v',
        describe: 'Value to search in the file',
        type: 'string',
        demandOption: true,
      })
      .option('path', {
        alias: 'p',
        describe: 'File path',
        type: 'string',
      })
      .option('exportJson', {
        alias: 'e',
        describe: 'Export to JSON',
        type: 'boolean',
      })
      .example([
        ['$0 -s empresa -v "BRASIL" -e', 'List lines where companies have "BRASIL" in their name'],
        ['$0 -s segmento -v 70000147 -e', 'List lines that contain the value "70000147" in their content'],
        ['$0 -s empresa -v zaidan -e -p /path/to/cnabFile.rem', 'List lines where companies have "ZAIDAN" in their name in the specified file'],
      ])
      .locale('pt_BR')
      .argv;
  }

  get yargs() {
    return this.#yargs;
  }

  get path() {
    return this.#yargs.path;
  }
}
