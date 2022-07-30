function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const SometimesSuspend: React.VFC = () => {
  console.log('SometimesSuspend is rendered')
  if (Math.random() < 0.5) {
    // throwされたPromiseはサスペンドがいつ終了すると見込まれるかを示す
    throw sleep(1000)
  }
  return <p>Hello, world!</p>
}
