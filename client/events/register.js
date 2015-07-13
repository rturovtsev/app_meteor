Template.register.events({
    "submit form": function(e) {
        var email = e.target.registerEmail.value,
            password = e.target.registerPassword.value;

        Accounts.createUser({
            email: email,
            password: password
        });

        return false;
    }
});