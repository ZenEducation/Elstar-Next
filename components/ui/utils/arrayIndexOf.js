export default function arrayIndexOf(one, ofTarget) {
  try {
    if (Array.isArray(ofTarget)) {
      return ofTarget.indexOf(one) >= 0;
    }
    return one === ofTarget;
  } catch (err) {
    console.log(err);
  }
}
