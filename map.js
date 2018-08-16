let arr = [
    {
        name: 'crossjae'
    },
    {
        name: 'jae'
    }
]

let _arr = arr.map((n)=>{
    n.name += '01';
    return n
})

console.log(arr, _arr)