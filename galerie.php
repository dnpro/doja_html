<?php /* *Gallery */ ?>


<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Galerie Foto Asociatia Gh. Doja</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" href="apple-touch-icon.png">

    <link rel="stylesheet" href="css/main.css">
    <!-- load cubeportfolio css file -->
    <link rel="stylesheet" href="css/cubeportfolio.min.css">
    <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>


</head>

<body>
    <div id=#galerie>
        <header id="gheader" class="row full">
            <div class="gnavbar small-12 medium-12 large-12 columns small-centered white">
                <div class="gmainlogo small-12 medium-12 large-12 columns">
                    <div class="glogo-container">
                        <img src="img/logo_full.svg" />
                    </div>
                </div>
            </div>
        </header>

        <div class="container">
            <div id="grid-container">
                <?php $files=glob( 'gallery/*.{jpg,png,gif}', GLOB_BRACE); foreach($files as $file) {?>
                <div class="cbp-item">
                    <!-- data-title attribute will be use to populate lightbox caption -->
                    <a class="cbp-lightbox" data-title="custom title 1" href="<?php echo $file ?>">
            <img src="<?php echo $file ?>" alt="custom alt 1" width="100%"/>
        </a>
                </div>
                <?php } ?>
            </div>
        </div>
    </div>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.js"></script>
    <script>
        window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.js"><\/script>')
    </script>

    <script src="js/plugins.js"></script>
    <script src="js/ajax.js"></script>
    <script src="js/vendor/smoothscroll.js"></script>
    <script src="js/vendor/jquery.cubeportfolio.min.js"></script>
    <script src="js/main.js"></script>

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
        (function (b, o, i, l, e, r) {
            b.GoogleAnalyticsObject = l;
            b[l] || (b[l] =
                function () {
                    (b[l].q = b[l].q || []).push(arguments)
                });
            b[l].l = +new Date;
            e = o.createElement(i);
            r = o.getElementsByTagName(i)[0];
            e.src = '//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e, r)
        }(window, document, 'script', 'ga'));
        ga('create', 'UA-XXXXX-X', 'auto');
        ga('send', 'pageview');
    </script>
</body>

</html>