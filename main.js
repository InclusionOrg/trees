// How would you implement document.querySelector if it didn't exist?

const firstResult = document.querySelector('p');
console.log(firstResult);

// Somehow this doesn't work.
// Because of the for loop, it stops the recursion from going through.
let counter = 0;
const querySelector = (tag, element= document.body) => {
  console.log(`I've been called ${counter++} times. ${element.tagName}`)
  if (element.tagName === tag) {
    return element;
  }

  if (element.children.length === 0) {
    return null;
  }

  for (let i = 0; i < element.children.length; i++) {
    const item = element.children[i];
    return querySelector(tag, item);
  }
}


// This works because we're traversing down each child in order.
// Like if we were tracing the tree on the whiteboard with our fingers.
// let counter = 0;
// const querySelector = (tag, element= document.body) => {
//   console.log(`I've been called ${counter++} times. ${element.tagName}`)
//   if (element.tagName === tag) {
//     return element;
//   }

//   if (element.firstElementChild) {
//     return querySelector('P', element.firstElementChild);
//   }

//   if (element.nextElementSibling) {
//     return querySelector('P', element.nextElementSibling);
//   }
// }



const queryResult = querySelector('P');
console.log(queryResult);