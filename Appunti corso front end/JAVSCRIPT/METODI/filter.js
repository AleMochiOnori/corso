let arr = [1,2,3,4,5,6,3,4,5,6,7]

function filter(a,fn){
    let arr2 = []
    for(i= 0 ; i < a.length ; i++){
        if(fn(a[i])){
            arr2.push(a[i]);
        }
    }
    return arr2
}




 filter(arr,(elem) => elem === 3 )


console.debug(filter(arr,(elem) => elem === 3 ))