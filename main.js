//ensure data is linked
// console.log('Is this thing on?')

//create main box for all the things
const profilePage = document.querySelector('#profile')

//variables
const gitHubUrl = "https://api.github.com/users/amanda-mcmullin"
const gitHubRepoUrl = "https://api.github.com/users/amanda-mcmullin/repos"

//fetch request for PROFILE DATA
fetch (gitHubUrl, {
    method: 'GET',
    headers:{'Content-Type': 'application/json'},
})
//response is the promised data; retreival is not instant 
.then(function (response) {
    //when you have the promised data, give it to me as json
    return response.json()
}) 
//promised data from above will be passed in 
.then (function (data) {
    //returned data printed to console*****WORKING*****
    // console.log('Response from GitHub API:', data.name)
    //call function *which will be built outside the fetch* on the returned data 
    buildProfile(data)
})

//fetch request for REPOSITORY DATA
fetch(gitHubRepoUrl, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
})
.then(function (response){
    return response.json()
})
.then(function(repos) {
    //*****WORKING***** 
    // console.log('Response from GitHub Repositories:', repos)
    // console.log(typeof repos)
    buildRepoList(repos)
})


    //name 

    //photo

    //location

    //GitHub URL:

    //GitHub username:

    //GitHub Repos
