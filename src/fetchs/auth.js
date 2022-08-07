const login = (values) => {
    localStorage.setItem('sessionData', values);
};
const logout = () => {
    localStorage.removeItem('sessionData');
};
const verifyLoggedIn = () => {
    return !!localStorage.getItem('sessionData');
};

const authFetcher = {
    login,
    verifyLoggedIn,
    logout
};

export default authFetcher;