import { useEffect, useMemo, useState } from 'react'
import { Header } from './Header'

type ChildProps = {
  count1: number
  count2: number
}

const Child = ({ count1, count2 }: ChildProps): JSX.Element => {
  useEffect(() => {
    // eslint-disable-next-line
    console.log('Childがレンダリングされたよ')
  })

  return (
    <>
      <p>Child1：{count1}</p>
      <p>Child2：{count2}</p>
    </>
  )
}

export const Parent = () => {
  const [parentCount, setParentCount] = useState<number>(0)
  const [childCount1, setChildCount1] = useState<number>(0)
  const [childCount2, setChildCount2] = useState<number>(0)

  useEffect(() => {
    // eslint-disable-next-line
    console.log('Parentがレンダリングされたよ')
  })

  // NOTE: useMemoの第二引数にはchildCount2が基本的には入ってるべきでeslint-plugin-react-hooks パッケージの exhaustive-deps ルール入れると多分はじかれる書き方
  const memoChild = useMemo(() => {
    return <Child count1={childCount1} count2={childCount2} />
    // eslint-disable-next-line
  }, [childCount1])

  return (
    <div style={{ padding: '50px' }}>
      <h1>useMemoの第二引数に入れるべき値を入れなかった場合</h1>
      <p>setChildCount2してもChildコンポーネントは再レンダリングされない</p>
      <Header />
      <button
        type="button"
        onClick={() => {
          setParentCount(parentCount + 1)
        }}
      >
        Parent count up
      </button>
      <button
        type="button"
        onClick={() => {
          setChildCount1(childCount1 + 1)
        }}
      >
        Child1 count up
      </button>
      <button
        type="button"
        onClick={() => {
          setChildCount2(childCount2 + 1)
        }}
      >
        Child2 count up
      </button>
      <p>Parent：{parentCount}</p>
      {memoChild}
    </div>
  )
}
