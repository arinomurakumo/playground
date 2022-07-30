function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const AlwaysSuspend: React.VFC = () => {
  // console.log('AlwaysSuspend is rendered')

  // throwされたPromiseはサスペンドがいつ終了すると見込まれるかを示す
  throw sleep(1000)
}
