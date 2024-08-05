import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import {AppRouter} from '@core/index'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'normalize.css'
import './main.tsx.css'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {

      // Volver a obtener datos al hacer focus
      refetchOnWindowFocus: false,

      // Tiempo de caducidad
      staleTime: 1000 * 60 * 6,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRouter /> 
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
