export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let iterator = reportWithIterator[Symbol.iterator]();
  let item = iterator.next();

  while (!item.done) {
    result += item.value + ' | ';
    item = iterator.next();
  }

  // Remove the trailing ' | ' from the result
  result = result.slice(0, -3);

  return result;
}
