// FIND PRIME 
function findPrime(...numbers) {
    let isPrime = true
    for (let index = 0; index < numbers.length; index++) {
        for (let index2 = 2; index2 < numbers[index]; index2++) {
            if (numbers[index] % index2 == 0) {
                isPrime = false
            }
        }
        if (isPrime == true) 
        {
            console.log(numbers[index] + " Asal Sayıdır")
        }
        else    
        {
            console.log(numbers[index] + " Asal Sayı değil") 
        }
    }
}
findPrime(3,5,8,12)


// AMICABLE NUMBERS

function amicableNumbers(number1,number2) {
    let number1Count = 0;
    let number2Count = 0;
    for (let index = 0; index < number1; index++) {
        if (number1 % index == 0) 
        {
            number1Count+=index
        }
    }

    for (let index2 = 0; index2 < number2 ; index2++) {
        if (number2 % index2 == 0) 
        {
            number2Count+=index2
        }
    }

    if (number1 == number2Count && number2 == number1Count)
    {
        console.log(number1 + " ve " + number2 + " arkadaştır")
    }
    else
    {
        console.log(number1 + " ve " + number2 + " arkadaş değildir")
    }
}
amicableNumbers(220,284)


// PERFECT NUMBERS
function perfectNumbers() {
    let perfectArray = []
for (let index = 1; index < 1000; index++) {
    let count = 0
    for (let index2 = 1; index2 < index; index2++) {
        if (index % index2 == 0) 
        {
            count = count + index2
        }
    }
    if (count == index)
    {
        perfectArray.push(index)
    }
}
console.log(...perfectArray)

}
perfectNumbers()



// PRIME NUMBERS LIST FROM 1 TO 1000

function primes() 
{
    for (let index = 1; index <=1000; index++) {
        let isPrime = true
        for (let index2 = 2; index2 < index; index2++) {
            if (index % index2 == 0)
            {
                isPrime = false
                
            }
        }
        if (isPrime == true)
        {
            console.log(index + " Asal Sayıdır")
        }
        
    }
}
primes()