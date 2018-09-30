module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0) return 0;

  let valueSet = new Set(array);
  let maxLength = 1;

  for( let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    let length = 1;
    let onTop = currentValue + 1;
    let onBottom = currentValue - 1;

    while(valueSet.has(onTop)) {
      length++;
      valueSet.delete(onTop);
      onTop++;
    }

    while(valueSet.has(onBottom)) {
      length++;
      valueSet.delete(onBottom);
      onBottom--;
    }

    if (length > maxLength) maxLength = length;
    if (maxLength > array.length - i || valueSet.size < maxLength) return maxLength; 
  }
  return maxLength;
}

//longestConsecutiveLength([100,4,200,3,2,5])
