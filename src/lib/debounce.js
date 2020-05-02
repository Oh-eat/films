export default function debounce(func, delay) {
  let timer;
  return function (...params) {
    if (timer) return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(params);
      timer = null;
    }, delay);
  };
}
