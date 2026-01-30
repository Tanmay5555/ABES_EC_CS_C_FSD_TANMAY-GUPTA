const myPromise = new Promise((resolve, reject) => {
    let marks = 75;
    if(marks>33){
        resolve("You passed the exam");
    }else{
        reject("You failed the exam");
    }
});
const f1= async () =>{
    try {
 const messages= await myPromise;
    console.log(messages);
}
    catch (message) {
        console.log(message);
    }
}
//f1();    
const getData= async () =>{
    try{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}
fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))
// myPromise.then((message) => {
//     console.log(message);
// }).catch((message) => {




































