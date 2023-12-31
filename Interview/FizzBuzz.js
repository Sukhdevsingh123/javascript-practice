//Ques:-create a loop run 100 times while outputting "fizz " multiple of 3 ,'buzz' multiple of 5 and "fizzbuzz" multiple of 3 and 5.
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzBuzz", i);
    }
    else if (i % 3 == 0) {
        console.log('fizz', i)
    }
    else if (i % 5 == 0) {
        console.log("buzz", i)
    }
    else {
        console.log(i)
    }

}
