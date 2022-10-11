import login from './login.service.js';
import logout from './logout.service.js';
import refreshToken from './refreshToken.service.js';
import register from './register.service.js';

const authService = {
    register,
    login,
    logout,
    refreshToken,
};
export default authService;
