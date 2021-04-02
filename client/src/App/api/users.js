/*
    This function reaches to the node backend and fetches the user
    list provided by the randomuser.me API call. Randomuser.me has
    an API restriction of grabbing only 5000 users at once. In order
    to grab the list of 7000, I make two calls to this API, grabbing
    3500 at time. It seemed more intuitive to do it this way, rather 
    then calling the API for every page. Maybe a more optimal way 
    would be to fetch 1000 users at time and then call it when needed?
*/
async function getUserList() {
  var fullUserList = [];
  var seed = "abc";

  //get the first 3500 users
  await fetch("/api/getList/" + seed)
    .then((res) => res.json())
    .then((list) => {
      fullUserList = list;
    });

  //set a new seed to create new, consistent data
  seed = "def";

  //get the next 3500 users
  await fetch("/api/getList/" + seed)
    .then((res) => res.json())
    .then((list) => {
      fullUserList.push.apply(fullUserList, list); //combine both API call user lists
      fullUserList.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
    });

  return fullUserList;
}

export { getUserList };
