//Bu JS dökümantasyonu Emrah KAHRAMAN tarafından kodlanmıştır.

//Counter
let count = document.querySelectorAll(".counter");
let arr = Array.from(count);

arr.map(function (item) {
  let startnumber = 0;

  function counterup() {
    startnumber++;
    item.innerHTML = startnumber;

    if (startnumber == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(function () {
    counterup();
  }, 70);
});
