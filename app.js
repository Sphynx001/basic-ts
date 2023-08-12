var input_1 = document.querySelector("#input1");
var input_2 = document.querySelector("#input2");
var btn_id = document.querySelector("button");
function add_inputs(n1, n2) {
  return n1 + n2;
}
btn_id === null || btn_id === void 0
  ? void 0
  : btn_id.addEventListener("click", function () {
      console.log(
        `the sum is ${add_inputs(
          parseInt(input_1.value),
          parseInt(input_2.value)
        )}`
      );
    });
