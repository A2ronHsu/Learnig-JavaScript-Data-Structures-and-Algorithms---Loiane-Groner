export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

export const DOES_NOT_EXIST = -1;

export function lesserEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

export function biggerEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function defaultEquals(a, b) {
  return a === b;
}

export function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } if (item === undefined) {
    return 'UNDEFINED';
  } if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

export function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}
export function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}

export function defaultDiff(a, b) {
  return Number(a) - Number(b);
}

export const Colors = {
  WHITE: 0,
  GREY:1,
  BLACK:2
}

export const initializeColors = vertices => {
  const color = {}
  for(let i = 0; i < vertices.length; i++){
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
}


export function createNonSorted(size){
  const array = [];
  for (let i=size; i>0;i--){
    array.push(parseInt(Math.random()*10));
    // array.push(i);
  }
  return array;
}