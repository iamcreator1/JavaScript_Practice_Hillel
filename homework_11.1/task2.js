function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(function (response) {
        return response.json(); 
      })
      .then(function (data) {
        console.log("get todo:", data); 
        return data; 
      })
      .catch(function (error) {
        console.log("Error:", error);
      });
  }
  

  fetchTodo();

  function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("Get user:", data);
        return data;
      })
      .catch(function (error) {
        console.log("Error:", error);
      });
  }


Promise.all([fetchTodo(), fetchUser()]).then(function (results) {
    const todo = results[0];
    const user = results[1];
    console.log("Everything was completed:");
    console.log("Todo:", todo);
    console.log("User:", user);
  });
  

  Promise.race([fetchTodo(), fetchUser()]).then(function (firstFinished) {
    console.log("First completed:", firstFinished);
  });