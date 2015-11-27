var app = angular.module('app', []);
    app.controller('MainCtrl', function ($scope, $element) {

        var change_ticker_time 	= 5000;
        var transition_speed	= 300;
        var ticketWrapper = angular.element('.ticket-text'),
            ticketSlide   = ticketWrapper.children('.ticket-slider'),
            ticketLen     = ticketSlide.length,
            i             = 0;
        var transitionStyle = 'rand';


        // OPTIONS: 'rand', 'slideLeft', 'slideRight', 'fadeIn', 'bigEntrance', 'pullUp', 'pullDown', 'stretchLeft', 'stretchRight'
        var fxArr       = ['slideLeft', 'slideRight', 'fadeIn', 'bigEntrance', 'pullUp', 'pullDown', 'stretchLeft', 'stretchRight'];

        var ticketSlideMove = function(){
            ticketSlide.eq(i).fadeOut(transition_speed, function(){
                i +=1;
                if(i === ticketLen){
                    i = 0;
                }
                if(transitionStyle == 'rand'){
                    var randfx = fxArr[Math.floor(Math.random() * fxArr.length)];
                    transitionStyle = randfx;
                }
                ticketSlide.eq(i).fadeIn(transition_speed).addClass(transitionStyle);
            })
        }


        ticketSlide.not(':first').hide();
        setInterval(ticketSlideMove, change_ticker_time);

    });
