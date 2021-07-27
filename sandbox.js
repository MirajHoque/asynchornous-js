//create a request object
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  //console.log(request, request.readyState);
  if(request.readyState === 4  && request.status === 200){
    console.log(request, request.responseText);
  }
  else if(request.readyState === 4) {
    console.log('could not fetch the data');
  }
  
}) 

//'readystatechange': event

//open(): used for setting request 
request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
//open('type of request', 'where to make request')

//send request
request.send();
