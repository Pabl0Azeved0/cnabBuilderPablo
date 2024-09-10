const handleError = (error) => {
    const { code, path } = error;
  
    let errorMessage;
    switch (code) {
      case 'ENOENT':
        errorMessage = `File not found: ${path}`;
        break;
      case 'EISDIR':
        errorMessage = `The provided path is a directory, not a file: ${path}`;
        break;
      default:
        console.error('Unexpected Error:', error.stack || error);
        process.exit(1);
        return;
    }
  
    console.error('Error:', errorMessage);
    process.exit(1);
  };
  
  export default handleError;
  