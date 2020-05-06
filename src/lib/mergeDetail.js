export default function mergeDetail(detailKR, detailEN) {
  const merged = {};
  for (let key in detailKR) {
    let [valueKR, valueEN] = [detailKR[key], detailEN[key]];
    if (
      valueKR === "" ||
      valueKR === null ||
      (Array.isArray(valueKR) && valueKR.length === 0) ||
      typeof valueKR === "object" ||
      Object.values(valueKR).length === 0
    ) {
      merged[key] = valueEN;
    } else {
      merged[key] = valueKR;
    }
  }
  return merged;
}
