const bike = [
{
    name: "bike1",
    weight: 15,
},
{
    name: "bike2",
    weight: 18,
},
{
    name: "bike3",
    weight: 18,
},

{
    name: "bike4",
    weight: 13,
},

{
    name: "bike5",
    weight: 10,
},
]


const minBike = document.getElementById("minBike");
let weightMin = bike[0].weight;
let indexWeightMin = 0;

    bike.forEach((element, index) => {
        const {weight} = element;
        console.log(weight, weightMin);

        if (weight < weightMin) {
            weightMin = weight;
            indexWeightMin = index;
            console.log(indexWeightMin);
        }

    })

    minBike.innerHTML = `${bike[indexWeightMin].name}`
    console.log(bike[indexWeightMin].name);