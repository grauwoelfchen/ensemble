(() => {
  const content = document.querySelector('#content');
  const speed = 64;

  let current = 0;
  let intervalId;

  window.addEventListener('load', () => {
    content.scrollTo(0, 0);
    if (!intervalId) {
      intervalId = setInterval(scroll, speed);
    }
  }, false);

  function scroll() {
    current = content.scrollTop;
    content.scrollTo(0, current + 1);

    if (current + content.clientHeight >= content.scrollHeight) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
})();
