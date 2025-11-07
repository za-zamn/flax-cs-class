// Example fetch GET
await fetch('https://www.google.com/search?q=ariana+grande')



// Example fetch POST
await fetch("/https://github.com/signup", {
  method: "POST",
  headers: {
      Accept: "application/json"  // type of data being passed
  },
  body: JSON.stringify({
      username: "johnSmith123",
      password: "paSSword456?"    // most likely encoded too!
  })
})