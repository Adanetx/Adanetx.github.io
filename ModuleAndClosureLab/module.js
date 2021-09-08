(function() {
    'use strict'


    const creatingNewAccount = (function() {

        let nameOfTheAccount;
        let amount;

        return {
            createAccount: function(name, amounts) {
                nameOfTheAccount = name;
                amount = amounts;

                return { name: nameOfTheAccount, balance: amount };
            }
        }

    })();

    const accountHolder = [];

    function createAccounts() {
        const newAccount = creatingNewAccount.createAccount(document.getElementById('name').value, document.getElementById('deposit').value);
        accountHolder.push(newAccount);
        document.getElementById('area').value = '';

        for (const account of accountHolder) {
            document.getElementById('area').value += `Account Name:${account.name}, Balance:${account.balance}`
        }
    }

    window.onload = function() {
        document.getElementById('create').onclick = createAccounts
    }

})();