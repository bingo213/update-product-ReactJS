function validateData(data, product, numberOfCharacter, field, key, tmp, check, setMessage) {
  if (typeof data !== 'undefined') {
    if (data === '') setMessage(`${field.charAt(0).toUpperCase() + field.slice(1)} is required field`)
    else if (data.length > numberOfCharacter)
      setMessage(`Max length of ${field} is ${numberOfCharacter} characters`)
    else if (product !== data) {
      tmp = { ...tmp, [key]: data};
      check = true;
    }
  }
}

export default validateData;
