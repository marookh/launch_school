// Create a constant MINUTES_PER_DEGREE to 60
// Create a constant SECONDS_PER_MINUTE to 60
// Create a var: `isNegative` to Check whether `decimalDegrees`
// Create a var: `absDecimalD` to Extract the absolute version of
// `decimalDegrees`
// Create a var: `degrees` to the degrees in `absDecimalD` rounded off
// Create a var: `minutes` to `(absDecimalD - degrees) * MINUTES_PER_DEGREE`
///  floored off
// Create a var: `seconds` to `

function decimalToDMS(decimalDegrees) {
  // Determine the direction based on the sign of the input number
  const isNegative = decimalDegrees < 0;
  const absDecimalDegrees = Math.abs(decimalDegrees);

  // Extract degrees
  const degrees = Math.floor(absDecimalDegrees);

  // Calculate remaining minutes
  const minutes = Math.floor((absDecimalDegrees - degrees) * 60);

  // Calculate remaining seconds
  const seconds = Math.round(((absDecimalDegrees - degrees) * 60 - minutes) * 60);

  // Format the result
  const dms = `${degrees}° ${minutes}' ${seconds}"`;

  // Add sign for negative degrees
  return isNegative ? '-' + dms : dms;
}

// Example usage
const angle = -23.45678;
const dmsString = decimalToDMS(angle);
console.log(dmsString);  // Output: "-23° 27' 24""