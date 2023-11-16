const userInput = prompt('Please enter your favorite froyo flavor: vanilla, strawberry, or coffee')
const flavorsArray = userInput.split(['vanilla', 'strawberry', 'coffee'])
const flavorCount= flavorsArray.length
for ( const flavor of flavorsArray) {
    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
}
console.table(flavorCount);

