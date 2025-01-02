function readFile(file) {
    try {
      console.log("Reading file: " + file);
      // Simulate a file read operation
      if (file === "") {
        throw new Error("File path cannot be empty");
      }
    } catch (error) {
      console.error("Error: " + error.message);
    } finally {
      console.log("Finished file operation.");
    }
  }
  
readFile("data.txt");   // File operation
readFile("");           // Error scenario
  