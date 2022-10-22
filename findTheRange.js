// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let smallest = array[i]
let largest = array[i]

for (let i = 0; i < array.length; i++) {
	if (smallest > array[i]) {
	  smallest = array[i]
	} else if (largest < array[i]) {
	  largest = array[i]
	}
  }