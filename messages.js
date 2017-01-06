// <script>
//     jQuery(document).ready(function($){
//         $.getJSON("//londonderry.mallmaverick.com/api/v3/londonderry/all.json").done(function(data){
//             var messages = data.messages.bulletin
//             if (messages != undefined){
//                 if (messages.length == 0){
//                     $('.news-ticker').hide();
//                 }
//                 else{
//                     $.each(messages, function(key ,val){
//                         $('#bulletin').append('<li><strong>' + val.messages[0].title + ' </strong>'  + val.messages[0].body +  '</li>')
//                     });
//                     if ($('#bulletin li').length > 1){
//                         var tickerSpeed = $('.news-ticker').attr('data-speed');
//                         $('.news-ticker ul li').hide();
//                         $('.news-ticker ul li:first').show();
                        
//                         var currentSlide = 0;
//                         var slideCount = ($('.news-ticker li').length) - 1;
                        
//                         var startTicker = setInterval(function(){
                        
//                             $('.news-ticker ul li').eq(currentSlide).fadeOut(500)
                            
//                             if (currentSlide < slideCount) {
//                                 currentSlide += 1;
//                             } else {
//                                 currentSlide = 0;
//                             }
                            
//                             $('.news-ticker ul li').eq(currentSlide).fadeIn(500)
                        
//                         }, tickerSpeed);
                        
//                     }
//                 $('.news-ticker').show();
//                 }
//             }
//             else{
//                 $('.news-ticker').hide();
//             }
//         });
//     });

// </script>