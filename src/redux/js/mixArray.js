export default function mixArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (arr.length - 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
