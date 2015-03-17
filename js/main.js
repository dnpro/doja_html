(function ($, window, document) {

    // The $ is now locally scoped 
    $(function () {

        // DOM ready!
        //Variables
        $document = $(document),
            $window = $(window),
            $body = $("body"),
            $frontpage = $body.find("#frontpage"),
            $ajaxcontainer = $("#ajax-container"),
            ajaxcontainerHeight = $ajaxcontainer.outerHeight(),
            $loader = $(".loader"),
            $spinner = $(".spinner"),
            spinnerHeight = $spinner.outerHeight(),
            vpHeight = $window.height();

        // Initial setup
        $loader.fadeIn("slow");
        $loader.css({
            top: vpHeight / 2
        });

        $window.on("load", function () {
            setTimeout(hideLoader, 1000);
        });
        
        $window.on("resize", function(){
            $ajaxcontainer.css({
               height: $ajaxcontainer.children().outerHeight() + ajaxcontainerHeight
            });
        });

        // Event delegation

    });

    // Functions

    function hideLoader() {
        $loader.fadeOut("1000");
        setTimeout(function () {
            $frontpage.fadeIn("fast");
            $loader.remove();
            $(".mainmenu [data-link='despre.html']").click();
        }, 1200);
    }


}(window.jQuery, window, document)); // Fully reference jQuery after this point.