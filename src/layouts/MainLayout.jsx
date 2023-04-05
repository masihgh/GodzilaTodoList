import NavigationMenu from "../components/NavigationMenu";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout(props) {
    return (
        <div className="container mx-auto px-4 pt-5">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <main data-theme="dark" className="mb-20">
                {props.children}
            </main>
            <NavigationMenu />
        </div>
    );
}

export default MainLayout;