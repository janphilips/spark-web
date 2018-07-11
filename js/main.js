//Page Scroll
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 59
    }, 500);
});


//zavreni responsivniho menu po kliknuti na odkaz
$("#sidebar-wrapper").on("click", "a", null, function (e) {
    $("body").addClass('toggled');
    $('.navbar-toggle').removeClass("arrow");
});

//krizek u navbar-toggle
$('.navbar-toggle').click(function() {
    $(this).toggleClass("arrow");
});

//otevreni menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("body").toggleClass("toggled");
});

//zavreni menu
$("#hide-menu").click(function(e) {
    e.preventDefault();
    $("body").addClass("toggled");
    $(".navbar-toggle").removeClass("arrow");
});

//lang nav
$(".lang").hover(function(e) {
    e.preventDefault();
    $(this).toggleClass("open");
});

$( document ).ready(function() {

    //scrollspy pro desktop i sidebar mobile menu
    $("body").scrollspy({ target: ".scrollspy", offset: 60});

    var scollSpy2ActiveLI = "";

    $('body').on('activate.bs.scrollspy', function () {
        if (scollSpy2ActiveLI != "") {
            scollSpy2ActiveLI.removeClass('active');
        }
        var activeTab = $('.scrollspy li.active a').attr('href');
        scollSpy2ActiveLI = $('.scrollspy2 li a[href="' + activeTab + '"]').parent();
        scollSpy2ActiveLI.addClass('active');
    })

    $('body').trigger('activate.bs.scrollspy');

    //menu po najeti dolu
    $('body').waypoint(function(direction) {

        if (direction ==='down') {
            $("#main-navbar").addClass('after-scroll');
        }
    },{
        offset: '-80'
    });

    $('body').waypoint(function(direction) {

        if (direction ==='up') {
            $("#main-navbar").removeClass('after-scroll');
        }
    },{
        offset: '-80'
    });

    //animace
    $('.animate').each(function() {
        var $e = $(this);

        $e.waypoint(function() {
            $e.addClass('animated');
            if ($(window).width() > 991) {
                setTimeout( function(){
                    $e.addClass($e.data('effect'));
                }  , $e.data('delay') );
            }
            else {
                setTimeout( function(){
                    $e.addClass($e.data('effect'));
                }  , 0 );
            }
        }, {
            offset: $e.data('offset')
        });
    });

    //count number
    $('#count').waypoint(function(direction) {

        //nacitani cisel
        $('.count').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });

        this.destroy();
    },{
        offset: '75%'
    });
});

