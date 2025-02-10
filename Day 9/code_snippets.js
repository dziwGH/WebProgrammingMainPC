function even(num){
    return num % 2 == 0; 
}

function odd(num) {
    return Math.abs(num % 2) == 1; // Again modulus for the remainder, using absolute to get 1 left as otherwise it will be a decimal.
}



console.log(odd(2));

function reverseString(string) {
    return string.split("").reverse().join("");
}

let str = "Dziwanowski";
let reversed = reverseString(str);
console.log(reversed);

let button = document.getElementById("changeColor");
let paragraph = document.getElementById("example");
console.log(button);
console.log(paragraph);
button.addEventListener("click", function () {
    paragraph.style.backgroundColor = "red";
});

button.addEventListener("dblclick", function () {
    paragraph.style.backgroundColor = "blue";
});

let numbers = [1, 3, 123344,0, 12345]

function maxVal(maxNum) {
    let maximumNum = maxNum[0];
    for (let i = 0; i < maxNum.length; i++) {
        if (maxNum[i] > maximumNum) {
            maximumNum = maxNum[i]
        }
    }
    return maximumNum;
}

console.log(maxVal(numbers));

function vowelCount (strvwl) {
    const vowels = "AEIOUaeiou";
    let count = 0;

    for (let i=0; i < strvwl.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

let myString = "My name is Andrew and I am from Bentonville AR.";
console.log(`The string has "${vowelCount(myString)}" vowels`);