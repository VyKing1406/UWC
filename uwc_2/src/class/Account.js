class Account {
    constructor() {
        this.id = null;
        this.userName = '';
        this.passWord = '';
        this.loginStatus = false;
        this.backOfficer = false;
    }
    logIn(userName, password) {}
    logOut() {}
    setBackOfficer(check = false) {
        this.backOfficer = check;
        return;
    }
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
    getBackOfficer() {
        return this.backOfficer;
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
