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
            $link = $("[data-link]"),
            $loader = $(".loader"),
            $spinner = $(".spinner"),
            spinnerHeight = $spinner.outerHeight(),
            vpHeight = $window.height(),

            // Initial setup
            wskAjaxLoad();

        // Event delegation

    });

    // Functions
    function wskAjaxLoad() {
        $link.on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            var ajaxTopOffset = ($ajaxcontainer.offset().top - 100);
            $window.scrollTop(0);
            var $this = $(this),
                linkURL = $this.attr("data-link"),
                dataEffect;
            dataEffect = $this.attr("data-effect");
            console.log(linkURL);
            if (!$this.hasClass("active-link")) {

                $this.addClass("active-link");
                $link.not($this).removeClass("active-link");
                if (dataEffect === "ajax" && !$this.hasClass("loaded")) {
                    $this.addClass("loaded");
                    $link.not($this).removeClass("loaded");
                    $.ajax({
                        url: linkURL,
                        type: "GET",
                        beforeSend: startFn,
                        success: successFn,
                        error: errorFn,
                        complete: completeFn
                    });
                } else if(dataEffect === "scroll"){
                    var scrollOffset = ($(linkURL).offset().top-100);
                    console.log(scrollOffset);
                    $window.scrollTop(scrollOffset);
                }else if(dataEffect === "none"){
                    window.location = linkURL;
                }
            }
        });
    }

    function startFn() {
        $spinner.toggleClass("hide");
        var $content = $ajaxcontainer.find('[data-type="page"]');
        $content.toggleClass("invisible");
        $ajaxcontainer.removeAttr("style");
    }

    function successFn(result) {
        setTimeout(function () {
            $spinner.toggleClass("hide");
            var prevContent = $ajaxcontainer.find('[data-type="page"]');
            prevContent.remove();
            var $content = $(result).find('[data-type="page"]');
            $ajaxcontainer.append($content);
            var contentHeight = $content.outerHeight() + $ajaxcontainer.outerHeight();
            console.log(contentHeight);
            $ajaxcontainer.css("height", contentHeight);
            setTimeout(function () {
                $content.toggleClass("invisible");
            }, 1000);
        }, 2000);
    }

    function errorFn(xhr, status, strErr) {
        console.log("There was an error!");
    }

    function completeFn(xhr, status) {
        console.log("The request is complete!");
    }


}(window.jQuery, window, document)); // Fully reference jQuery after this point.