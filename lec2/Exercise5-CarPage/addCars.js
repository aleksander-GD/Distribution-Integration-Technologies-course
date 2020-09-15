/* - Create functions to perform the various operations
             needed in this page. 
           - Connect these functions with your HTML elements below, to
             have the browser call your functions when user-generated events happen. */
// it will hold the data about cars

let carArray = [
    { producer: "hyndai", model: "i20" },
    { producer: "hyndai", model: "i10" },
    { producer: "renault", model: "twingo" },
    { producer: "citroen", model: "c3" }
];

for (let variable of carArray) {
    document.getElementById("listOfCars").innerHTML += "<div class='theCar'><span> " + variable.producer + " </span>" +
        "<span> " + variable.model + " </span></div>";

}

function addCar() {
    document.getElementById("listOfCars").innerHTML = "";
    var producer = document.getElementById("producer").value;
    var model = document.getElementById("model").value;
    carArray.push({
        "producer": producer.toLowerCase(),
        "model": model.toLowerCase()
    });
    for (let variable of carArray) {

        document.getElementById("listOfCars").innerHTML += "<div class='theCar'><span> " + variable.producer + " </span>" +
            "<span> " + variable.model + " </span></div>";

        console.log(carArray);
    }
}

function countCar() {
    document.getElementById("carStatistics").innerHTML = "";
    document.getElementById("carStatistics").innerHTML = carArray.length;
}

function countCarProducer() {
    document.getElementById("carStatistics2").innerHTML += '';
    let mostFrequentCount = 1;
    let count = 0;
    let item = null;

    for (let i = 0; i < carArray.length; i++) {
        console.log('i' + i);
        for (let j = i; j < carArray.length; j++) {
            console.log('j' + j);
            if (carArray[i].producer == carArray[j].producer) {
                count++;
                if (count > mostFrequentCount) {
                    mostFrequentCount = count;
                    item = carArray[i];
                }
            }
        }
        count = 0;
    }


    document.getElementById("carStatistics2").innerHTML =
        'Producer: ' + item.producer + '<br>' +
        ' Count: ' + mostFrequentCount;
}

document.addEventListener("DOMContentLoaded", function() {
    countCar();
    countCarProducer();
});