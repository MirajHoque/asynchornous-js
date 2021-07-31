fetch ('todos/luigi.json').then( (response) => {
  console.log('resolved', response) //response(object)
  return response.json() //returns a promise
  // json() used for get actual data
}).then( (data) => {
  console.log(data);
}).catch( (err) => {
  console.log('rejected', err);
})

 

