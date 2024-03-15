// 1.Write a function identity that takes an argument and returns that argument

const identity = (a) => a;
//2.Write a binary function addb that takes two numbers and returns their sum

const addb = (a, b) => a + b;

//3. Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => {
    return nums.reduce((a, b) => a - b)
};

//4. Write a binary function mulb that takes two numbers and returns their product

const mult = (a, b) => a * b;

// 5. Write a binary function minb that takes two numbers and returns the smaller one

const minb = (a, b) => {
    return a > b ? b : a
};
const minb2 = (a, b) => {
    if (a > b) {
        return b
    } else {
        return a
    }
};

const minb3 = (a, b) => {
    return Math.min(a, b)
}

//6.Write a binary function maxb that takes two numbers and returns the larger one

const mavb = (a, b) => {
    return a > b ? a : b
};

//7.Write a function add that is generalized for any amount of arguments

const add = (...nums) => {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(add(1, 2, 4));



const add2 = (...nums) => {
    let sum = 0;
    for (let i = 0; i <= nums.length - 1; i++) {
        sum += nums[i]

    }
    return sum
};
console.log(add2(1, 2, 4));

//8.Write a function sub that is generalized for any amount of arguments

const submin = (...nums) => {
    return nums.reduce((a, b) => a - b)
};
console.log(submin(1, 2, 4));

// 9.Write a function mul that is generalized for any amount of arguments

const mults = (...nums) => {
    return nums.reduce((a, b) => a * b)
};
console.log(1, 2, 4);

//10.Write a function min that is generalized for any amount of arguments

const minNum = (...nums) => {
    return Math.min(...nums)
};

console.log(minNum(1, 2, 4));

const minNum2 = (...nums) => {
    let num = nums[0];
    for (let i = 1; i <= nums.length - 1; i++) {
        if (nums[i] >= num) {
            return num
        } else {
            return num = nums[i]
        }
    }
};

console.log(minNum2(1, 2, 4));