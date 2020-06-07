const descOption = document.querySelector(".description");
const rateOption = document.querySelector(".rate");
const codeOption = document.querySelector(".code");
const select = document.querySelector("#select");

!(async function () {
  await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
      dataSet(select.options[select.selectedIndex].value);
      select.addEventListener("change", (evt) => {
        let event = evt.target.value;
        dataSet(event);
      });

      function dataSet(code) {
        descOption.textContent = data.bpi[code].description;
        rateOption.textContent = data.bpi[code].rate;
        codeOption.textContent = data.bpi[code].code;
      }
    })
    .catch((error) => console.error(error));
})();
