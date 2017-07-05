
(function($){
    
    $.fn.passwordstrength = function(options) {
        
        var settings = $.extend({
            'minlength': 8,
            'number'   : true,
            'capital'  : true,
            'special'  : true,
            'labels'   : {
            	 'general'   : 'Password Guidelines :',
                 'generalHeader'   : 'The Password must have -',
                 'minlength' : 'At least {{minlength}} characters',
                'number'    : 'At least one number',
                'capital'   : 'At least one uppercase letter',
                'special'   : 'At least one special character'
            }
        }, options);

        
        return this.each(function(){
            
            var $this = $(this);

            $('<div id="passwordstrength-wrap" />').insertAfter($this);
            $('#passwordstrength-wrap').append('<font color = "black" ><strong ><h3>'+settings.labels.general+'</h3></strong></font><ul></ul>');
           $('#passwordstrength-wrap ul').append('<font color = "black">'+settings.labels.generalHeader+'</font>');

            if (settings.minlength > 0)
                $('#passwordstrength-wrap ul').append('<li id="length">'+settings.labels.minlength.replace('{{minlength}}', settings.minlength)+'</li>');
            if (settings.number)
                $('#passwordstrength-wrap ul').append('<li id="pnum">'+settings.labels.number+'</li>');
            if (settings.capital)
                $('#passwordstrength-wrap ul').append('<li id="capital">'+settings.labels.capital+'</li>');
            if (settings.special)
                $('#passwordstrength-wrap ul').append('<li id="spchar">'+settings.labels.special+'</li>');


            $this.on('focus keyup', function() {
                var value = $this.val();

                $('#passwordstrength-wrap').fadeIn(400);

                // password length
                if (value.length >= 0)
                {
                    if (value.length >= settings.minlength)
                        $('#passwordstrength-wrap #length').addClass('valid');
                    else
                        $('#passwordstrength-wrap #length').removeClass('valid');
                }
         
                // at least 1 digit
                if (settings.number)
                {
                    if (value.match(/\d/))
                        $('#passwordstrength-wrap #pnum').addClass('valid');
                    else
                        $('#passwordstrength-wrap #pnum').removeClass('valid');
                }
         
                // at least 1 capital
                if (settings.capital)
                {
                    if (value.match(/[A-Z]/))
                        $('#passwordstrength-wrap #capital').addClass('valid');
                    else
                        $('#passwordstrength-wrap #capital').removeClass('valid');
                }
         
                // at least 1 special character
                if (settings.special)
                {
                    if (value.match(/[^\w]/))
                        $('#passwordstrength-wrap #spchar').addClass('valid');
                    else
                        $('#passwordstrength-wrap #spchar').removeClass('valid');
                }
            });


            $this.blur(function () {
                $('#passwordstrength-wrap').fadeOut(400);
            });
        });
    }

})(jQuery);