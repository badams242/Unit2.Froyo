const userInput = prompt(vanilla, vanilla, vanilla, strawberry, coffee, coffee)
const flavorsArray = userInput.split(['vanilla', 'strawberry', 'coffee'],) 
const flavorCount = {vanilla: 3, strawberry: 1, coffee: 2}
const flavorCount = flavorsArray.reduce(function (flavorCount, flavor) {
    if (flavorCount[flavor]) {
        flavorCount[flavor]++
    } else {
        flavorCount[flavor] = 1
    }
    return flavorCount
}, {})
console.table(flavorCount)  

