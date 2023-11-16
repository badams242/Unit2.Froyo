const userInput = prompt(vanilla, vanilla, vanilla, strawberry, coffee, coffee)
const flavorsArray = userInput.split(['vanilla', 'strawberry', 'coffee'],)
const flavorCount = { vanilla: 3, strawberry: 1, coffee: 2 }
for (const flavor of flavorsArray) { flavorCount[flavor] = (flavorCount[flavor] || 0) + 1 }
const flavorCount = flavorsArray.reduce((flavorCount, flavor) => {
    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1
    return flavorCount
}, {})
console.table(flavorCount)

