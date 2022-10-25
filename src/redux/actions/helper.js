export const waitForAnimation = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, time);
  });
};

export const swapElements = (el1, el2) => {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
};
