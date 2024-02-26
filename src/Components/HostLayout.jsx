import { Outlet } from 'react-router-dom'
import HostNavbar from './HostNavbar'

const HostLayout = () => {
    return (
        <>
            <HostNavbar />
            <Outlet />
        </>
    )
}

export default HostLayout