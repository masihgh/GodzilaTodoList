import NavigationMenu from "../components/NavigationMenu";

function MainLayout({children}) {
    return (
        <div className="App">
            {children}
            <NavigationMenu />
        </div>
    );
}

export default MainLayout;