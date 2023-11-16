function trackfroyoflavors() {
const userInput = prompt("Pick a flavor of froyo, vanilla, strawberry,coffee")

const flavorsArray = userInput.split(',');

const flavorCount ={
    vanilla: 3,
    strawberry: 1,
    coffee: 2
};

for (const flavor of flavorsArray)
{flavorCount[flavor] = (flavorCount[flavor]|| 0) + 1;}
console.table(flavorCount);
}
trackfroyoflavors();