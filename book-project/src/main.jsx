
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BookProvider from './context/BookContext.jsx'
import FavoriteProvider from './context/FavoriteContext.jsx'
import BasketProvider from './context/BasketContext.jsx'

createRoot(document.getElementById('root')).render(
  
<BasketProvider>
<FavoriteProvider>
    <BookProvider>
      <App />
    </BookProvider>
  </FavoriteProvider>
</BasketProvider>
,
)
