var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";

for (var i = 1; i <= n; i++) {//declare condition
    sum =sum + i ** 2;//square of the number 
    series = series+ (i ** 2).toString();
    if (i == n) { continue; }
    series =series + " + ";
}

console.log(`${series} = ${sum}`); 
/*var n = parseInt(prompt("Enter the number of terms: "));: This line prompts the user to enter the number of terms they want to consider for the series. The parseInt function is used to convert the user input (which is initially a string) into an integer. This integer value is stored in the variable n.

var sum = 0;: This line initializes a variable sum to keep track of the sum of the series. It starts at zero.

var series = "";: This line initializes an empty string series to store the textual representation of the series.

for (var i = 1; i <= n; i++) {: This line starts a for loop that iterates from 1 to the value of n, inclusive. i is the loop variable.

sum += i ** 2;: Inside the loop, the value of i squared (i.e., i raised to the power of 2) is added to the sum variable. This calculates the sum of squares of numbers from 1 to n.

series += (i ** 2).toString();: This line appends the square of i to the series string. The toString() method is used to convert the squared value to a string before appending it to series.

if (i == n) { continue; }: This line checks if i is equal to n. If they are equal, it means the loop is on its last iteration, and there's no need to append the " + " separator to series. So, it skips to the next iteration of the loop using continue.

series += " + ";: This line appends " + " to the series string, separating the terms of the series. This is done for every term except the last one.

After the loop, console.log(${series} = ${sum}); prints out the series along with its sum using template literals. It shows the series and its sum in the console.

So, in summary, this code calculates the sum of squares of numbers from 1 to n and also constructs a string representing the series. Finally, it prints out the series and its sum.*/
