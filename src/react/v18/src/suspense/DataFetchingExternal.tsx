let data: string | undefined

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchData1(): Promise<string> {
  await sleep(1000)
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`
}

export const DataFetchingExternal: React.VFC = () => {
  // dataがまだ無ければローディングを開始する
  if (data === undefined) {
    // 一度データを取得できてしまえば再取得が起きることはなく、ある意味冪等な副作用（？）となっているのでそこまで大きな問題ではありません
    throw fetchData1().then(d => (data = d))
  }
  // データがあればそれを表示
  return (
    <div>
      <div>
        Data is {data}
      </div>
    </div>
  )
}
