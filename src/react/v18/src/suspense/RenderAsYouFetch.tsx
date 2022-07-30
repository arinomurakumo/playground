// 「ローディング中のデータ」という概念を表す値が必要
// コンポーネントのレンダリングは同期関数なので、同期的に取得された値を取り出せることが必要
// Promiseをラップして、データ取得済の場合は同期的に値を取り出せるオブジェクトを作ってみましょう

import { Suspense, useState } from 'react';

async function fetchData1(): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 1000)));
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
}

type LoadableState<T> =
  | {
      status: 'pending';
      promise: Promise<T>;
    }
  | {
      status: 'fulfilled';
      data: T;
    }
  | {
      status: 'rejected';
      error: unknown;
    };

export class Loadable<T> {
  #state: LoadableState<T>;
  constructor(promise: Promise<T>) {
    this.#state = {
      status: 'pending',
      promise: promise.then(
        (data) => {
          this.#state = {
            status: 'fulfilled',
            data,
          };
          return data;
        },
        (error) => {
          this.#state = {
            status: 'rejected',
            error,
          };
          throw error;
        }
      ),
    };
  }
  getOrThrow(): T {
    switch (this.#state.status) {
      case 'pending':
        throw this.#state.promise;
      case 'fulfilled':
        return this.#state.data;
      case 'rejected':
        throw this.#state.error;
    }
  }
}

export const DataLoader: React.VFC<{
  data: Loadable<string>;
}> = ({ data }) => {
  const value = data.getOrThrow();
  return (
    <div>
      <div>Data is {value}</div>
    </div>
  );
};

export const RenderAsYouFetch: React.VFC = () => {
  const [data1] = useState(() => new Loadable(fetchData1()));
  const [data2] = useState(() => new Loadable(fetchData1()));
  const [data3] = useState(() => new Loadable(fetchData1()));
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader data={data1} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader data={data2} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader data={data3} />
      </Suspense>
    </div>
  );
};
