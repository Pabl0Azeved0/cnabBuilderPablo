# CNAB File Processor

This project processes CNAB files, allowing you to search for specific companies or segments and optionally export the results to a JSON file.

## Installation

Make sure you have Node.js installed. Clone the repository and install the dependencies:

<code>
git clone <repository-url>
cd <repository-directory>
npm install
</code>

## Usage

You can run the project using the following command:

<code>
npm start -- -s <search-type> -v <search-value> [-p <path-to-file>] [-e]
</code>

### Options

- `-s, --search <search-type>`: Defines the type of search. Possible values are `empresa` (company) and `segmento` (segment).
- `-v, --value <search-value>`: The value to search for in the file.
- `-p, --path <path-to-file>`: The path to the CNAB file. If not specified, it defaults to `cnabExample.rem`.
- `-e, --exportJson`: Export the search results to a JSON file named `searchResult.json`.

### Examples

Search for a company named "DO BRASIL" and export results to JSON:

<code>
npm start -- -s empresa -v "DO BRASIL" -e
</code>

Search for a segment value "70000172" in the default file:

<code>
npm start -- -s segmento -v 70000172
</code>

Search for a company named "MARIO" in a specified file:

<code>
npm start -- -s empresa -v "MARIO" -p /path/to/your/cnabExample.rem -e
</code>

## Project Structure

- `configs/`: Contains configuration files.
- `cnab/`: Contains CNAB file handling logic.
- `utils/`: Contains utility functions and classes.
- `index.js`: The main entry point of the application.

## Error Handling

Errors are handled and logged to the console. If the file is not found or if there are issues with the file format, appropriate error messages will be displayed.

## Contributing

Feel free to open issues or submit pull requests if you have any improvements or fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
