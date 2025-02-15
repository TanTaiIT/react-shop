import Header from "@common/Header/Header"
import Footer from "@common/Footer/Footer"
import { Outlet } from "react-router-dom"
interface MainLayoutProps {
  children?: React.ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <>
      <Header />
      <div className="mb-20">
        {children}
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout