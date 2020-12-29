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

    displayBalance(){
        console.log(`${this.username} account balance is: ${this.accountBalance}`);
    }

    transferMoney(otherUser, amount){
        if(this.accountBalance < amount){
            console.log("Not enough funds");
        }
        else{
            this.accountBalance -= amount;
            otherUser.accountBalance += amount;
        }
    }
}

const ricky = new User("Ricky Dhanota", "rickdhanota@gmail.com");
const sukhpreet = new User("Sukhpreet Dhanota", "preetxgill@gmail.com");

ricky.makeDeposit(200);
ricky.makeDeposit(100);
ricky.makeDeposit(300);
ricky.displayBalance();
ricky.makeWithdrawal(100);
ricky.displayBalance();
ricky.transferMoney(sukhpreet, 100);
sukhpreet.displayBalance();
ricky.displayBalance();