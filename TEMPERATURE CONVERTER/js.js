function convertTemperature() {
    const celsiusInput = document.getElementById('celsiusInput');
    const result = document.getElementById('result');
  
    if (celsiusInput.value === '') {
      result.textContent = 'Please enter a temperature in Celsius';
      return;
    }
  
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9 / 5) + 32;
  
    result.textContent = `${celsius} degrees Celsius is equal to ${fahrenheit.toFixed(2)} degrees Fahrenheit.`;
  }
  