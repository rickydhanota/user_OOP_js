class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
        this.accountBalance = 0;
        return this;
    }

    makeWithdrawal(amount){
        this.accountBalance -= amount;
        return this;
    }

    makeDeposit(amount){
        this.accountBalance += amount;
        return this;
    }

    displayBalance(){
        console.log(`${this.username} account balance is: ${this.accountBalance}`);
        return this;
    }

    transferMoney(otherUser, amount){
        if(this.accountBalance < amount){
            console.log("Not enough funds");
            return this;
        }
        else{
            this.accountBalance -= amount;
            otherUser.accountBalance += amount;
            return this;
        }
    }
}

class BankAccount{
    constructor(intRate = 0.02, balance = 0) {
        this.intRate = intRate;
        this.balance = balance;
        return this; 
    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        this.balance -= amount;
        return this;
    }
    displayAccountInfo() {
        console.log(`${this.balance}, Interest Rate: ${this.intRate}`);
        return this;
    }
    yieldInterest() {
        this.balance += this.balance*this.intRate;
        return this;
    }
}

const ricky = new User("Ricky Dhanota", "rickdhanota@gmail.com");
const sukhpreet = new User("Sukhpreet Dhanota", "preetxgill@gmail.com");

ricky.makeDeposit(200).makeDeposit(100).makeDeposit(300).displayBalance().makeWithdrawal(100).displayBalance().transferMoney(sukhpreet, 100);
sukhpreet.displayBalance();
ricky.displayBalance();