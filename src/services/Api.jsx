import axios from 'axios';

// Default functions
export const nullFunc = () => {};

export const getPopularRepos = (params, callback = nullFunc) => {
  var encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=start:>1+language:' +
  params.language + '&sort=start&order=desc&type=Repositories');
  axios.get(encodeURI)
  .then(function(response){
    if(response){
      callback(response.data.items)
    }
  })
  .catch(function(error){
    console.log(error.message)
  });
}
