let arr1 = [8, 11, 13, 15, 2];

function multiply(arr) {

    let newArray = []

    for (index = 0; index < arr.length; index++) {
        if (index != arr.length - 1) {
            let newelement = arr[index] * arr[index + 1]
            newArray.push(newelement)
        }

        else {
            newelement = arr[0] * arr[index]
            newArray.push(newelement)
        }

    }
    console.log(newArray)
}

multiply(arr1)