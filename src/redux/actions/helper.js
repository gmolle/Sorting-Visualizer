// Function to add a delay based on the animation speed
export const waitForAnimation = (time) => { 
  return new Promise(resolve => { 
      setTimeout(() => { resolve('') }, time); 
  }) 
}

// Function to swap elements in the array
export const swapElements = (el1, el2) => {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
} 