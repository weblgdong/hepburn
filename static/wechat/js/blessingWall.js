$(function() {
    $('.status').on('click', function() {
        var _this = $(this);
        var id = $(this).attr('data-id');
        $.ajax({
            url: '/laud',
            type: 'POST',
            data: {
                id: id
            },
            success: function(res) {
                if (res.errNo === 'ok') {
                    $(_this).addClass('active');
                    $('#' + res.id).html(res.praise);
                }
            }
        });
    })
});