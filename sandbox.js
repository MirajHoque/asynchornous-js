const getTodos = (callback) => {
  
  //create a request object
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
  //console.log(request, request.readyState);
  if(request.readyState === 4  && request.status === 200){
    callback(undefined, request.responseText);
  }
  else if(request.readyState === 4) {
    callback('could not fetch data', undefined);
  }
  
}) 

//'readystatechange': event

//open(): used for setting request 
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
//open('type of request', 'where to make request')

//send request
request.send();

} 
 //asynchornous behavior test
console.log(1);
console.log(2);

getTodos( (err, data)=> {
  console.log('callback fired');
  if(err) {
    console.log(err);
  }
  else {
    console.log(data);
  }
});

 //asynchornous behavior test
 console.log(3);
 console.log(4);
 

