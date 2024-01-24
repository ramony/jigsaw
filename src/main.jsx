import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { AppStore } from './store/appStore.jsx'
import AppContext from './store/appContext.jsx'
import { buildClassMethods } from './utils/ClassUtils.jsx';

const appStore = new AppStore();
buildClassMethods(AppStore.prototype, appStore);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext.Provider value={appStore}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
)
