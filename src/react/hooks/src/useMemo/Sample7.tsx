import { useEffect, useMemo, useState } from 'react'
import { Header } from './Header'

type ChildProps = {
  count1: number
  handleClick: () => void
}

const Child = ({ count1, handleClick }: ChildProps): JSX.Element => {
  useEffect(() => {
    // eslint-disable-next-line
    console.log('Childがレンダリングされたよ')
  })

  return (
    <>
      <p>Child1：{count1}</p>
      <button
        type="button"
        onClick={() => {
          handleClick()
        }}
      >
        ボタン
      </button>
    </>
  )
}

export const Parent = () => {
  const [parentCount, setParentCount] = useState<number>(0)
  const [childCount1, setChildCount1] = useState<number>(0)

  useEffect(() => {
    // eslint-disable-next-line
    console.log('Parentがレンダリングされたよ')
  })

  const handleClick = () => {
    // eslint-disable-next-line
    console.log('click button')
  }

  // NOTE: useMemoの第二引数にはchildCount2が基本的には入ってるべきでeslint-plugin-react-hooks パッケージの exhaustive-deps ルール入れると多分はじかれる書き方
  const memoChild = useMemo(() => {
    return <Child count1={childCount1} handleClick={handleClick} />
    // eslint-disable-next-line
  }, [setChildCount1])

  return (
    <div style={{ padding: '50px' }}>
      <h1>useMemoでpropsにcallback関数を渡した場合</h1>
      <p>子のコンポーネントは再レンダリングされない(useMemoの第二引数にcallback関数入れてないから当たり前っちゃ当たり前)</p>
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
      <p>Parent：{parentCount}</p>
      {memoChild}
    </div>
  )
}
