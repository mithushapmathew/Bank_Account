//getData()is a method present inside class bank

class Bank {
    static getData = () => {
        var accountDetails = {
            userone: { acno: 1000, balance: 10000, username: "userone", password: "testuser" },
            usertwo: { acno: 1001, balance: 5000, username: "usertwo", password: "testuser1" },
            userthree: { acno: 1002, balance: 15000, username: "userthree", password: "testuser2" }
        }
        return accountDetails;
    }
    static login = () => {
        let uname = document.querySelector("#username").value;
        let pwd = document.querySelector("#password").value;
        let datas =Bank.getData();
        if(uname in datas){
         if(datas[uname].password==pwd){
            alert("Login Successfull") 
            window.location.href="home.html"
         } else{
             alert("Incorrect Password")
         }
        } else {
            alert("No User Exist")
        }
    }
    static deposite = () => {
        let uname = document.querySelector("#uname").value;
        let pwd = document.querySelector("#pwd").value;
        let amt = Number(document.querySelector("#amount").value);
        let datas =Bank.getData();
        if(uname in datas){
         if(datas[uname].password==pwd){
             datas[uname].balance+=amt;
            alert("Your account is credited with amount "+amt+" the balance amount is "+datas[uname].balance) 
           
         } else{
             alert("Incorrect Password")
         }
        } else {
            alert("No User Exist")
        }
    }
    static withdraw = () => {
        let uname = document.querySelector("#uname").value;
        let pwd = document.querySelector("#pwd").value;
        let amt = Number(document.querySelector("#amount").value);
        let datas =Bank.getData();
        if(uname in datas){
         if(datas[uname].password==pwd){
             datas[uname].balance-=amt;
            alert("Your account is debited with amount "+amt+" the balance amount is "+datas[uname].balance) 
           
         } else{
             alert("Incorrect Password")
         }
        } else {
            alert("No User Exist")
        }
    }
}


//chk for 1000 acno exist of not

// if(1000 in accountDetails){
//     console.log(accountDetails[1000].name)
// } else{
//     console.log("Not Exist");
// }

