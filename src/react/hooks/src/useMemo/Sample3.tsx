import { useEffect, useMemo, useState } from 'react'
import { Header } from './Header'

type ChildProps = {
  count1: number
}

const Child = ({ count1 }: ChildProps): JSX.Element => {
  useEffect(() => {
    // eslint-disable-next-line
    console.log('Childがレンダリングされたよ')
  })

  return (
    <p>
      Child1：{count1}
    </p>
  )
}

export const Parent = () => {
  const [parentCount, setParentCount] = useState<number>(0)
  const [childCount1, setChildCount1] = useState<number>(0)

  useEffect(() => {
    // eslint-disable-next-line
    console.log('Parentがレンダリングされたよ')
  })

  const memoChild = useMemo(
    () => {
      return <Child count1={childCount1} />
    },
    [childCount1]
  )

  return (
    <div style={{ padding: '50px' }}>
      <h1>Parent count upで親のstateを変更してもChildは再レンダリングされない</h1>
      <p>Child1 count upすると両方が再レンダリングされる</p>
      <p>useMemoの第二引数が変更されない限りChildは再レンダリングされない</p>
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
      <p>
        Parent：{parentCount}
      </p>
      {memoChild}
    </div>
  )
}
