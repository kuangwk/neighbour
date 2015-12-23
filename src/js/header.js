/* global template, MOCKS*/
(function() {

    function setTabActive(index) {
        $('.navbar-nav li').each(function() {
            $(this).removeClass('active');
        });
        $('.navbar-nav li').eq(index).addClass('active');
    }
    // listen events
    $('.js-logout').on('click', function(e) {
        $.ajax({
            url: BaseUrl + '/session',
            type: 'delete',
            success: function(data) {
                location.href = './index.html';
            }
        })
    })
    $('.js-tab-message').on('click', function(e) {
        var html_messages = template('messages', {
            messages: MOCKS.messages
        });
        $('#main').html(html_messages);
        setTabActive(1);
    });
    $('.js-post').on('click', function(e) {
        var html_post = template('post');
        $('#main').html(html_post);
        setTabActive(2);
    });
    $('.js-friends').on('click', function(e) {
        var data = {
            friends: MOCKS.friends,
            invitations: MOCKS.invitations
        };
        var html_post = template('friends', data);
        $('#main').html(html_post);
        setTabActive(3);
    });
})();
