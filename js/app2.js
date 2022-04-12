function itWorked(response){
  console.log(response);
  // console.log(response.data);
  let projectLorem = response.data;
  document.getElementById('get').innerHTML = 'hello';
}

function itFailed(error){
  console.log(error);
}

function writePost(){
  post = document.getElementById('writePost').value;
    axios.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      // headers:{
      //   Content-Type: "application/json"
      // },
      data: {
        userId: 11,
        title: "I copied the slide deck",
        body: document.getElementById('writePost').value
      }
    }).then(itWorked).catch(itFailed);
}