    //    map filter and reduce
 
const name=["taj","rohan","gautam","rahul","rohan","akhil","ram","deepak"];
const data=name.filter((elm)=>{
    return elm.includes('r');
}).map((each)=>{
 console.log('filtered data :',each);   
})

//  ...................reduce method .................. 
const dataNames=["taj","rohan","gautam","rahul","rohan","akhil","ram","deepak",1,2,"sukhdev",3,4,"harendra"];
const number=dataNames.reduce((acc,curr)=>{
    if(typeof curr ==='number'){
        acc.push(curr);
    }
    return acc;
},[]);
console.log('reduce data :',number);