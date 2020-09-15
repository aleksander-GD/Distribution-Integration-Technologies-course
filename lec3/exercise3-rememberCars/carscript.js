  // carArray will hold our data about cars
  let carArray = [];

  // TO DO: save data in the local storage
  function saveData() {
      localStorage.setItem("carNames", JSON.stringify(carArray));
  };

  /* TO DO: load car data from the local storage: 
     - if there are data to read: load them into the carArray array
     - if not, leave the carArray empty */
  function loadData() {
      //console.log(localStorage.getItem("carNames"));
      if (localStorage.getItem("carNames") !== null) {
          carArray = JSON.parse(localStorage.getItem("carNames"));
      }
  };

  function refreshList() {
      let list = document.getElementById("listOfCars");
      let text = "";
      for (let index in carArray) {
          text += carArray[index].producer + " | " + carArray[index].name + "<br/>";
      }
      list.innerHTML = text;
  };

  window.onload = () => {
      let addBtn = document.getElementById("addButton");
      addBtn.addEventListener("click", () => {
          let theCarProducer = document.getElementById("carProducer");
          let theCarName = document.getElementById("carName");
          carArray.push({
              producer: theCarProducer.value,
              name: theCarName.value
          });
          theCarName.value = "";
          theCarProducer.value = "";
          console.log("button clicked -> car added");
          saveData();
          refreshList();
      });
      loadData();
      refreshList();
      let resetButton = document.getElementById("resetButton");
      resetButton.addEventListener("click", () => {
          localStorage.clear();
          location.reload();
      });

  };