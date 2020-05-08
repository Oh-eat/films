export function isEmpty(target) {
  return (
    target === 0 ||
    target === "0" ||
    target === null ||
    target === "" ||
    (Array.isArray(target) && target.length === 0)
  );
}

export function isEmptyArray(target) {
  return Array.isArray(target) && target.length === 0;
}
