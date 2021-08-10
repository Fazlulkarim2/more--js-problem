function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }

    else if (miles <= 20) {
        const firstDenseAnimal = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimal = restMiles * animalDensitySecond10Miles;
        const totalAnimals = firstDenseAnimal + secondDenseAnimal;
        return totalAnimals;
    }
    else {
        const firstDenseAnimal = 10 * animalDensityFirst10Miles;
        const secondDenseAnimal = 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const restDenseAnimals = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseAnimal + secondDenseAnimal + restDenseAnimals;
        return totalAnimals;
    }
}
const animals = animalCount(25);
console.log(animals);