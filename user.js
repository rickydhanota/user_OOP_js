class BankAccount{
    constructor(intRate = 0.08, balance = 0) {
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

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.account = new BankAccount();
        return this;
    }

    makeWithdrawal(amount){
        this.account.withdraw(amount);
        return this;
    }

    makeDeposit(amount){
        this.account.deposit(amount);
        return this;
    }

    displayBalance(){
        console.log(`Name: ${this.name}, Account Balance: $${this.account.balance}, Interest Rate: ${this.account.intRate}`);
        this.account.displayAccountInfo()
        return this;
    }

    transferMoney(otherUser, amount){
        if(this.account.balance < amount){
            console.log("Not enough funds");
            return this;
        }
        else{
            this.account.balance -= amount;
            otherUser.account.balance += amount;
            return this;
        }
    }
}


const ricky = new User("Ricky Dhanota", "rickdhanota@gmail.com");
const sukhpreet = new User("Sukhpreet Dhanota", "preetxgill@gmail.com");

ricky.makeDeposit(200).makeDeposit(100).makeDeposit(300).displayBalance().makeWithdrawal(100).displayBalance();
// ricky.transferMoney(sukhpreet, 100);
// sukhpreet.displayBalance();
// ricky.displayBalance();