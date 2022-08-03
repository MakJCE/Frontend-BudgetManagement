const login = (values) => {
    localStorage.setItem('sessionData', values);
};
const verifyLoggedIn = () => {
    return !!localStorage.getItem('sessionData');
};

const authFetcher = {
    login,
    verifyLoggedIn
};

export default authFetcher;