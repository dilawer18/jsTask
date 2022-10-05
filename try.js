// let array=[{id:1,name:'ali',rollNo:12},{id:2,name:'ali',rollNo:13}]
// const addStu=(std)=>{
//     for (let index = 0; index < array.length; index++) {
       
//         if (array[index].rollNo===std.rollNo) {
//             return 'student already exit'
//         }
//     }
//  return [...array,std]//spread opreator
// }
// console.log(addStu({id:3,name:'gjg',rollNo:14}))

/// 

// new aded with 
// let array=[{id:1,name:'ali',rollNo:12},{id:2,name:'ali',rollNo:13}]
// const addStu=(std)=>{
//     for (let index = 0; index < array.length; index++) {
       
//         if (array[index].rollNo===std.rollNo) {
//             return 'student already exit'
//         }
//     }
//   array.push(std)
//   return 
// }

// addStu({id:3,name:'gjg',rollNo:14})
// console.log(array, 'student added successfully')


// delete fn

let array=[{id:1,name:'ali',rollNo:12},{id:2,name:'ali',rollNo:13}, {id:3,name:'ali',rollNo:14},{id:4,name:'ali',rollNo:15}]
let globalMsg
const deleteStu=(std)=>{
    let selectedStdInx
    for (let index = 0; index < array.length; index++) {
        if (array[index].rollNo!==std.rollNo) {
            globalMsg =  'this student deesnot exist'
         }
         
        if (array[index].rollNo===std.rollNo) {
            selectedStdInx = index
        }
       
    }
    array.splice(selectedStdInx, 1)
    return
}
// console.log(array, 'befor delete')

deleteStu({id:3,name:'ali',rollNo:13})
console.log(globalMsg)
console.log(array, "after")