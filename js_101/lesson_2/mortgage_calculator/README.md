# Using PEDAC to create the Car Loan Calculator

## problem:
Write a program that determines the monthly payment rate of a car's loan. You
should determine the loan duration, the loan amount, and the Anual Percentage Rate.
From the above information you will need to determine the loan duration in months,
and the monthly interest rate which is `APR / 12`. For the payment rate to calculate,
you will need the following fomula: `let m = p * (j / (1 - Math.pow((1 + j), (-n))));`

* m = monthly payment
* p = loan amount
* j = monthly interest rate
* n = loan duration in months

In your program you should try to use discriptive names for your variables. 
Also print the amount with $ sign and cents amount.

## Examples:
Loan Amount	
20,000
Loan Term	
5
years  
0
months 
Interest Rate	
5
Compound	
Monthly (APR)
Pay Back	
Every Month

========================================================================                                                    
## Edge Cases:

- The program should support no interest loans or loans that that arent for 
  integer number of years

- It only can take number for interest rate format, not percentage: 5, not 5%
- Handle the case where the user inputs`% `or `.`or `0` for interest rate.


## Rules/requirements
- Convert the APR to monthly interest rate for use in formula.
- Determine the loan duration in months or years. 
- Determine the amount of loan.
- Determine the APR.
- From APR, determine the interest rate/month.
- Print the amount with cents and $.

========================================================================

## Data Structure:

input: number integer
output: number string

====================================================================

## Algorithm:
Ask the user for the loan amount, loan duration and Anual Interest Rate.
Ask the user whether duration is in months or years.
Calculate the loan duration in months.
Find the monthly interest rate.
Print the monthly interest rate and duration in months

### Psuedocode:
Import readline-sync
Print the welcome message.

Start the program

Ask the user for loan amount
 - Save the loan amount
 - amount validity SUPROCESS

Ask the user for Anual Interest Rate
 - Save the APR
 - APR validity SUPRPCESS

Ask the user for loan duration in years
 - Save the loan duaration
 - Duration validity SUPROCESS

Calculate the monthly payment rate SUBPROCESS
 - Print monthly payment rate

Ask for another calcualtion
 - while user answer is no
   - stop the program

