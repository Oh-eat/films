export default function checkEnoughWidth() {
  return (
    window.matchMedia("(orientation: landscape)").matches ||
    window.innerWidth >= 567
  );
}
