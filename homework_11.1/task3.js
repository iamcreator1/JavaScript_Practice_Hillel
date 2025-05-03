
async function fetchTodoAsync() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      console.log("get todo (async):", data);
      return data;
    } catch (error) {
      console.log("Cant get todo (async):", error);
    }
  }
  

  async function fetchUserAsync() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.json();
      console.log("Get user (async):", data);
      return data;
    } catch (error) {
      console.log("Cant get user (async):", error);
    }
  }
  

  async function runAsyncTasks() {

    const [todo, user] = await Promise.all([fetchTodoAsync(), fetchUserAsync()]);
    console.log("Completed (async):");
    console.log("Todo:", todo);
    console.log("User:", user);
  

    const first = await Promise.race([fetchTodoAsync(), fetchUserAsync()]);
    console.log("First Completed (async):", first);
  }
  

  runAsyncTasks();