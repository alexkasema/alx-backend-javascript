export default function cleanSet(set, startString) {
  const myString = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const myValue = value.substring(startString.length);
      if (myValue && myValue !== value) {
        myString.push(myValue);
      }
    }
  }

  return myString.join('-');
}
