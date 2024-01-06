var url =
  "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_oHV1Wr07rBlMyw3HZHb6BRSyYDAYabeYXITVirUm";

var exchangeRate = {};

// initializing the request
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    exchangeRate = data.data;
    console.log(exchangeRate);

    // Move the code that relies on exchangeRate inside this block
    let countryCodes = Object.keys(exchangeRate);
    console.log(countryCodes);

    var originCurrency = document.getElementById("originCurrency");
    var targetCurrency = document.getElementById("targetCurrency");

    countryCodes.forEach(function (code) {
      var option = document.createElement("option");
      option.value = code;
      option.text = code;
      originCurrency.appendChild(option);
    });

    countryCodes.forEach(function (code) {
      var option = document.createElement("option");
      option.value = code;
      option.text = code;
      targetCurrency.appendChild(option);
    });

    // Add event listener to amount input and if the value changes, call the convert function
    var amountInput = document.getElementById("originAmount");
    amountInput.addEventListener("input", convert);
  });

// Function to convert the amount
function convert() {
  var amount = document.getElementById("originAmount").value;
  var originCurrency = document.getElementById("originCurrency").value;
  var targetCurrency = document.getElementById("targetCurrency").value;

  var targetAmount =
    (amount * exchangeRate[targetCurrency]) / exchangeRate[originCurrency];

  document.getElementById("targetAmount").value = targetAmount.toFixed(2);
}
