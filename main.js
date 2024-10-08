let numbers=[112,13,14,24,23,45,56,6,7,88];


const printNumber=()=>{
    setTimeout(()=>{
        for(let i of numbers){
            console.log("print Number : "+i);
        }
    },1000)
}
const workdone=()=>{
    setTimeout(()=>{
        console.log("Work Done !!!");
    },2000)
}
const addNumber=(num,callback,callback2)=>{
   setTimeout(()=>{
    numbers.push(num);
    callback();
    callback2();
   },1500)
}
addNumber(100,printNumber,workdone);