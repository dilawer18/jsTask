let array=[{id:1,name:'ali',rollNo:12},{id:2,name:'ali',rollNo:13}]
const addStu=(std)=>{
    for (let index = 0; index < array.length; index++) {
       
        if (array[index].rollNo===std.rollNo) {
            return 'student already exit'
        }
    }
 return [...array,std]//spread opreator
}
console.log(addStu({id:3,name:'gjg',rollNo:14}))

