const error = false
const ms = 2000

function fetchDateWithCallback(callback) {
  if (error) {
    setTimeout(() => callback(new Error('Some error'), null), ms)
  } else {
    setTimeout(() => callback(null, new Date()), ms)
  }
}

function fetchDateWithPromise(label) {
  return new Promise((resolve, reject) => {
    if (error) {
      setTimeout(() => reject(new Error(`${label} Some error`)), ms)
    } else {
      setTimeout(() => resolve(new Date()), ms)
    }
  })
}
