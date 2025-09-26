const isDiv = (...args) => {
    console.log(args);
    let arr = [];
    args.forEach((ele) => {
        if (ele %2 === 0) {
            arr.push(ele);
        }
    });
    return arr;
}
console.log(isDiv(1,2,3,4,5,6,7,8,9,10));
console.log(divisiblebyTwo);