export function validate (elm, message) {
  if (elm === null || elm === undefined) {
    console.error(message)
  }
}

export function validateAnArray (elm, message) {
  if (elm === null || elm === undefined || elm.length === 0) {
    console.error(message)
  }
}
