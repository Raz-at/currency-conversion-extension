const amount = document.getElementById('amount');
const currency1 = document.getElementById('currency1');
const currency2 = document.getElementById('currency2');
const convert = document.getElementById('convert');
const resultElement = document.getElementById('result');

const api_key = "iLl82npaGwBPRlGUwP3nQg==CCWjrr5AUaQ85kmD";
const api_url = "https://api.api-ninjas.com/v1/convertcurrency?want=";

convert.addEventListener('click', () => {
  const amountTotal = amount.value;
  const currencyTotal_1 = currency1.value;
  const currencyTotal_2 = currency2.value;
  const url = `${api_url}${currencyTotal_2}&have=${currencyTotal_1}&amount=${amountTotal}`;
  console.log('url', url);

  fetch(url, {
    method: 'GET',
    headers: {
      'X-API-KEY': api_key
    },
  })
    .then(response => response.json())
    .then(json => {
      const result = json.new_amount;
      console.log(result);
      resultElement.innerHTML = `${amountTotal} ${currencyTotal_1} = ${result.toFixed(2)} ${currencyTotal_2}`;
    })
    .catch(error => {
      console.error('Request Failed:', error);
      resultElement.innerHTML = "An error occurred. Please try again later.";
    });
});
