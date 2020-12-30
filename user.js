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
    constructor(intRate, balance) { // don't forget to add some default values for these parameters!
    // your code here! (remember, this is where we specify the attributes for our class)
	// don't worry about user info here; we'll involve the User class soon
    }
    deposit(amount) {
	// your code here
    }
    withdraw(amount) {
	// your code here
    }
    displayAccountInfo() {
	// your code here
    }
    yieldInterest() {
	// your code here
    }
}

const ricky = new User("Ricky Dhanota", "rickdhanota@gmail.com");
const sukhpreet = new User("Sukhpreet Dhanota", "preetxgill@gmail.com");

ricky.makeDeposit(200).makeDeposit(100).makeDeposit(300).displayBalance().makeWithdrawal(100).displayBalance().transferMoney(sukhpreet, 100);
sukhpreet.displayBalance();
ricky.displayBalance();