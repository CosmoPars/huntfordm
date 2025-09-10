import React, { StrictMode, Suspense } from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import amplitude from 'amplitude-js'
import { environment } from './environments/environment'

import './app.css';
import { LoadingPage } from './app/pages/loading-page'
const App = React.lazy(() => import('./app/app'))

if ((environment as any).amplitudeApiKey) {
  amplitude.getInstance().init((environment as any).amplitudeApiKey, undefined, {
    includeReferrer: true,
  })
} else {
  // No Amplitude API key configured: make analytics a no-op
  const noopInstance = { logEvent: (_event?: any, _props?: any) => {} } as any
  ;(amplitude as any).getInstance = () => noopInstance
}

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
)
