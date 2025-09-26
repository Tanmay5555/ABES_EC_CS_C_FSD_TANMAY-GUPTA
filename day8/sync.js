console.log('start');
// const syncFunc = () => {
//     for (let i = 0; i < 900000; i++) {
//         console.log(i);
//     }
//     console.log('end');
// }

const waitForSomeTime = (ms) => {
    const start = Date.now();
    while (Date.now() - start < ms) {
        
    }
    console.log(start);
}

const syncUsingTimer = () => {
    waitForSomeTime(4000);
    console.log("wait has been completed.");
}

console.log(syncFun());
console.log("end");