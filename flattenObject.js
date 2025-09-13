/*

input: 
const xyz = {
  a: {
    b: "c",
    d: "e",
    c: {
      d: null
    }
  },
  y: "1",
  z: {
    e: "q"
  }
};

output:
{
  "a.b": "c",
  "a.d": "e",
  "y": "1",
  "z.e": "q"
}
  */

const xyz = {
  a: {
    b: "c",
    d: "e",
    c: {
      d: null
    }
  },
  y: "1",
  z: {
    e: "q"
  }
};

function flattenObject(obj, parentKey = '') {
  let result = {};

  for (const key in obj) {
    // Skip properties with a null value as per the desired output
    if (obj[key] === null) {
      continue;
    }

    const newKey = parentKey ? `${parentKey}.${key}` : key;
    // Check if the value is an object and not an array
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      // Recursively call the function for nested objects
      Object.assign(result, flattenObject(obj[key], newKey));
    } else {
      // Add the key-value pair to the result
      result[newKey] = obj[key];
    }
  }

  return result;
}

const flattenedObject = flattenObject(xyz);
console.log(flattenedObject);