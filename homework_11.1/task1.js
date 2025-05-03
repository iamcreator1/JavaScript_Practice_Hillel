function showTextWithDelay(text, delay) {
    setTimeout(function () {
      console.log(text);
    }, delay);
  }
  

  showTextWithDelay("Hello, here is the delay!", 2000); 
  