import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>
      <Header />
      <div className="pt-24">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
