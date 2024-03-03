console.log('Array methods chaining...');

const cities = [
    {
        name: "Cluj-Napoca",
        region: "Transylvania",
        rating: 10
    },
    {
        name: "Brasov",
        region: "Transylvania",
        rating: 9
    },
    {
        name: "Bucuresti",
        region: "Valachia",
        rating: 9
    },
    {
        name: "Iasi",
        region: "Moldavia",
        rating: 9
    },
    {
        name: "Baia-Mare",
        region: "Transylvania",
        rating: 8
    },
    {
        name: "Timisoara",
        region: "Transylvania",
        rating: 9
    },
]


cities
    .filter(city => city.region == 'Transylvania')
    .sort((cityA, cityB) => {
        if (cityA.name < cityB.name) {
            return -1;
        }

        if (cityA.name > cityB.name) {
            return 1;
        }
        
        return 0;
    })
    .forEach(city => console.log(city.name));
