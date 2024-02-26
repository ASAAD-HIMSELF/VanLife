import './App.css'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './Components/AboutPage'
import HomePage from './Components/HomePage'
import Layout from './Components/Layout'
import VansPage from './Components/VansPage'
import ProductInformationPage from './Components/ProductInformationPage'
import SignInPage from './Components/SignInPage'
import ErrorPage from './Components/ErrorPage'
import HostLayout from './Components/HostLayout'
import HostDashboardPage from './Components/HostDashboardPage'
import HostIncomePage from './Components/HostIncomePage'
import HostVansPage from './Components/HostVansPage'
import HostReviewsPage from './Components/HostReviewsPage'
import HostProductInformationPage from './Components/HostProductInformationPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Vans" element={<VansPage />} />
          <Route path="/api/vans/:id" element={<ProductInformationPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="*" element={<ErrorPage />} />

          <Route element={<HostLayout />}>
            <Route path="/Host" element={<HostDashboardPage />} />
            <Route path="/Host/Income" element={<HostIncomePage />} />
            <Route path="/Host/Vans" element={<HostVansPage />} />
            <Route path="/api/Host/Vans/:id" element={<HostProductInformationPage />} />
            <Route path="/Host/Reviews" element={<HostReviewsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App