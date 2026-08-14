import Sidebar from "./Sidebar";

const Layout = ({ children, showHeader = false }) => {
    return (
        <div className="app-layout">
            <Sidebar />

            <main className="main-content">
                <div className="page-content">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;