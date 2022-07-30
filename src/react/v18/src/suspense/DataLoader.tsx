import { useState } from 'react'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchData1(): Promise<string> {
  await sleep(1000)
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`
}

export const DataLoader: React.VFC = () => {
  // まだマウントされていないコンポーネントのステートを更新することはできません
  const [data, setData] = useState<string | null>(null)
  // dataがまだ無ければローディングを開始する
  if (data === null) {
    throw fetchData1().then(setData)
  }
  // データがあればそれを表示
  return (
    <div>
      Data is {data}
    </div>
  )
}
