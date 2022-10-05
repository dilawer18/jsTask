const numbers =[1,2,3,4,5,6,7,,3,4,3,2,1,1,5,5,6,8,9]
const newArray=numbers.filter((value,index,arr)=>{
    return arr.indexOf(value)===index;
})
console.log(newArray)