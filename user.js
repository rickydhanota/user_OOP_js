class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
        this.accountBalance = 0;
    }

    makeWithdrawal(amount){
        this.accountBalance -= amount;
    }

    makeDeposit(amount){
        this.accountBalance += amount;
    }
}