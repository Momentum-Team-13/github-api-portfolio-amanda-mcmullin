//ensure data is linked
// console.log('Is this thing on?');

const profile = document.querySelector('#profile');
const repoList = document.querySelector('#repoList')

//variables
const profileURL = "https://api.github.com/users/amanda-mcmullin";
const repoURL = "https://api.github.com/users/amanda-mcmullin/repos";

//**********PROFILE DATA********** 
//fetch request for PROFILE DATA
fetch (profileURL, {
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
    console.log(data)
    console.log('Response from GitHub API:', data.name)
    //call function *which will be built outside the fetch* on the returned data 
    buildProfile(data)
});

//FUNCTION WILL USE profileData TO BUILD REQUIRED FIELDS
function buildProfile(profileData) {
    //name
    let nameElement = document.createElement('h1');
    nameElement.innerText = `${profileData.name}`;
    profile.appendChild(nameElement);

    //photo
    let photoElement = document.createElement('img');
    photoElement.src = profileData.avatar_url;
    photoElement.alt = "user's profile pic";
    profile.appendChild(photoElement);

    //location
    let locationElement = document.createElement('div');
    locationElement.innerText = `Location: ${profileData.location}`
    profile.appendChild(locationElement);

    //GitHub URL:
    let urlElement = document.createElement('a');
    urlElement.src = profileData.html_url;
    // urlElement.innerText = `GitHub URL: ${profileData.url}`;
    urlElement.innerHTML = "GitHub URL: " + `${profileData.login}`;
    urlElement.href=profileData.html_url;
    // el.innerText = repoName.name;
    // el.href = repoName.html_url
    profile.appendChild(urlElement);

    //GitHub username:
    let usernameElement = document.createElement('div');
    usernameElement.href = profileData.login
    usernameElement.innerText = `GitHub username: ${profileData.login}`;
    
    profile.appendChild(usernameElement);
}

//**********REPO DATA********** 
//fetch request for REPOSITORY DATA
fetch(repoURL, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
})
.then(function (response){
    return response.json();
})
.then(function(repo) {
    //*****WORKING***** 
    console.log('Response from GitHub Repositories:', repo);
    //call function *which will be built outside the fetch* that turns repos from repoarray into their own element
    buildRepoLoop(repo);
});


function buildRepoLoop(profileData) {
    for (let repo of profileData) {
        buildRepoElement(repo)
    }
}

function buildRepoElement(repoName) {
    let el = document.createElement('a');
    el.classList.add('repoItem')
    el.innerText = repoName.name;
    el.href = repoName.html_url
    repoList.appendChild(el);
}
