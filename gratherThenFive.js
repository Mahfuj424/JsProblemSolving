

function gratherThenFive(numbers){
    let count = 0;
    for(let i=0; i<numbers.length; i++){
        let element = numbers[i];
        if(element>5){
            count = count + 1
        }
    }
    return count;
}

function gratherThenFive(numbers){
    let count = 0;
    for(let i=0; i<numbers.length; i++){
        let element = numbers[i];
        if(element>5){
            count = count + 1
        }
    }
    return count;
}

const result = gratherThenFive([-1, 2, -3, 4, 6, 5, -7, 8, -9, 10])
console.log(result);