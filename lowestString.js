const str=['applre','cati','rabbit','horse','elephant']

const lowest=str.reduce((lowestString,currString)=>{
    // if(lowestString.length>currString.length){
        return currString;
    }
    else{
        return lowestString;
    }

    // .....................second way..........................
    //  return currString<lowestString ? currString :lowestString

},[str[0]]);
console.log(lowest);

 
  
 
