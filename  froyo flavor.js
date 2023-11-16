const userInput = prompt('Please enter your favorite froyo flavor: vanilla, strawberry, or coffee')
const flavorsArray = userInput.split(['vanilla', 'strawberry', 'coffee'])
const flavorCount = flavorsArray.reduce((flavorCount, flavor) => {
    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1
    return flavorCount
}, {})
console.table(flavorCount)

