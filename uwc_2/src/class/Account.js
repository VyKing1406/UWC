class Account {
    constructor() {
        this.userName = '';
        this.passWord = '';
        this.loginStatus = false;
    }
    logIn(userName, password) {}
    logOut() {}
    setAccountName(userName = '') {
        this.userName = userName;
        return;
    }
    setAccountPassWord(passWord = '') {
        this.passWord = passWord;
        return;
    }
    setLogIn(loginStatus = false) {
        this.loginStatus = loginStatus;
        return;
    }
    getAccountName() {
        return this.userName;
    }
    getAccountPassWord() {
        return this.passWord;
    }
    viewAccountInfo() {}
    changeAccountInfo() {}
    deleteAccount() {}
    authenticate() {}
}

export default Account;
