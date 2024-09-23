const myObject = ({ color } = {
  height: 12,
  color: "blue",
  weight: 72,
});

console.log(myObject); //the whole object

console.log(color); //color from myObject

function sumNumbers({ firstNum, secondNum }) {
  return firstNum + secondNum;
}

const numbers = {
  firstNum: 12,
  secondNum: 8,
};

console.log(sumNumbers(numbers)); //20
