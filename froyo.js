const userInput = prompt("Pick a flavor of froyo, vanilla, strawberry,coffee")
const flavors = (vanilla, strawberry, coffee);
const flavorsArray = userInput.split(",");

const flavorCount ={
    vanilla: 3,
    strawberry: 1,
    coffee: 2
};

for (const flavors of flavorsArrary)
{flavorCount[flavors] = (flavorCount[flavors]|| 0) + 1;}

console.table(flavorCount);