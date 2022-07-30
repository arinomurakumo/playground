let data: string | undefined

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchData1(): Promise<string> {
  await sleep(1000)
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`
}

function useData1(): string {
  // dataがまだ無ければローディングを開始する
  if (data === undefined) {
    throw fetchData1().then(d => (data = d))
  }
  return data
}

export const DataFetchingExternalWithHooks: React.VFC = () => {
  const data = useData1()
  return (
    <div>
      <div>
        Data is {data}
      </div>
    </div>
  )
}
