class StringCalculator {

    // Main method to add the numbers
  
    add(numbers) {
  
      // If input is an empty string, return 0
  
      if (!numbers) return 0;
  
  
      // Default delimiter is comma or newline
  
      let delimiter = /[,\n]/;
  
  
      // Check if the string starts with a custom delimiter declaration
  
      if (numbers.startsWith('//')) {
  
        const delimiterInfo = this._extractDelimiter(numbers);
  
        delimiter = delimiterInfo.delimiter;
  
        numbers = delimiterInfo.numbers;
  
      }
  
  
      // Split the string of numbers using the delimiter(s)
  
      const numberList = this._splitNumbers(numbers, delimiter);
  
  
      // Parse numbers and check for negative numbers
  
      const parsedNumbers = this._parseNumbers(numberList);
  
  
      // Throw error if any negative numbers are found
  
      this._checkForNegatives(parsedNumbers);
  
  
      // Return the sum of all numbers
  
      return parsedNumbers.reduce((sum, num) => sum + num, 0);
  
    }
  
  
    // Helper method to extract the custom delimiter and the numbers
  
    _extractDelimiter(inputString) {
  
      const delimiterMatch = /^\/\/(.)\n/.exec(inputString);
  
      if (delimiterMatch) {
  
        const delimiter = new RegExp(delimiterMatch[1], 'g');  // Create regex for custom delimiter
  
        const numbers = inputString.slice(delimiterMatch[0].length);  // Remaining part after the delimiter line
  
        return { delimiter, numbers };
  
      }
  
      throw new Error('Invalid delimiter format');
  
    }
  
  
    // Helper method to split numbers using the delimiter(s)
  
    _splitNumbers(numbers, delimiter) {
  
      return numbers.split(delimiter);
  
    }
  
  
    // Helper method to convert strings to numbers
  
    _parseNumbers(numberList) {
  
      return numberList.map(num => parseInt(num, 10));
  
    }
  
  
    // Helper method to check for negative numbers and throw an exception if found
  
    _checkForNegatives(parsedNumbers) {
  
      const negatives = parsedNumbers.filter(num => num < 0);
  
      if (negatives.length > 0) {
  
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  
      }
  
    }
  
  }
  
  module.exports = StringCalculator;