import { memo, useCallback, useEffect, useState } from "react"
import { Header } from './Header'

type ChildProps = {
  count1: number
  handleClick: (echo: string) => void
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
          handleClick('callbackに引数があるとき')
        }}
      >
        ボタン
      </button>
    </>
  )
}


const ChildMemo = memo<ChildProps>(({ count1, handleClick }) => {
  return <Child count1={count1} handleClick={handleClick} />
})

export const Parent = () => {
  const [parentCount, setParentCount] = useState<number>(0)
  const [childCount1, setChildCount1] = useState<number>(0)

  useEffect(() => {
    // eslint-disable-next-line
    console.log('Parentがレンダリングされたよ')
  })

  const handleClick = (echo: string) => {
    // eslint-disable-next-line
    console.log(echo)
  }
  const handleClickCallback = useCallback((echo: string) => {
    handleClick(echo)
  }, [])

  return (
    <div style={{ padding: '50px' }}>
      <h1>callbackに引数があるとき</h1>
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
      <ChildMemo count1={childCount1} handleClick={handleClickCallback} />
    </div>
  )
}
