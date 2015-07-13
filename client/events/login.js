Template.login.events({
    "submit form": function(e) {
        var email = e.target.registerEmail.value,
            password = e.target.registerPassword.value;

        Meteor.loginWithPassword(email, password);

        return false;
    }
});