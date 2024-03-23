

function largeName(nameOne, nameTwo) {
  let friendsOne = nameOne.length;
  let friendsTwo = nameTwo.length;

  let largeName = "";
  if (friendsOne > friendsTwo) {
    largeName = nameOne;
  } else {
    largeName = nameTwo;
  }
  let reversingName = "";
  for (let i = largeName.length - 1; i >= 0; i--) {
    const element = largeName[i];
    reversingName = reversingName + element;
  }
  return reversingName;
}

const result = largeName("Abdullah", "Mahfuj")
console.log(result);
