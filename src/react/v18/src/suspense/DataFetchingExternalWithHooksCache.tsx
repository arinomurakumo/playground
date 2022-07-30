const dataMap: Map<string, unknown> = new Map()

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchData1(): Promise<string> {
  await sleep(1000)
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`
}

export function useData<T>(cacheKey: string, fetch: () => Promise<T>): T {
  const cachedData = dataMap.get(cacheKey) as T | undefined
  if (cachedData === undefined) {
    throw fetch().then(d => dataMap.set(cacheKey, d))
  }
  return cachedData
}

export const DataFetchingExternalWithHooksCache1: React.VFC = () => {
  const data = useData('DataLoader1', fetchData1)

  return (
    <div>
      <div>
        Data is {data}
      </div>
    </div>
  )
}

export const DataFetchingExternalWithHooksCache2: React.VFC = () => {
  const data = useData('DataLoader2', fetchData1)

  return (
    <div>
      <div>
        Data is {data}
      </div>
    </div>
  )
}
