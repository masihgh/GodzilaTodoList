import NavigationMenu from "../components/NavigationMenu";

function MainLayout({ children }) {
    return (
        <div className="container mx-auto px-4 pt-5">
            <main className="mb-20">
                {children}
            </main>
            <NavigationMenu />
        </div>
    );
}

export default MainLayout;