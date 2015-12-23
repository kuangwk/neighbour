/* global template */
(function() {

// init ajax
$.ajaxSetup({
    error: function(data) {
        var errMsg = typeof(data === 'string') ? data : data.responseText;
        alert(data.responseText);
    }
})

checkIsLogin();

function checkIsLogin() {
    $.ajax({
        url: BaseUrl + '/users/me',
        type: 'get',
        success: function(data) {
            showIndex(data); 
        },
        error: function(data) {
            showLoginPage();
        }
    })
}

function showIndex(user) {
    var userInfo = {
        username: user.u_name
    }
    var html_header = template('header', userInfo);

    $('#header').html(html_header);

    getHoodsAndRender();

}

function getHoodsAndRender() {
    $.ajax({
        url: BaseUrl + '/hoods',
        type: 'get',
        success: function(data) {
            hoods = data.hoods;
            var html_hoods = template('hoods', {hoods: hoods});
            $('#main').html(html_hoods);
        }
    })
}

function showLoginPage() {
    var html_login = template('login');
    $('#main').html(html_login);
}

})();
