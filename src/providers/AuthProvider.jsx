import authService from "../services/auth.service";
import { toast } from 'react-toastify';

function AuthProvider() {
    if (authService.getCurrentUser() === null) {
        toast.error('Authentication Faild!');
    }
}

export default AuthProvider;