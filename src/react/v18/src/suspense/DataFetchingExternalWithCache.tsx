const dataMap: Map<string, string> = new Map()

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchData1(): Promise<string> {
  await sleep(1000)
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`
}

function useData1(cacheKey: string): string {
  const cachedData = dataMap.get(cacheKey)
  if (cachedData === undefined) {
    throw fetchData1().then(d => dataMap.set(cacheKey, d))
  }
  return cachedData
}

export const DataFetchingExternalWithCache1: React.VFC = () => {
  const data = useData1('DataLoader1')

  return (
    <div>
      <div>
        Data is {data}
      </div>
    </div>
  )
}

export const DataFetchingExternalWithCache2: React.VFC = () => {
  const data = useData1('DataLoader2')

  return (
    <div>
      <div>
        Data is {data}
      </div>
    </div>
  )
}
