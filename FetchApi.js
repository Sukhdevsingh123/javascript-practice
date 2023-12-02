// ........................ fetch api .................
fetch ('https://dummyjson.com/products')
.then(res=> res.json())
.then(data=> console.log(data))

// const newArray=[];
// fetch ('https://dummyjson.com/products')
// .then(res=> res.json())
// .then(data=>{
//     newArray.push(data)
// })
// newArray.map(elm=>
//     console.log(newArray)
//     )

