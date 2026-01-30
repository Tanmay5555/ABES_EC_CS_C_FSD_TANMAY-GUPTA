const myPromise = new Promise((resolve, reject) => {
    let marks = 75;
    if(marks>33){
        resolve("You passed the exam");
    }else{
        reject("You failed the exam");
    }
});
myPromise.then((message) => {
    console.log(message);
}).catch((message) => {




































