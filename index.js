function getId(id) {
  return document.getElementById(id);
}

const color = getId("color")
const btnChange = getId("btn-change")
btnChange.addEventListener("click", change)

const colorRandom = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

function change () {
  let hexColor = "#"
  for (let i = 0; i < 6; i++) {
    hexColor += colorRandom[getRandomNum()]
  }
  color.style.color = "#000"
  color.textContent = "Background color: " + hexColor
  document.body.style.backgroundColor = hexColor
  console.log(color)
}

let getRandomNum = () => Math.floor(Math.random() * colorRandom.length)
