let personName = "saba";
// Lowercase
console.log("lowercase:", personName.toLowerCase()); // Output: "saba"
// Uppercase
console.log("uppercase:", personName.toUpperCase()); // Output: "SABA"
// Title case
console.log("titlecase:", personName.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
})); // Output: "Saba"
export {};
