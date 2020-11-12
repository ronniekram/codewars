// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

// my solution
function domainName(url){
  let domain = url.replace('http://','').replace('https://','').replace('www.', '').split(/[/?#]/)[0];
  return domain.split('.')[0];
}


// best solution

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};