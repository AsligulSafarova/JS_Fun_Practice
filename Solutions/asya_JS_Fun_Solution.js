// 1.Write a function identity that takes an argument and returns that argument

const identity = (a) => a;
//2.Write a binary function addb that takes two numbers and returns their sum

const addb = (a, b) => a + b;

//3. Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => {
    return nums.reduce((a, b) => a - b)


};

console.log(sub(1, 2, 4));