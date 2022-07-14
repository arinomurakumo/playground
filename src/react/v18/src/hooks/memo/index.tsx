import { memo, useState } from 'react'
import { Header } from './Header'

type ChildProps = {
  count: number
}

const Child = memo<ChildProps>(props => {
  let i = 0
  while (i < 1000000000) i++
  console.log('render Child')
  return <p>Child: {props.count}</p>
})

export const Parent = () => {
  console.log('render App')

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      <h1>重い処理</h1>
      <Header />
      <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
      <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
      <p>App: {count1}</p>
      <Child count={count2} />
    </>
  )
}