let result: string | null | undefined = null

const timeout = () =>
  new Promise(resolve => {
    setTimeout(resolve, 1000)
  })

const LazyComponent = () => {
  if (result !== null) {
    return (
      <p className="paragraph">
        {result}
      </p>
    )
  }
  throw new Promise<void>(async resolve => {
    await timeout()
    result = 'Done'
    resolve()
  })
}

export default LazyComponent
