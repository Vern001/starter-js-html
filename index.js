alert('Welcome to the store!');
// let user_stat=true;
// let pass= 'hamo!@360';
// let username= 'new atlantics';
// let dihnamics_grade= 'B';
// let hasnumber= /\d/;

// if(!user_stat){
//     console.log('user unavailable')
// }else{
//     console.log('user logged in')
// }
// if(pass==='hamo!@360'){


//     if ((pass.length>=10&&pass.includes('$'))||(pass.includes('@')&&hasnumber.test(`${pass}`))){

//         console.log('This is a good passsword!')

//     }else if((pass.length>=4&&pass.length<=7)||(hasnumber.test(`${pass}`))){
//         console.log('This is a decent password!')

//     }else{
//         console.log('This is a bad password!')
//     }

// }



// const biggernum=function(num1,num2){
//     if(num1>num2){
//         return num1
//     }else{
//         return num2
//     }

// };


// const maxsquare=function(num1,num2){
    
//     let x=biggernum(num1,num2);
//     x=x**2
//     return x;
// };

// let num1=5
// let num2=10

// let x = maxsquare(num1, num2);
// console.log(x)


x=14

const iseven= function(x){

    if(x%2==0){
        return true;

    }else{
        return false;
    
    }


};

const evensqared=function(x){

    if (iseven(x)==true){
       
        return x*x;


    }else{
        return -1;
    }


};
let f= evensqared(x)
console.log(f);