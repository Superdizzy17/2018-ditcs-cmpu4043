const urlUsers = 'https://jsonplaceholder.typicode.com/users';

//Fetch data from url and add it to users
fetch(urlUsers).then(response => {
    return response.json();
  }).then(data => {
    var users = data; 
    //console.log(users);

    //Map the attributes we want to resultAtt 
    const resultAtt = users.map(attributes);
    console.log("Usernames, User Addresses, User Zipcodes\n", resultAtt);

    //Filter out the zipcodes we want 
    const resultZip = users.filter(zipcodes);
    console.log("Users with zipcodes that start with 2 or 5\n", resultZip);
  })

  function attributes(user)
  {
    var attributes = [user.username, user.address.city, user.address.zipcode];
    return attributes
  }

  function zipcodes(user)
  {
    if(user.address.zipcode.charAt(0) == "2" || user.address.zipcode.charAt(0) == "5")
    {
      return true
    }
    else
    {
      return false
    }
  }

const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

//Fetch data from url and add it to posts
fetch(urlPosts).then(response => {
    return response.json();
     }).then(data => {
      var posts = data; 
      //console.log(posts);

      //Filter titles that have more than 6 words
      const postTitles = posts.filter(titles);
      console.log("Titles with more than 6 words\n" ,postTitles);

      //map freq of data pass in post
      posts.map(Freq);

    })

    function titles(post)
    {
      //console.log(post);
      //console.log(post.title);

      if(post.title)
      {
        var titleWords = post.title.split(' ');

        if(titleWords.length > 6)
        {
          return true
        }
        else
        {
          return false
        }
      }
    }


    function Freq(post) 
    {
      /* Pattern for searching for word characters in a string
        \w metacharacter is used to find a word character.
        https://www.w3schools.com/jsref/jsref_regexp_wordchar.asp
      */
      var pattern = /\w+/g,
          postBody = post.body,
          matchedWords = postBody.match(pattern);
    
      var counts = matchedWords.reduce(function(freq,word)
      {
    
          if (freq.hasOwnProperty(word)) 
          {
              //increment freq when word is discovered again
              freq[word] = freq[word] + 1;
          } else 
          {
              //freq does not have this word so store it and let it equal to 1
              freq[ word ] = 1;
          }
    
          //return freq to build up the array
          return freq;
    
      }, {} );
  
      console.log(counts);
    }