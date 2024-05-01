import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="h-dvh bg-primaryColor">{children}</main>
            <Footer />
        </>
    )
}

export default Layout
