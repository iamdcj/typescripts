import axios from 'axios';

{
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  // Define structure of Todo object
  interface todo {
    id: number;
    title: string;
    completed: boolean;
  }

  axios.get(url)
  .then(({ data }) => {
    const { id, title, completed } = data as todo;

    const daty:Date = new Date();

    console.log(daty);
    

    logTodo(id, title, completed);

  })
  .catch(error => console.error(error))

  const logTodo = (id: number, title: string, completed: boolean) => {
    console.info(`
      The todo with ID: ${id}
      has a title of ${title}. 
      Is it finished? ${completed}
    `);
  }

}

