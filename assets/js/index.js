// Iterate 0 to 10 using for loop, do the same using while and do while loop

for(let i=0; i<=10; i++ ){
    console.log(i)
}

let i= 0 
while (i <= 10) { 
 console.log(i) 
 i++ 
} 

//Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i=10; i>=0; i--)
{
    console.log(i)
}

let I=10
while (i>= 0) { 
 console.log(i) 
 i--
} 

//Iterate 0 to n using for loop


// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i=0; i<=100; i++) {
    
    if (i % 2 === 0) {
           console.log(`${i} `);   
   }
}

for (let i=1; i<=100; i++) {
    
    if (i % 2 != 0) {
           console.log(`${i}`);   
   }
  
}
// Use for loop to iterate from 0 to 100 and print only prime numbers

for(let i=0;i<=100;i++){
    condition=true;
    for(let j=2;j<=i-1;j++){
        if(i%j==0){
          condition=false;  
          break;
        }
    }
    if(condition==true){
        console.log(i)
    }
}
/*Use for loop to iterate from 0 to 100 and print the sum of all numbers. 
o The sum of all numbers from 0 to 100 is 5050. */
const number = prompt('Enter a number ')
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of all numbers is :', sum);

/* Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. 
o The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500. */

let even=0

for(i=1;i<=100;i++){
if(i%2==0)
even = even+i
console.log(even)
}

let odd=0 
for(i=1;i<=100;i++){
  if(i%2==0)
    odd=odd+i
console.log(odd)

}

/*Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum 
of evens and sum of odds as array 
o [2550, 2500]*/

/*Use loop to print the following pattern:
0 x 0 = 0 
1 x 1 = 1 
2 x 2 = 4 
3 x 3 = 9 
4 x 4 = 16 
5 x 5 = 25 
6 x 6 = 36 
7 x 7 = 49 
8 x 8 = 64 
9 x 9 = 81 
10 x 10 = 100
*/

for(let i = 0; i <= 10; i++){ 
    console.log(`${i} * ${i} = ${i * i}`) 
   } 

   /*Write a loop that makes the following pattern using console.log(): 
# 
## 
### 
#### 
##### 
####### */

let a,b,chr;
for(a=1;a<=6;a++){
    for(b=1;b<a;b++){
        chr=chr+("#");
    }
    console.log(chr);
    chr='';
}

/*Using loop print the following pattern 
i i^2 i^3 
0 0 0 
1 1 1 
2 4 8 
3 9 27 
4 16 64 
5 25 125 
6 36 216 
7 49 343 
8 64 512 
9 81 729 
10 100 1000 
*/
for(let i=0;i<=10;i++){
    console.log(`${i} ${i*i} ${i*i*i}`)
}

