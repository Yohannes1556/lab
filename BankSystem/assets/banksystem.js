var accountNumber = 10002
var receiverAccountNumber = 10003
var balance = 20000;


// Thank you message function
function thankYou() {
    console.log("Thanks for using our service!");
    return;
}

// current balance Display function
function displayBalance(){
    console.log("Your current balance is: $" + balance);
    thankYou();
    return;
}

// Deposit making function
function makeDeposit(depositAmount) {
    balance = balance + parseInt(depositAmount);
    console.log("Deposit made successfully");
    displayBalance();
}

// Withdrawal making function
function makeWithdrawal(withdrawalAmount) {
    if (withdrawalAmount < 50){
            console.log("Sorry! The minimum amount that can be withdrawn at a time is 50!");
    }else if (withdrawalAmount > 6000){
            console.log("Sorry! The maximum amount that can be withdrawn at a time is 6000!");
    }else {
        if (withdrawalAmount > balance){
            console.log("Dear customer you don't have enough balance to make this much withdraw!!");
        }else{
            let decision = prompt("You are making a withdraw from the account " + accountNumber + ": y/n: ");
                if (decision == "y"){
                    balance = balance - parseInt(withdrawalAmount);
                    console.log("Withdrawal Made Successfully!!");
                    displayBalance();
                    return;
                }else{
                    console.log("Withdrawal canceled!");
                    thankYou();
                    return;
                }
        }
    }
}

// make transfer from one account to other
function makeTransfer(receiverAccountNumber, transferAmount){
    if (transferAmount > balance){
        console.log("Dear customer you don't have enough balance to make this amount of transfer!!");
    }else{
        balance = balance - transferAmount;
        console.log("Transfer made successfully! ");
        console.log("$" + transferAmount + " has been transferred from your account to the account of: " + receiverAccountNumber);
        thankYou();
        return;
    }
}

(function(){
    let choice = prompt("Choose 1 for checking balance, 2 for making deposit, 3 for making withdrawal, 4 for making transfer, any other key to cancel: ")

    // run the desired function (service)
    if (choice == "1"){
        displayBalance();
    }else if (choice == "2"){
        let depositAmount = prompt("How much will you be depositing: ");
        let decision = prompt("You are making a deposit to the account " + accountNumber + " y/n: ");
        if (decision == "y"){
            makeDeposit(depositAmount);
            return;
        }else{
            console.log("Deposit Canceled");
            thankYou();
            return;
        } 
    }else if (choice == "3"){
        let withdrawalAmount = prompt("How much would you like to withdraw: ");
        makeWithdrawal(withdrawalAmount);
    }else if (choice == "4"){
        let receiver = prompt("The receiver account number: ");
        let transferAmount = prompt("The amount to be transferred: ");

        makeTransfer(receiver, transferAmount);
    }else{
        console.log("Thank you for stopping by!");
    }
})();