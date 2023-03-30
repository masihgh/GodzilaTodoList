import NavigationMenu from "../components/NavigationMenu";

function MainLayout(props) {
    return (
        <div className="container mx-auto px-4 pt-5">
            <main className="mb-20">
                {props.children}
            </main>
            <NavigationMenu />
        </div>
    );
}

export default MainLayout;