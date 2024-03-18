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

console.log(minNum(1, 2, 4));//1

const minNum2 = (...nums) => {
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
};
const minNum3 = (...nums) => {
    return nums.reduce((a, b) => a < b ? a : b)
};
console.log(minElem(1, 2, 4));//1

console.log(minNum2(10, 20, 4));
//11.Write a function max that is generalized for any amount of arguments

const max = (...nums) => Math.max(...nums);
console.log(max(1, 2, 4));

const max1 = (...nums) => {
    let maxElem = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maxElem) {
            maxElem = nums[i]
        }
    }
    return maxElem
};
console.log(max1(1, 2, 4));
const maxElem = (...nums) => {
    return nums.reduce((a, b) => a > b ? a : b)
};
console.log(maxElem(1, 2, 5));

//12Write a function addRecurse that is the generalized add function but uses recursion

const addRecurse = (...nums) => {
    let a = nums[0];
    for (let i = 1; i < nums.length; i++) {
        a += nums[i]
    }
    return a
};
console.log(addRecurse(1, 2, 4));

const addRecurse2 = (...nums) => {
    return nums.reduce((a, b) => a + b, 0)
};
console.log(addRecurse2(1, 2, 4));

const addRecurse3 = (...nums) => {
    let sum = 0;
    for (const num of nums) {
        sum += num
    }
    return sum
}
addRecurse3(1, 2, 4)

//13Write a function not that takes a function and returns the negation of its result

const isOdd = (x) => x % 2 === 1;
const not = (func) => {
    return (...args) => !func(...args);
};

const isEven = not(isOdd);

console.log(isEven(1)); // Output: false
console.log(isEven(2)); // Output: true
//14 Write a function acc that takes a function and an initial value and returns a function that 
//runs the initial function on each argument, accumulating the result

const acc = (a, ...abd) => {
    return abd.reduce((prev, item) => prev + item, a)


}
acc((1, 2, 3), 1)