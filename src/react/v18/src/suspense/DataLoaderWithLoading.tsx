import { useState } from 'react'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchData1(): Promise<string> {
  await sleep(1000)
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`
}

// データをロードするコンポーネントなのに初手でサスペンドしない
// Suspenseの利点は「コンポーネントのレンダリングが成功したならばデータの表示にも成功している
export const DataLoaderWithLoading: React.VFC = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<string | null>(null)
  // dataがまだ無ければローディングを開始する
  if (loading && data === null) {
    // fetchData1()には1秒かかるので1秒後までDataLoaderがサスペンドしたままであると思いきや、
    // 実はPromise解決によるリトライより前にステートが変更されると、DataLoaderコンポーネントはその時点で再レンダリングされます
    sleep(500).then(() => setData('boom!'))
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
