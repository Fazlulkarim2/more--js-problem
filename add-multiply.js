/*
chiarwood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/
function woodCalculator(chaiarQuantituy, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWoodQuantity = chaiarQuantituy * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const firstOption = woodCalculator(1, 1, 1);
console.log(firstOption);