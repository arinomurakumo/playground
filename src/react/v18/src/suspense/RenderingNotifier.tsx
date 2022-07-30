type Props = {
  name: string
}

export const RenderingNotifier: React.VFC<Props> = ({ name }) => {
  // レンダリングの一貫性を保つにはサスペンド終了時にSuspenseの中を全部再レンダリングしなければならない
  console.log(`${name} is rendered`)
  // サスペンド解除時はサスペンドしたSuspenseの中身が再レンダリングされる
  return (
    <p>
      {name} is rendered
    </p>
  )
}
