const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btn = document.querySelector("button");

function add(n1, n2) {
  return n1 + n2;
}

btn.addEventListener("click", () => {
  console.log(add(input1.value, input2.value));
});
