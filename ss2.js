

// let arr1 =[1,2,4,5,6] 
// let arr2 =[1,6,8,9,0]
// let result =[]

// function check(same){
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1.length; i++) {
        
//         }
//     }
// }


const arr=[1,54,6,7]
let result2=[]
result2=arr.map(num => num+5)
console.log(result2);

let m=[1,2,4,5,6,7]
let n=[3,5,675,8,96]
let check = [1,8,10,96,7]
function eliminate(){
    for (let i = 0; i< m.length; i++){
        for (let j=0 ; j < check.length; j++)
        if (m[i] == check[j]) {
            m.splice(i,1)
        }
        else {
            if (n[i]==check[j]){
                n.splice(i,1)
            }
        }

    }
    console.log(n);
    console.log(m);
}

eliminate()