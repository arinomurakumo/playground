import { useEffect, useState } from 'react'
import { Header } from './Header'

const NothingPropsChild = (): JSX.Element => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    // eslint-disable-next-line
    console.log('NothingPropsChildがレンダリングされたよ')
  })

  return (
    <div>
      <p>propがないコンポーネントだよ</p>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        NothingPropsChild count up
      </button>
      <p>
        NothingPropsChild：{count}
      </p>
    </div>
  )
}

export const Parent = () => {
  const [parentCount, setParentCount] = useState<number>(0)

  useEffect(() => {
    // eslint-disable-next-line
    console.log('Parentがレンダリングされたよ')
  })

  return (
    <div style={{ padding: '50px' }}>
      <h1>子コンポーネントのstateを更新した場合は子コンポーネントのみが再レンダリングされる</h1>
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
