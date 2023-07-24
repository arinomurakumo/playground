import { Link, LoaderFunction, json, useLoaderData } from 'react-router-dom'

type PostType = {
  userId: Number
  id: Number
  title: string
  body: string
}

export const loader: LoaderFunction = async (params) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  ).then(async (response) => {
    return response.json()
  })

  return json<PostType>(response)
}

function Posts() {
  const posts = useLoaderData() as PostType[]

  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={String(post.id)}>
            <Link to={`/posts/${post.id}`}>
              {String(post.id)}:{post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Posts
