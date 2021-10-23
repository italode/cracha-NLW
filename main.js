const linksRedesSocial = {

  github: "italode",
  youtube: "Moub-_-",
  instagram: "tillo_pereira",
  facebook: "italo pereira"          
}
         
function changeSocialMediaLinks(){      
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
   
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos (){
  const url =`https://api.github.com/users/${linksRedesSocial.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
  })

}