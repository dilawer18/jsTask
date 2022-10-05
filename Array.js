
 

// let studentsDetails = [{id:1,name:'jameel',rollNo:123},{id:2,name:'Dilawer',rollNo:132}]
//  function addNewStudent(std){
//     for (let i = 0; i < studentsDetails.length; i++) {
//         if ( studentsDetails[i].rollNo == std.rollNo ) {
//             return ' this student already exists'
//         }else{
//             return [...studentsDetails, std]  //spread operator
          
//         } 
//     }

//     return studentsDetails 
// }

// function deleteStudent(stu){
//     for (let i = 0; i < studentsDetails.length; i++) {
//         if ( studentsDetails[i].rollNo == std.rollNo ) {
//             return '  student removed'
//         }else{
//            // return [...studentsDetails, stu]  //spread operator
//             return ' this student not exists'
          
//         } 
//     }

//     return studentsDetails 
// }




// let key=1

// switch (key==1) {
//     case 1:
//         let resultArr = addNewStudent({id:7,name:'Ali',rollNo:1233})

//          console.log(resultArr,"Student Added Sucessfully")
//         break;
//     //   case 2:
//     //     let resultArry = deleteStudent({id:7,name:'Ali',rollNo:1233})

//     //      console.log(resultArry,"Student Added Sucessfully")
//     default:

//         break;
// }
let addNewStudent = (std) => {
let studentsDetails = [{id:1,name:'jameel',rollNo:123} , {id:2,name:'Dilawer',rollNo:132},{id:3,name:'Dilawer',rollNo:145}]
    // console.log( studentsDetails.length , 'length')
        for (let i = 0; i <= studentsDetails.length; i++) {
            // console.log(studentsDetails[i] ,"imhere")
            if (studentsDetails[i].rollNo === std.rollNo && studentsDetails[i].rollNo != undefined  ) {
                // console.log( studentsDetails[i].rollNo, "inside loop")
                return ' this student already exists'
            }else{
                 [...studentsDetails, std]
              
            } 
        }
    
        return studentsDetails
     }

//  let resultArr = addNewStudent({id:7,name:'Ali',rollNo:145})
//  addNewStudent({id:7,name:'Ali',rollNo:145})
// addNewStudent()
 console.log(addNewStudent({id:7,name:'Ali',rollNo:146}),"Student Added Sucessfully")