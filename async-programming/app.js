console.log('Asynchronous programming in JavaScript')

// const time = fetch('...')
// const location = fetch('...')
// const weather = fetch('...')
// console.log(`${time} ${location} ${weather}`)

// Callbacks

console.log('First fetch started')
fetchDateWithCallback((err, data) => {
  console.log('First fetch finished')
  if (err) {
    console.log(err)
  }
  console.log(data)
  console.log('Second fetch started')

  fetchDateWithCallback((err, data) => {
    console.log('Second fetch finished')
    if (err) {
      console.log(err)
    }
    console.log(data)
  })
  console.log('After calling second fetch')
})
console.log('After calling first fetch')

// Promises

console.log('First fetch started')
fetchDateWithPromise('first')
  .then(result => logResult('first', result))
  .catch(logError)

console.log('Second fetch started')
fetchDateWithPromise('second')
  .then(result => logResult('second', result))
  .catch(logError)

console.log('After calling first fetch')

function logResult(label, result) {
  console.log(`${label} fetch finished`)
  console.log(result)
}

function logError(error) {
  console.log(error)
}