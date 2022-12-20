let first = [4, 3, 2, 1];
let second =[];
let third = [];
let arr = [first, second, third]

// первое решение похоже на то как в интернете))))

function transfer (n, i, k){
    if (n == 1){
        arr[k].push(arr[i].pop());
    }
    else{
        let temporal = 3 - i - k;
        transfer(n-1,i,temporal);
        arr[k].push(arr[i].pop());
        transfer(n-1,temporal, k);
    }

}

// второе решение уже меньше похоже на то, что в интернете)))

function transfer2(n, from, to, tmp){
    if (n == 1){
        to.push(from.pop());
    }
    else{
        transfer2(n-1,from,tmp, to);
        to.push(from.pop());
        transfer2(n-1,tmp, to, from);
    }

}
//

 function transferfor()
    for (let i = 0; i < array.length; i++) {
        second.push(first.pop());
        third.push(first.pop());
        third.push(second.pop());

        second.push(first.pop());
        first.push(third.pop());
        
        second.push(third.pop());
        second.push(first.pop());
        
    }

        
//     }
// function transfer (first, second, third,length){
//     if (length == 1){
//         second.push(first.pop);
//     }
//     else if (first.length - 1 <= 0){
//         return;
//     }
//     else{
//         let temporal = 6 - 
//         transfer(first,second,third, length - 1 );
//         // third.push(first.pop());
//         second.push(first.pop());
        
//         // third.push(second.pop());
//         transfer(second,third,first, length - 1);
//     }

// }

// transfer(first.length, 0, 1);
transfer2(first.length, first, second, third);
console.log(first);
console.log(second);
console.log(third);
