//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.




let myArray: number[] = [1, 2, 3, 4, 5];

// Intentional error: accessing an out-of-bounds index
try {
    let value = myArray[10]; // This will cause an "Index out of range" error
    console.log(value); // This line won't be reached if an error occurs
} catch (error) {
    console.error("Error:", error.message);
}

// Correcting the error
let validIndex = 2; // Choose a valid index
let correctedValue = myArray[validIndex];
console.log("Corrected value:", correctedValue);