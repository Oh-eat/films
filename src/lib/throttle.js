export default function throttle(func, gap) {
  let ignoreEvent = false;
  return function (...params) {
    if (ignoreEvent) return;
    ignoreEvent = true;
    func(...params);
    setTimeout(() => (ignoreEvent = false), gap);
  };
}
