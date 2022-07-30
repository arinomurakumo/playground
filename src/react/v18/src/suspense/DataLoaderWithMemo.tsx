import { useMemo, useState } from 'react'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchData1(): Promise<string> {
  await sleep(1000)
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`
}

export const DataLoaderWithMemo: React.VFC = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<string | null>(null)

  // ボタンを押した直後にloadingがtrueの状態でレンダリングが行われてuseMemoの関数が呼び出されたものの、
  // そのレンダリングはサスペンドした
  // メモ化内容（useMemoの結果）が捨てられたことを意味
  useMemo(
    () => {
      if (loading) {
        console.log('loading is true')
      }
      return 1
    },
    [loading]
  )

  // ローディングフラグが立っていてdataがまだ無ければローディングを開始する
  if (loading && data === null) {
    throw fetchData1().then(setData)
  }
  // データがあればそれを表示
  return (
    <div>
      <div>
        Data is {data}
      </div>
      <button className="border p-1" onClick={() => setLoading(true)}>
        load
      </button>
    </div>
  )
}
