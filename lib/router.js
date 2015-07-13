Router.configure({
    yieldTemplates: {
        'myHeader': {to: 'header'},
        'myFooter': {to: 'footer'}
    }
});

Router.route('/', {
    name: 'index',
    path: '/',
    layoutTemplate: 'index_content',
    yieldTemplates: {
        'myHeader': {to: 'header'},
        'myFooter': {to: 'footer'}
    }
});

Router.route('login', {
    name: 'login',
    path: '/login',
    layoutTemplate: 'login_form'
});

Router.route('/register', {
    name: 'register',
    path: '/register',
    layoutTemplate: 'register_form'
});