import { useEffect, useState } from 'react'
import { Header } from './Header'

const NothingPropsChild = (): JSX.Element => {
  useEffect(() => {
    // eslint-disable-next-line
    console.log('NothingPropsChildがレンダリングされたよ')
  })

  return <p>propがないコンポーネントだよ</p>
}

export const Parent = () => {
  const [parentCount, setParentCount] = useState<number>(0)

  useEffect(() => {
    // eslint-disable-next-line
    console.log('Parentがレンダリングされたよ')
  })

  return (
    <div style={{ padding: '50px' }}>
      <h1>子コンポーネントが親コンポーネントのstateに依存していなくても再レンダリングされる</h1>
      <Header />
      <button
        type="button"
        onClick={() => {
          setParentCount(parentCount + 1)
        }}
      >
        Parent Count up
      </button>
      <p>
        Parent：{parentCount}
      </p>
      <NothingPropsChild />
    </div>
  )
}
