export default function getVmin(value = 1) {
  const { innerWidth: width, innerHeight: height } = window;
  return (Math.min(width, height) * value) / 100;
}
