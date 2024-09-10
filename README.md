# CNAB File Processor

This project processes CNAB files, allowing you to search for specific companies or segments and optionally export the results to a JSON file.

## Installation

Make sure you have Node.js installed. Clone the repository and install the dependencies:

```
git clone git@github.com:Pabl0Azeved0/cnabBuilderPablo.git
cd cnabBuilderPablo
npm install
```

## Usage

You can run the project using the following command:

```
npm start -- -s <search-type> -v <search-value> [-p <path-to-file>] [-e]
```

### Options

- `-s, --search <search-type>`: Defines the type of search. Possible values are `empresa` (company) and `segmento` (segment).
- `-v, --value <search-value>`: The value to search for in the file.
- `-p, --path <path-to-file>`: The path to the CNAB file. If not specified, it defaults to `cnabExample.rem`.
- `-e, --exportJson`: Export the search results to a JSON file named `searchResult.json`.

### Examples

Search for a company named "DO BRASIL" and export results to JSON:

```
npm start -- -s empresa -v "DO BRASIL" -e
```

Search for a segment value "70000172" in the default file:

```
npm start -- -s segmento -v 70000172
```

Search for a company named "MARIO" in a specified file:

```
npm start -- -s empresa -v "MARIO" -p /path/to/your/cnabExample.rem -e
```

## Project Structure

- `configs/`: Contains configuration files.
- `cnab/`: Contains CNAB file handling logic.
- `utils/`: Contains utility functions and classes.
- `cnabRows.js`: The main entry point of the application.

## Error Handling

Errors are handled and logged to the console. If the file is not found or if there are issues with the file format, appropriate error messages will be displayed.

