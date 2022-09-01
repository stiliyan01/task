fetch(endpoint)
  .then((response) => {
    // console.log(response.json());
    return response.json();
  })
  .then((data) => {
    cities.push(...data);
  });
let input = document.querySelector(".search");
input.addEventListener("input", getValue);
let li = document.querySelector("li");
function getValue() {
  // console.log(input.value);
  let arr = cities
    .filter(
      (place) =>
        place.city.includes(input.value) || place.state.includes(input.value)
    )
    .map((place) => `<li>${place.city}, ${place.state}</li>`);
  console.log(arr);

  showArr(arr);
}
function showArr(arr) {
  const html = !arr.length ? "" : arr.join("");
  document.querySelector("ul").innerHTML = html;
}
