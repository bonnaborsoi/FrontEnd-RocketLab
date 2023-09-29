import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SortedByProvider } from './context/SortedByContext.tsx'
import { FilterProvider } from './context/FilterContext.tsx'
import { CreateColaboratorListProvider } from './context/CreateColaboratorListContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SortedByProvider>
      <FilterProvider>
        <CreateColaboratorListProvider>
          <App />
        </CreateColaboratorListProvider>
      </FilterProvider>
    </SortedByProvider>
  </React.StrictMode>,
)
