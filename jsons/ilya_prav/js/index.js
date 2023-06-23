
$(function(){
    $.fn.digits = function(){ 
        return this.each(function(){ 
            $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        })
    }
    $('.digits').digits();
    $('.milCar').digits();
    $('.sign-in_item-pic, .sign-in_item-desc').click(function(e){
        e.preventDefault();
        $('.sign-in_item').toggleClass("sign-in-active")
        $('.sign-in_item-dropdown').toggleClass('dropdown-active');
    });

    // mobile menu
    $('.mobile_nav').click(function(e){
        e.preventDefault();
        $(this).toggleClass('mobile_nav-active');
        $('.nav_menu').toggleClass('nav_menu-active');
    });
    var win = $('.win-overlay, .win_modal');
  
    $('.continue').click(function(e){
        e.preventDefault();
        win.removeClass('active');
    });
    // авторизация модальное окно
    var donate = $('#donate');
    $('#donate').click(function(e){
        alert("Сработало");
        e.preventDefault();
        donate.addClass('active');
    });
    var signin = $('.sign-in-overlay, .sign-in_modal');
    $('.sign-in').click(function(e){
        e.preventDefault();
        signin.addClass('active');
    });
    $('.close-modal').click(function(e){
        e.preventDefault();
        signin.removeClass('active');
    });
    // авторизация модальное окно
    $('.recovery').click(function(e){
        e.preventDefault();
        $('form').animate({ opacity: "toggle", left: "toggle"}, "slow");
    });
    $('.buttonLike').click(function(){
      
        if($(this).hasClass('activeLike')){
            alert("Вы уже оценили запись");
        }else{ 
            var id_news = $('#news_id').val();
            var dataString = 'action=like_up&n_id='+id_news;
                //alert(dataString);
                $.ajax({
                    type: "POST",
                    url: "/application/controllers/profile.php",
                    data: dataString,
                    cache: false,
                    success: function(data){
                        console.log(data);
                        json = jQuery.parseJSON(data);
                            
                        if(json.status == "success") {
                            $('.buttonLike').html("<i class='fas fa-thumbs-up'></i> Вам нравится!");
                            $('.buttonLike').addClass('activeLike');
                            $('#count_likes').html(json.count);
                        }
                        else alert("Вы уже оценили запись");
                
                    }
                });
        };
        
    });
   
});

function redirect(url) {
    window.location.href = url;
}
