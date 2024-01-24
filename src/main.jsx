import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { AppStore } from './store/appStore'
import AppContext from './store/appContext'
import { buildClassMethods } from './utils/ClassUtils';

const appStore = new AppStore();
buildClassMethods(AppStore.prototype, appStore);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext.Provider value={appStore}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
)
