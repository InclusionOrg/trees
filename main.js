// How would you implement document.querySelector if it didn't exist?

// const firstResult = document.querySelector('p');
// console.log(firstResult);

// Somehow this doesn't work.
// Because of the for loop, it stops the recursion from going through.
// let counter = 0;
const querySelector1 = (tag) => {
  const startList = Array.from(document.body.children);
  let element;

  const traverse = domNode => {
    console.log(domNode.tagName);
    if (domNode.tagName.toLowerCase() === tag.toLowerCase()) {
      if (!element) {
        //if element doesn't have a value assign domnode to it
        element = domNode;
      }
    }
    const nextList = Array.from(domNode.children || {});
    nextList.forEach(traverse);
  }

  startList.forEach(traverse);
  return element;
}


// This works because we're traversing down each child in order.
// Like if we were tracing the tree on the whiteboard with our fingers.
let counter = 0;
const querySelector2 = (tag, element= document.body) => {
  console.log(`I've been called ${counter++} times. ${element.tagName}`)

  if (element.tagName.toLowerCase() === tag.toLowerCase()) {
    return element;
  }

  if (element.firstElementChild) {
    return querySelector2('P', element.firstElementChild);
  }

  if (element.nextElementSibling) {
    return querySelector2('P', element.nextElementSibling);
  }
}



const queryResult = querySelector2('P');
console.log(queryResult);
