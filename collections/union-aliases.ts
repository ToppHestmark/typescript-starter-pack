type Combinable = number | string; // stored a union string
type ConversionDescriptor = "as-number" | "as-text"; // ~ Literal~ Any other string values will not be allowed

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = `${input1.toString()}, ${input2.toString()}!`;
  }

  return result;

  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
};

const combinedAges = combine(31, 26, "as-number");
console.log("Combine ages: ", combinedAges);

const combinedStringAges = combine("24", "26", "as-number");
console.log("Combine string-ages: ", combinedStringAges);

const combineNames = combine("Top", "Anna", "as-text");
console.log("Combined names: ", combineNames);
