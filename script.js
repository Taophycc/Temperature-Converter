'use strict';
const celsiusEl = document.getElementById('celsius');
const fahrenheitEl = document.getElementById('fahrenheit');
const kelvinEl = document.getElementById('kelvin');

celsiusEl.addEventListener('input', function () {
  let fahrenheit = (parseFloat(celsiusEl.value) * 9) / 5 + 32;
  fahrenheitEl.value = parseFloat(fahrenheit.toFixed(2));

  let kelvin = parseFloat(celsiusEl.value) + 273.15;
  kelvinEl.value = parseFloat(kelvin.toFixed(2));
});

fahrenheitEl.addEventListener('input', function () {
  let celsius = ((parseFloat(fahrenheitEl.value) - 32) * 5) / 9;
  celsiusEl.value = parseFloat(celsius.toFixed(2));

  let kelvin = ((parseFloat(fahrenheitEl.value) - 32) * 5) / 9 + 273.15;
  kelvinEl.value = parseFloat(kelvin.toFixed(2));
});

kelvinEl.addEventListener('input', function () {
  let fahrenheit = ((parseFloat(kelvinEl.value) - 273.15) * 9) / 5 + 32;
  fahrenheitEl.value = parseFloat(fahrenheit.toFixed(2));

  let celsius = parseFloat(kelvinEl.value) - 273.15;
  celsiusEl.value = parseFloat(celsius.toFixed(2));
});
