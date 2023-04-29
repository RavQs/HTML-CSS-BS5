main();

function main() {
    let arr = [4,5,6,1,7,2,3];
    let arr2 = [1,4,2,7,19];
    // console.log(`Odd arr is: ${onlyOdd(arr)}`);
    // console.log(`Min num is : ${findMin(arr)}`);
    // bubbleSort(arr);
    console.log(inAscOrder(arr2)); 
}

function onlyOdd(arr)  {
    res = [];
    for(i = 0; i < arr.length;i++) {
        if (arr[i] % 2 == 0) {
            res.push(arr[i])
        }
    }
    return res;
}


function findMin(arr) {
    let res = 200500;

    for (let i = 0; i < arr.length; i++) {
        if(res >= arr[i]) {
            res = arr[i]
        }
    }
    return res
}   


function bubbleSort(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for(let j= i + 1;j < arr.length;j++) {
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;    
            }
        }
    }
    return arr;
}


function inAscOrder(arr) {
    let minNum = 0;
    arr.forEach(element => {
        if (minNum > arr[element]) {
            console.log(element);
            return false;
        }
        else {
            minNum = arr[element];
        }
    });
    return true;
}


