import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error('this is error page.')

  if (isRouteErrorResponse(error)) {
    console.error(error)
    if (error.status === 401) {
      // ...
    } else if (error.status === 404) {
      // ...
    }
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>
            {error.statusText || (error.data?.message && error.data?.message)}
          </i>
        </p>
      </div>
    )
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    )
  } else {
    return <></>
  }
}
