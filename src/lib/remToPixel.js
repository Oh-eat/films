export default function remToPixel(value = 1) {
  return (
    Number(
      window
        .getComputedStyle(document.body)
        .getPropertyValue("font-size")
        .match(/\d+/)[0]
    ) * value
  );
}
