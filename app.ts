const input_1 = document.querySelector("#input1") as HTMLInputElement;
const input_2 = document.querySelector("#input2") as HTMLInputElement;
const btn_id = document.querySelector("button");

function add_inputs(n1: number, n2: number) {
  return n1 + n2;
}

btn_id?.addEventListener("click", () => {
  console.log(add_inputs(parseInt(input_1.value), parseInt(input_2.value)));
});
