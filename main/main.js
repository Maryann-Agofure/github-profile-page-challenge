let user = document.querySelector('.userSearch');
const userSearchButton = document.getElementById('searchButton')

let query ={
  'query': `($name: String= ${user.value}, $count:Int= 12, $withFork: Boolean=true, $withStar: Boolean=true) {
    repositoryOwner(login: $name,){
      avatarUrl
      id
      login
      
      repositories(first:$count ){
        nodes{
          name
          description
          
          primaryLanguage{
            color
            name
          }
          stargazerCount@include(if: $withStar)
          forkCount@include(if: $withFork)
          updatedAt
          
        }
      }
    }
    }
  
`
  }

//get inputed search query 


function showUserInfo(){
userSearchButton.addEventListener('click', console.log('ann'))
}
showUserInfo

function loadUser(){
  let data =  {}
let body = JSON.stringify(query);

fetch('https://graphql.github.com/graphql/proxy', {
  method: 'POST', // or 'PUT'
  credentials:"same-origin",
  mode: "cors",
  headers: {
    'Content-Type': 'application/json',
  },
  body: body,
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}
loadUser()




// step by step 
//step 1: import js module to enable us make GraphQL queries in javascript
//import { graphql } from "https://cdn.skypack.dev/@octokit/graphql";

//step 2: Request by providing the query we want ccalled, our Github access token and an authorization header with our token




 

// get access token and create header with tokentoken 

/*const token = "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"
const auth = {
    headers: {
        authorization: "token " + token
    }
}

//step 3: create function to make request
const myRequest = async(q, a) => await graphql(q, a)

console.log(myRequest(query, auth))*/

//let body = JSON.stringify(query);
/*{
method: 'POST',
 mode: "cors",
  headers: {
    'Content-Type': 'application/json'
  },
  body: body
}*/




  /*
fetch("https://graphql.github.com/graphql/proxy", data = {},
{
  
  method: 'POST',
   mode: "cors",
   credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      

    },
    body: JSON.stringify(data)
  }
)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
*/
  