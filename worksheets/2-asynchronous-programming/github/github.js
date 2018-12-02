const url = 'https://api.github.com/users';

var ele = document.getElementById('myForm');
if(ele.addEventListener)
{
    ele.addEventListener("submit", callback);
}else if(ele.attachEvent){
    ele.attachEvent('onsubmit', callback);
}

function callback(e)
{
  e.preventDefault();
  fetch(url).then(response => {
    return response.json();
  }).then(data => {

    var users = data; 

    var input = document.getElementById("search-text");
    username = input.value;

    removeChildren();

    users.map(details)

    function details(user)
    {
      var attributes = user.login;
      if(user.login == username)
      {
        document.getElementById("username").innerHTML = "Username : " + username;
        document.getElementById("profilepic").src = user.avatar_url;

        fetch(user.url).then(response => {
          return response.json();
        }).then(data => {
      
          var userdata = data; 
          document.getElementById("name").innerHTML = "Name : " + userdata.name;
          document.getElementById("location").innerHTML = "Location : " + userdata.location;
          document.getElementById("email").innerHTML = "Email : " + userdata.email;
          document.getElementById("gists").innerHTML = "Number of Gists : " + userdata.public_gists;

          fetch(user.repos_url).then(response => {
            return response.json();
          }).then(data => {
        
            var repo = data; 
  
            repo.map(getRepos)
  
            function getRepos(repo)
            {
              var ul = document.createElement("ul");
              var li = document.createElement("li");
              var repos = document.getElementById("repos");

              linebreak = document.createElement("br");
  

              repos.appendChild(ul);
              li.appendChild(document.createTextNode("Name: " + repo.name));
              li.appendChild(linebreak);
              li.appendChild(document.createTextNode("Description: " + repo.description));
              ul.appendChild(li);
            }
          })
        })

      }

      return attributes
    }

  })
}

function removeChildren()
{
  var myNode = document.getElementById("repos");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}
