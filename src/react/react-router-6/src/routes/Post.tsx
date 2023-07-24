import { LoaderFunction, useLoaderData } from 'react-router-dom'

type PostType = {
  userId: Number
  id: Number
  title: string
  body: string
}

export const loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  )
  const post = (await res.json()) as PostType

  if (!res.ok) {
    throw Error('Not Found!!!!!!')
  }

  return post
}

function Post() {
  const post = useLoaderData() as PostType

  return (
    <>
      <h2>Single Post</h2>
      <div>
        <p>ID:{String(post.id)}</p>
        <p>タイトル:{post.title}</p>
        <p>内容:{post.body}</p>
      </div>
    </>
  )
}

export default Post
