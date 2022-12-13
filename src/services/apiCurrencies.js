const getCurrencies = async () => {
  const getApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await getApi.json();
  const result = Object.keys(data).filter((key) => key !== 'USDT');
  return result;
};

const exchangeRates = async () => {
  const getApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await getApi.json();
  return data;
};

export { getCurrencies, exchangeRates };
