function century(year) {
    // Finish this :)
    return ceil(year/100);
  }
  
  function ceil(number) {
    return parseInt(number) == number ? number : parseInt(number) + 1;
  }