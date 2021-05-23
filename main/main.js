
//get inputed search query 
const user = document.querySelector('.userSearch');




// step by step 
//step 1: import js module to enable us make GraphQL queries in javascript
import { graphql } from "https://cdn.skypack.dev/@octokit/graphql";

//step 2: Request by providing the query we want ccalled, our Github access token and an authorization header with our token

const query =`
query($name: String!, $count:Int!) {
    repositoryOwner(login: $name,){
      id
      login
      avatarUrl
      
    
      
      repositories(first:$count){
        nodes{
          name
          isFork
          createdAt
          pushedAt
          descriptionHTML
        }
      }
    }
    }
`

const queryVariables = `
Query Variables {
    "name": "Maryann-Agofure",
    "count": 20
}
`

 

// get access token and create header with tokentoken 

const token = "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"
const auth = {
    headers: {
        authorization: "token " + token
    }
}

//step 3: create function to make request
const myRequest = async(q, a) => await graphql(q, a)

console.log(myRequest(query, auth))


