
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


function updatePost(){
  update = document.getElementById('patchPost').value;
    axios.request({
      method: "PATCH",
      url: "https://jsonplaceholder.typicode.com/posts/1"
    }).then(itWorked).catch(itFailed);
}


function readPost(){
  infoLoop();
    for(var counter=0; counter<readPost.length; counter++){
      document.getElementById('get').innerText = response.data.body;
    }
    axios.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts"
    }).then(itWorked).catch(itFailed);
}


document.getElementById('uploadPost').addEventListener('click', writePost);
document.getElementById('patchPost').addEventListener('click', updatePost);




function postsSuccess(response){
  console.log(response);
  if(response.data.id >readPost.length){
    document.getElementById('get').innerText = response.data.body;
  } else {
    document.getElementById('get').innerText = "error";
  }
}

function postsFailed(error){
  console.log(error);
}

// for(var counter=0; counter<99;counter++){
//   console.log(counter);
// }
function getPosts(){
  getPost = document.getElementById('get').innerHTML.data;
  axios.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts"
  }).then(postsSuccess).catch(postsFailed);
}

document.getElementById('getLorem').addEventListener('click', getPosts);



