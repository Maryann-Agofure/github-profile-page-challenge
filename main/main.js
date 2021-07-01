let user = document.querySelector('.userSearch');
const userSearchButton = document.getElementById('searchButton')
let myData = document.querySelector('.getMyData')
const {token} = process.env



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
        totalCount
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
      'Authorization': `${token}` + 'token'
    }}) ;

 const data = await response.json()
 
const {repositoryOwner} = data.data
const repoList = repositoryOwner.repositories.nodes
console.log(repoList)
  

const userProfileDetails = document.querySelector('.part2')

document.querySelector('.photo').src =` ${repositoryOwner.avatarUrl}`
document.querySelector('.login-name').innerHTML =` ${repositoryOwner.login}`
document.querySelector('.repositoryCount').innerHTML = ` ${repositoryOwner.repositories.totalCount}` 


repoList.forEach(nodes => {
  const userDetails = document.createElement('div')
  userDetails.innerHTML = `<div class= "repositoryList">
   <div class= "flex-column">
   <h3>${nodes.name}</h3>
   <span class= "star-button"
                    ><button><i class="far fa-star"></i>Star</button></span
                  >
                </div>
   
   
   <p>${nodes.description}</p>
   <div class="others">
  <span class="features">
                    <i class="fas fa-circle"  style = 'color: ${nodes.primaryLanguage.color}' ></i>${nodes.primaryLanguage.name}</span
                  >
                
               <span class="features"
                  ><i class="far fa-star"></i>${nodes.stargazerCount}</span
                >  
              <span class="features"
                    ><i class="fas fa-code-branch"></i>${nodes.forkCount}</span
                  > 
                <p class="features">Updated at ${nodes.updatedAt}</p>        
   </div>
  
  
   
   
  </div>`
  userProfileDetails.appendChild(userDetails)
})

}

/*
const menuButton = document.getElementById('bar-menu')
const dropdown = document.getElementsByClassName('dropdown-menu')

function toggleMenu(){
menuButton.addEventListener('click', () =>{
dropdown.classList.toggle('show')
})
}
toggleMenu()
*/