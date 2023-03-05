class Account {
    constructor() {
        this.id = null;
        this.userName = '';
        this.passWord = '';
        this.loginStatus = false;
    }
    logIn(userName, password) {}
    logOut() {}
    setAccountId(id = '') {
        this.id = id;
        return;
    }
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
    getAccountId() {
        return this.id;
    }
    viewAccountInfo() {}
    changeAccountInfo() {}
    deleteAccount() {}
    authenticate() {}
}

export default Account;
