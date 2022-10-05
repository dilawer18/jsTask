const alphabet=['a','a','a','b','b','c','c','d','f','g','g','h'];
const count={};
alphabet.forEach(item=>{
    if(count[item]){
        count[item]++
    }
    else{
        count[item]=1;
    }
})
console.log(count)