import { lazy, Suspense } from 'react'

import './Lazy.css'

const LazyComponent = lazy(() => import('./LazyComponent'))

const LazyTest = () => {
  return (
    <div>
      <Suspense fallback={<p className="paragraph">Loading...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}

export default LazyTest
