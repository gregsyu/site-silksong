$(document).ready(() => {
    $('.filter-btn').click(function(){
        const category = $(this).data('category');

        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        if(category === 'all'){
            $('.gallery-item').fadeIn(300);
        } else {
            $('.gallery-item').hide();
            $(`.gallery-item[data-item="${category}"]`)
            .fadeIn(300);
        }
    });
});