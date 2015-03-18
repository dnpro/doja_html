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
        $window.on("click", function (e) {
            e.preventDefault();
        });
        $loader.fadeIn("slow");
        $loader.css({
            top: vpHeight / 2
        });



        var gridContainer = $('#grid-container'),
            wrap, filtersCallback;


        /*********************************
            init cubeportfolio
         *********************************/
        gridContainer.cubeportfolio({
            defaultFilter: '*',
            animationType: 'fadeOutTop',
            gapHorizontal: 0,
            gapVertical: 0,
            gridAdjustment: 'responsive',
            caption: 'zoom',
            mediaQueries: [{
                width: 1600,
                cols: 5
        }, {
                width: 1200,
                cols: 4
        }, {
                width: 800,
                cols: 3
        }, {
                width: 500,
                cols: 2
        }, {
                width: 320,
                cols: 1
        }],
            caption: 'zoom',
            displayType: 'lazyLoading',
            displayTypeSpeed: 100,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        });




        $window.on("load", function () {
            setTimeout(hideLoader, 1000);
        });

        $window.on("load resize", function () {
            var ajaxchildrenHeight = $ajaxcontainer.find("[data-type='page']").outerHeight();
            $ajaxcontainer.css({
                height: ajaxchildrenHeight
            });
        });

        // Event delegation

    });

    // Functions

    function hideLoader() {
        $loader.fadeOut("1000");
        $window.resize();
        setTimeout(function () {
            $frontpage.fadeIn("fast");
            $loader.remove();
            $window.resize();
            //$(".mainmenu [data-link='despre.html']").click();
        }, 1200);
    }


}(window.jQuery, window, document)); // Fully reference jQuery after this point.