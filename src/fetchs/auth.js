const login = (values) => {
    localStorage.setItem('username', values.username);
    localStorage.setItem('password', values.password);
};
const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
};
const verifyLoggedIn = () => {
    return !!localStorage.getItem('username')&& !!localStorage.getItem('password');
};

const authFetcher = {
    login,
    verifyLoggedIn,
    logout
};

export default authFetcher;