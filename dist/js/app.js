$(function () {
  const appHeader = document.getElementById("appHeader");

  console.log(appHeader);

  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
      appHeader.classList.add("has-shadow");
    } else {
      appHeader.classList.remove("has-shadow");
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  });
});
