import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@app/styles/index.scss'
import App from '@app/App.tsx'
import {withRedux} from '@app/providers/withRedux.tsx'

const ReduxProvider = withRedux(App)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider/>
  </StrictMode>,
)
