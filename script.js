// обновление лейбла у радио инпута
let labelRadio = document.querySelector(".form-label");
let inputRadio = document.querySelector(".form-range");

let setLabelInput = () => {
  labelRadio.textContent = inputRadio.value;
};
setInterval(setLabelInput, 300);

//
//Генерация случайных символов
let passwordInput = document.querySelector(".password");

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return (passwordInput.value = result);
}
// обработчик события на кнопку
let but = document.querySelector("#click");
but.addEventListener("click", () => {
  makeid(inputRadio.value);
});
