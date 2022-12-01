function max(left, right) {
  left = parseInt(left);
  right = parseInt(right);

  if ( left > right ) {
    return left;
  } else if ( left < right ) {
    return right;
  }
  console.log('Both numbers are equal.')
}

const maxNum = max(5, 10);
console.log(maxNum);
