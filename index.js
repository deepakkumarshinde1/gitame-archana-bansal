function scroll(callback, time) {
  let throttling;
  return function () {
    if (!throttling) {
      callback();
      throttling = true;
      setTimeout(() => (throttling = false), time);
    }
  };
}

window.addEventListener(
  "scroll",
  scroll(function () {
    console.log("scroll");
  }, 1000)
);
