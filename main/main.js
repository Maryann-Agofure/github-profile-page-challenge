let user = document.querySelector('.userSearch');
const userSearchButton = document.getElementById('searchButton')
let myData = document.querySelector('.getMyData')



//get inputed search query 


function showUserInfo(){
userSearchButton.addEventListener('click', getRepoData)
}
showUserInfo();


async function getRepoData() {
let content = JSON.stringify({
  'query':
  `
    query getRepositories($name: String!, $count:Int= 12, $withFork: Boolean=true, $withStar: Boolean=true) {
    repositoryOwner(login: $name){
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

`,
variables: `{
  "name": "${user.value}"
}`
})


  let response = await fetch(' https://api.github.com/graphql',{
    method: 'POST', // or 'PUT'
    body: content,
    credentials:"same-origin",
    mode: "cors",
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': content.length,
      Authorization: "token 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"
    }}) ;

 const repoReport = await response.json()
 myData.innerHTML = (JSON.stringify(repoReport)
);

let profileInfo = repoReport.data.repositoryOwner

console.log(profileInfo)

}

getRepoData();



// step by step 
//step 1: import js module to enable us make GraphQL queries in javascript
//import { graphql } from "https://cdn.skypack.dev/@octokit/graphql";

//step 2: Request by providing the query we want ccalled, our Github access token and an authorization header with our token




 

// get access token and create header with tokentoken 

/*query:
   `
    ($name: String= ${user.value}, $count:Int= 12, $withFork: Boolean=true, $withStar: Boolean=true) {
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
  }
`
    }
}

*/

/*getRepositories($name: String= "Maryann-Agofure", $count:Int= 12, $withFork: Boolean=true, $withStar: Boolean=true) {
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
*/