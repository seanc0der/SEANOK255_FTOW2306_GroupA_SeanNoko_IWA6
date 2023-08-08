const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Only change below this line
const primaryValid = Number.isNaN(Number(primaryPhone)) ? false : true;
const secondaryValid = Number.isNaN(Number(secondaryPhone)) ? false : true;

console.log("Primary phone is valid numerical string:", primaryValid);
console.log("Secondary phone is valid numerical string:", secondaryValid);
