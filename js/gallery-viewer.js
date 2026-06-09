$(document).ready(() => {
    $('.gallery-item img').click(function(){
        const imageSrc = $(this).attr('src');
        $('.viewer-image').attr('src', imageSrc);
        $('.image-viewer')
        .css('display', 'flex')
        .hide()
        .fadeIn(300);
        $('body').css('overflow', 'hidden');
    });
    $('.close-viewer, .image-viewer').click(function(e){
        if(
            e.target !== this &&
            !$(e.target).hasClass('close-viewer')
        ) return;
        $('.image-viewer').fadeOut(300);
        $('body').css('overflow', 'auto');
    });
    $(document).keydown(function(e){
        if(e.key === 'Escape'){
            $('.image-viewer').fadeOut(300);
            $('body').css('overflow', 'auto');
        }
    });
});