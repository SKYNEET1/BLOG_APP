import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Services from './Components/Services/Services.jsx'
import Contact from './Components/Contact/Contact.jsx'
import BlogPage from './Components/Blog/BlogPage.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store/Store.jsx'
import Readlatter from './Components/ReadLatter/Readlatter.jsx'

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path="/" element={<App />} >
      <Route index element={<Home />}/>
      <Route path='blog' element={<Blog />}/>
      <Route path='blog/:id' element={<BlogPage />}/>
      <Route path='services' element={<Services />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='about' element={<About />}/>
      <Route path='readlatter' element={<Readlatter/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
