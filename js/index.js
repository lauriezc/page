var handle;
$(document).ready(function(){
    $('.left').click(function(){
        F_GalleryTransform('l');
    });
    $('.right').click(function(){
        F_GalleryTransform('r');
    });
    handle = setInterval(function(){F_GalleryTransform('r');},3000);
    $('.gallery ul').mouseover(function(){
        clearInterval(handle);
    });
    $('.gallery ul').mouseout(function(){
        handle = setInterval(function(){F_GalleryTransform('r');},3000);
    });
});

function F_GalleryTransform(direction) {
    var items = $('.gallery ul li');
    if (items.length>1) {
        var index = $('.gallery ul .active').attr('index');
        if (direction == 'r') {
            if ( parseInt(index) >= items.length-1) {
                index = 0;
            }
            else {
                index =  parseInt(index) + 1;
            }
        }
        else {
            if ( parseInt(index) <= 0) {
                index = items.length-1;
            }
            else {
                index =  parseInt(index) - 1;
            }
        }
        $(items).each(function(){
            $(this).removeClass('active');
        });
        $('.describ ul li').each(function(){
            $(this).removeClass('active');
        });
        $('.gallery').find('[index="'+ index.toString() +'"]').addClass('active');
        $('.describ').find('[index="'+ index.toString() +'"]').addClass('active');
        clearInterval(handle);
        handle = setInterval(function(){F_GalleryTransform('r');},3000);
    }
}
