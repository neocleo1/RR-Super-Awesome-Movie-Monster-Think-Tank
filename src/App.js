import React, { Suspense } from 'react'
import Loader from 'react-loader-spinner'
import './App.css'

function App() {
  const AboutUs = React.lazy(() => import('./AboutUs'))
  const Packages = React.lazy(() => import('./Packages'))

  return (
    <div className="App">
      <div>
        <Suspense
          fallback={
            <Loader
              type="Bars"
              color="#FF00FF"
              height={200}
              width={200}
              style={{ margin: '0 auto' }}
            />
          }
        >
          <h1>Hello World</h1>
        </Suspense>
      </div>
    </div>
  )
}

export default App
