// обновление лейбла у радио инпута
let labelRadio = document.querySelector(".form-label");
let inputRadio = document.querySelector(".form-range");

let setLabelInput = () => {
  labelRadio.textContent = "Длина пароля:" + inputRadio.value;
};
setInterval(setLabelInput, 300);

//
//Генерация случайных символов
let passwordInput = document.querySelector(".password");
let charactersNiz = "abcdefghijklmnopqrstuvwxyz0123456789";
let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let charactersSpec =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+./:;=>?@[]^`{|}~'";

let charactersSpecNiz =
  "abcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+./:;=>?@[]^`{|}~'";
function makeid(length, biblioteka) {
  let result = "";

  for (let i = 0; i < length; i++) {
    result += biblioteka.charAt(Math.floor(Math.random() * biblioteka.length));
  }
  return (passwordInput.value = result);
}
// обработчик события на кнопку
let but = document.querySelector("#click");
but.addEventListener("click", () => {
  if (
    document.getElementById("Zagl").checked &&
    document.getElementById("scales").checked == false
  ) {
    makeid(inputRadio.value, characters);
  }
  if (
    document.getElementById("Zagl").checked == false &&
    document.getElementById("scales").checked
  ) {
    makeid(inputRadio.value, charactersSpecNiz);
  }

  if (
    document.getElementById("Zagl").checked &&
    document.getElementById("scales").checked
  ) {
    makeid(inputRadio.value, charactersSpec);
  } else if (
    document.getElementById("Zagl").checked == false &&
    document.getElementById("scales").checked == false
  ) {
    makeid(inputRadio.value, charactersNiz);
  }
});
