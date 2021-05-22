
//get inputed search query 
const user = document.querySelector('.userSearch').value;




// step by step 
//step 1: import js module to enable us make GraphQL queries in javascript
import { graphql } from "https://cdn.skypack.dev/@octokit/graphql";

//step 2: Request by providing the query we want ccalled, our Github access token and an authorization header with our token

const query =`
query GetMyInfo(querystring: "owner"){
    search(owner: "Maryann-Agofure", type:REPOSITORY, first:10){  
        repositoryCount
        pageInfo{
         endCursor
         startCursor
        }
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


