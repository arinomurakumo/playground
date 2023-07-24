import {
  Form,
  LoaderFunction,
  useLoaderData,
  ActionFunction,
  useActionData,
} from 'react-router-dom'

type TodoType = {
  id: number
  title: string
  completed: boolean
}

export const loader: LoaderFunction = async () => {
  const res = await fetch('http://localhost:3001/todos')
  const todos = (await res.json()) as TodoType[]
  return todos
}

export const action: ActionFunction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData())
  const res = await fetch('http://localhost:3001/todos/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const todo = await res.json()

  return { todo }
}

const Todo = () => {
  const todos = useLoaderData() as TodoType[]
  const actionData = useActionData()
  console.log(actionData)

  return (
    <>
      <h2>Todo</h2>
      <Form method="post">
        <input name="title" placeholder="title" />
        <br />
        <button type="submit">Submit</button>
      </Form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Todo
