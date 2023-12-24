// Ques:-How to empty an array in js 
//    ...............  Method 1  .....
var arrayList=['a','b','c','d','e'];
var newArrayList=arrayList;
arrayList=[];
console.log('pre',arrayList)
console.log('new',newArrayList);

// o/p :-pre []
//       new [ 'a', 'b', 'c', 'd', 'e' ]

// // ...............  Method 2  .....
// var arrayList=['a','b','c','d','e'];
// var newArrayList=arrayList;
// arrayList.splice(0,arrayList.length);
// console.log('pre',arrayList)
// console.log('new',newArrayList);

// o/p:-pre []
//      new []

 // ...............  Method 3  .....
// var arrayList=['a','b','c','d','e'];
// var newArrayList=arrayList;
// arrayList.length=0;
// console.log('pre',arrayList)
// console.log('new',newArrayList);

//  o/p:-pre []
//      new []