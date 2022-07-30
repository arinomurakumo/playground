import { Suspense, useState } from 'react'

import { AlwaysSuspend } from './AlwaysSuspend'
import { SometimesSuspend } from './SometimesSuspend'
import { RenderingNotifier } from './RenderingNotifier'
import { DataLoader } from './DataLoader'
import { DataLoaderWithLoading } from './DataLoaderWithLoading'
import { DataLoaderWithMemo } from './DataLoaderWithMemo'
import { DataFetchingExternal } from './DataFetchingExternal'
import { DataFetchingExternalWithHooks } from './DataFetchingExternalWithHooks'
import { DataFetchingExternalWithCache1, DataFetchingExternalWithCache2 } from './DataFetchingExternalWithCache'
import { DataFetchingExternalWithHooksCache1, DataFetchingExternalWithHooksCache2 } from './DataFetchingExternalWithHooksCache'
import { RenderAsYouFetch } from './RenderAsYouFetch'

const SuspenseComponent = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl">React App!</h1>
        <p>外に配置したRenderingNotifierは再レンダリングされません</p>
        <RenderingNotifier name="outside-Suspense" />
        <hr />
        <Suspense fallback={<p>AlwaysSuspend Loading...</p>}>
          <p>ここは表示される？</p>
          <AlwaysSuspend />
        </Suspense>
      </div>
      <hr />
      <Suspense fallback={<p>SometimesSuspend Loading...</p>}>
        <p>ここは表示される？</p>
        <SometimesSuspend />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <SometimesSuspend />
        <p>サスペンド解除時はSuspenseの中に配置したRenderingNotifierは巻き込まれて再レンダリングされた</p>
        <RenderingNotifier name="inside-Suspense" />
        <button className="border p-1" onClick={() => setCount(c => c + 1)}>
          {count}
        </button>
      </Suspense>
      <hr />
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoaderWithLoading />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoaderWithMemo />
      </Suspense>
      <ul>
        <li>最初のレンダリングでサスペンドしたコンポーネントはステートなどを保持できない。</li>
        <li>
          マウント済みのコンポーネントがサスペンドした場合、Promise解決による再レンダリング以外にステート更新などによる再レンダリングでもサスペンドが解除される。
        </li>
        <li>再レンダリング時にサスペンドした場合、その再レンダリングの最中にコンポーネントの記憶領域に書き込まれたものは失われる。</li>
      </ul>
      <hr />
      <p>
        コンポーネントの外部にデータを持つ
      </p>
      <Suspense fallback={<p>Loading...</p>}>
        <DataFetchingExternal />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <DataFetchingExternalWithHooks />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <DataFetchingExternalWithCache1 />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <DataFetchingExternalWithCache2 />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <DataFetchingExternalWithHooksCache1 />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <DataFetchingExternalWithHooksCache2 />
      </Suspense>
      <hr />
      <RenderAsYouFetch />
    </>
  )
}

export default SuspenseComponent
