// let charactersr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// let password="";
// // MessagePort.random(password);
// // console.log(password);

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result =result +" "+ characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString( 6));