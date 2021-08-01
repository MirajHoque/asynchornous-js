const getTodos = async () => {
  
  const response = await fetch('todoss/luigi.json')

  if(response.status !==200) {
    throw new Error('can not fetch the data')
  }
  
  const data = response.json();
  
  return data;
}

getTodos()
  .then( data => console.log('resolved' ,data))
  .catch( err => console.log('rejected:', err.message))


 

