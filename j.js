<!-------------------------------start of header area-------------------------------->
<header class="header-area header-sticky slideInDown">
   <div class="container-fluid">
      <div class="row">
         <div class="col-12">
            <nav class="main-nav">
               <!-- ***** Logo Start ***** -->
               <a class="logo" href="#main-b">
                  <h4><img src="assets/images/log.png" alt="logo" class="logo-img"></h4>
               </a>
               <!-- ***** Logo End ***** -->
               <!-- ***** Menu Start ***** -->
               <ul class="nav">
                  <li class="scroll-to-section"><a href="#tokenomics_info" class="active">WHY SAFE MIND</a></li>
                  <li class="scroll-to-section"><a href="#tokenOmics">TOKENOMICS</a></li>
                  <li class="scroll-to-section"><a href="#Proof-area">DUMP PROF FUNCTION</a></li>
                  <li class="scroll-to-section"><a href="#buy">HOW TO BUY</a></li>
                  <li class="scroll-to-section"><a href="#roadMap">ROAD MAP</a></li>
               </ul>
               <a class='menu-trigger'>
               <span>Menu</span>
               </a>
               <!-- ***** Menu End ***** -->
            </nav>
         </div>
      </div>
   </div>
</header>
<!-------------------------------end of header area--------------------------------->




























/* 
---------------------------------------------
header
--------------------------------------------- 
*/

.background-header {
	background-color: #1b2137 !important;
	height: 80px !important;
	position: fixed !important;
	top: 0;
	left: 0px;
	right: 0px;
	-webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15) !important;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15) !important;
	border-bottom: 1px solid hsla(0, 0%, 100%, 0.07);
}

.background-header .logo,
.background-header .main-nav .nav li a {
	color: #fff;
}

.background-header .main-nav .nav li:hover a {
	color: #33ccc5;
}

.background-header .nav li a.active {
	position: relative;
	color: #fff;
}

.background-header .nav li a.active:after {
	position: absolute;
	width: 20px;
	height: 2px;
	background-color: #4771cb;
	content: "";
	left: 50%;
	bottom: 0px;
	-webkit-transform: translateX(-10px);
	-ms-transform: translateX(-10px);
	transform: translateX(-10px);
}

.header-area {
	position: absolute;
	left: 0px;
	right: 0px;
	z-index: 100;
	height: 100px;
	-webkit-transition: all 0.5s ease 0s;
	-o-transition: all 0.5s ease 0s;
	transition: all 0.5s ease 0s;
	background-color: #1b2137 !important;
	border-bottom: 1px solid hsla(0, 0%, 100%, 0.07);
}

.header-area .main-nav {
	min-height: 80px;
	background: transparent;
}

.header-area .main-nav .logo {
	float: left;
	-webkit-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s;
}

.header-area .main-nav .logo h4 {
	font-size: 30px;
	font-weight: 800;
	text-transform: capitalize;
	color: #fff;
	line-height: 100px;
	float: left;
	-webkit-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s;
}

.header-area .main-nav .logo h4 .logo-img {
	width: 68px;
	max-width: 100px;
	margin-top: -20px;
	margin-left: 5px;
	margin-left: 33px;
	margin-top: -7px;
}

.background-header .main-nav .logo h4 {
	line-height: 80px;
}

.background-header .main-nav .nav {
	margin-top: 20px !important;
}

.header-area .main-nav .nav {
	float: right;
	margin-top: 30px;
	margin-right: 0px;
	background-color: transparent;
	-webkit-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s;
	position: relative;
	z-index: 999;
}

.header-area .main-nav .nav li {
	padding-left: 15px;
	padding-right: 15px;
}

.header-area .main-nav .nav li:last-child a,
.background-header .main-nav .nav li:last-child a {
	padding: 0px 20px;
	font-weight: 400;
}

.header-area .main-nav .nav li a {
	display: block;
	font-weight: 500;
	font-size: 14px;
	color: #fff;
	text-transform: capitalize;
	-webkit-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s;
	height: 40px;
	line-height: 40px;
	border: transparent;
}

.header-area .main-nav .nav li:hover a,
.header-area .main-nav .nav li a.active {
	color: #fff !important;
}

.background-header .main-nav .nav li:hover a,
.background-header .main-nav .nav li a.active {
	color: #fff !important;
	opacity: 1;
}

.header-area .main-nav .nav li.submenu {
	position: relative;
	padding-right: 30px;
}

.header-area .main-nav .nav li.submenu:after {
	font-family: FontAwesome;
	content: "\f107";
	font-size: 12px;
	color: #2a2a2a;
	position: absolute;
	right: 18px;
	top: 12px;
}

.background-header .main-nav .nav li.submenu:after {
	color: #2a2a2a;
}

.header-area .main-nav .nav li.submenu ul {
	position: absolute;
	width: 200px;
	-webkit-box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
	box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
	overflow: hidden;
	top: 50px;
	opacity: 0;
	-webkit-transform: translateY(+2em);
	-ms-transform: translateY(+2em);
	transform: translateY(+2em);
	visibility: hidden;
	z-index: -1;
	-webkit-transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
	-o-transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
	transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
}

.header-area .main-nav .nav li.submenu ul li {
	margin-left: 0px;
	padding-left: 0px;
	padding-right: 0px;
}

.header-area .main-nav .nav li.submenu ul li a {
	opacity: 1;
	display: block;
	background: #f7f7f7;
	color: #2a2a2a !important;
	padding-left: 20px;
	height: 40px;
	line-height: 40px;
	-webkit-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s;
	position: relative;
	font-size: 13px;
	font-weight: 400;
	border-bottom: 1px solid #eee;
}

.header-area .main-nav .nav li.submenu ul li a:hover {
	background: #fff;
	color: #33ccc5 !important;
	padding-left: 25px;
}

.header-area .main-nav .nav li.submenu ul li a:hover:before {
	width: 3px;
}

.header-area .main-nav .nav li.submenu:hover ul {
	visibility: visible;
	opacity: 1;
	z-index: 1;
	-webkit-transform: translateY(0%);
	-ms-transform: translateY(0%);
	transform: translateY(0%);
	-webkit-transition-delay: 0s, 0s, 0.3s;
	-o-transition-delay: 0s, 0s, 0.3s;
	transition-delay: 0s, 0s, 0.3s;
}

.header-area .main-nav .menu-trigger {
	cursor: pointer;
	display: block;
	position: absolute;
	top: 33px;
	width: 32px;
	height: 40px;
	text-indent: -9999em;
	z-index: 99;
	right: 40px;
	display: none;
}

.background-header .main-nav .menu-trigger {
	top: 23px;
}

.header-area .main-nav .menu-trigger span,
.header-area .main-nav .menu-trigger span:before,
.header-area .main-nav .menu-trigger span:after {
	-o-transition: all 0.4s;
	-webkit-transition: all 0.4s;
	transition: all 0.4s;
	background-color: #fff;
	display: block;
	position: absolute;
	width: 30px;
	height: 2px;
	left: 0;
}

.background-header .main-nav .menu-trigger span,
.background-header .main-nav .menu-trigger span:before,
.background-header .main-nav .menu-trigger span:after {
	background-color: #fff;
}

.header-area .main-nav .menu-trigger span:before,
.header-area .main-nav .menu-trigger span:after {
	-o-transition: all 0.4s;
	-webkit-transition: all 0.4s;
	transition: all 0.4s;
	background-color: #fff;
	display: block;
	position: absolute;
	width: 30px;
	height: 2px;
	left: 0;
	width: 75%;
}

.background-header .main-nav .menu-trigger span:before,
.background-header .main-nav .menu-trigger span:after {
	background-color: #fff;
}

.header-area .main-nav .menu-trigger span:before,
.header-area .main-nav .menu-trigger span:after {
	content: "";
}

.header-area .main-nav .menu-trigger span {
	top: 16px;
}

.header-area .main-nav .menu-trigger span:before {
	-ms-transform-origin: 33% 100%;
	-webkit-transform-origin: 33% 100%;
	transform-origin: 33% 100%;
	top: -10px;
	z-index: 10;
}

.header-area .main-nav .menu-trigger span:after {
	-ms-transform-origin: 33% 0;
	-webkit-transform-origin: 33% 0;
	transform-origin: 33% 0;
	top: 10px;
}

.header-area .main-nav .menu-trigger.active span,
.header-area .main-nav .menu-trigger.active span:before,
.header-area .main-nav .menu-trigger.active span:after {
	background-color: transparent;
	width: 100%;
}

.header-area .main-nav .menu-trigger.active span:before {
	-ms-transform: translateY(6px) translateX(1px) rotate(45deg);
	-webkit-transform: translateY(6px) translateX(1px) rotate(45deg);
	transform: translateY(6px) translateX(1px) rotate(45deg);
	background-color: #fff;
}

.background-header .main-nav .menu-trigger.active span:before {
	background-color: #fff;
}

.header-area .main-nav .menu-trigger.active span:after {
	-ms-transform: translateY(-6px) translateX(1px) rotate(-45deg);
	-webkit-transform: translateY(-6px) translateX(1px) rotate(-45deg);
	transform: translateY(-6px) translateX(1px) rotate(-45deg);
	background-color: #fff;
}

.background-header .main-nav .menu-trigger.active span:after {
	background-color: #fff;
}

.header-area.header-sticky {
	min-height: 80px;
}

.header-area .nav {
	margin-top: 30px;
}

.header-area.header-sticky .nav li a.active {
	color: #33ccc5;
}

@media (max-width: 1200px) {
	.header-area .main-nav .nav li {
		padding-left: 12px;
		padding-right: 12px;
	}
	.header-area .main-nav:before {
		display: none;
	}
}

@media (max-width: 767px) {
	.background-header .main-nav .nav {
		margin-top: 80px !important;
	}
	.header-area .main-nav .logo {
		color: #1e1e1e;
	}
	.header-area.header-sticky .nav li a:hover,
	.header-area.header-sticky .nav li a.active {
		color: #33ccc5 !important;
		opacity: 1;
	}
	.header-area.header-sticky .nav li.search-icon a {
		width: 100%;
	}
	.header-area {
		padding: 0px 15px;
		height: 100px;
		-webkit-box-shadow: none;
		box-shadow: none;
		text-align: center;
	}
	.header-area .container {
		padding: 0px;
	}
	.header-area .logo {
		margin-left: 30px;
	}
	.header-area .menu-trigger {
		display: block !important;
	}
	.header-area .main-nav {
		overflow: hidden;
	}
	.header-area .main-nav .nav {
		float: none;
		width: 100%;
		display: none;
		-webkit-transition: all 0s ease 0s;
		-o-transition: all 0s ease 0s;
		transition: all 0s ease 0s;
		margin-left: 0px;
	}
	.background-header .nav {
		margin-top: 80px;
	}
	.header-area .main-nav .nav li:first-child {
		border-top: 1px solid #eee;
	}
	.header-area.header-sticky .nav {
		margin-top: 100px;
	}
	.header-area .main-nav .nav li {
		width: 100%;
		background-color: #1b2137 !important;
		border-bottom: 1px solid hsla(0, 0%, 100%, 0.07);
		padding-left: 0px !important;
		padding-right: 0px !important;
	}
	.header-area .main-nav .nav li a {
		height: 50px !important;
		line-height: 50px !important;
		padding: 0px !important;
		border: none !important;
		background-color: #1b2137 !important;
		border-bottom: 1px solid hsla(0, 0%, 100%, 0.07);
	}
	.header-area .main-nav .nav .social-icon {
		background-color: #1b2137 !important;
		border-bottom: 1px solid hsla(0, 0%, 100%, 0.07);
	}
	.header-area .main-nav .nav .social-icon a img {
		border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-ms-border-radius: 50%;
		-o-border-radius: 50%;
	}
	.header-area .main-nav .nav li.submenu ul {
		position: relative;
		visibility: inherit;
		opacity: 1;
		z-index: 1;
		-webkit-transform: translateY(0%);
		-ms-transform: translateY(0%);
		transform: translateY(0%);
		-webkit-transition-delay: 0s, 0s, 0.3s;
		-o-transition-delay: 0s, 0s, 0.3s;
		transition-delay: 0s, 0s, 0.3s;
		top: 0px;
		width: 100%;
		-webkit-box-shadow: none;
		box-shadow: none;
		height: 0px;
	}
	.header-area .main-nav .nav li.submenu ul li a {
		font-size: 12px;
		font-weight: 400;
	}
	.header-area .main-nav .nav li.submenu ul li a:hover:before {
		width: 0px;
	}
	.header-area .main-nav .nav li.submenu ul.active {
		height: auto !important;
	}
	.header-area .main-nav .nav li.submenu:after {
		color: #3b566e;
		right: 25px;
		font-size: 14px;
		top: 15px;
	}
	.header-area .main-nav .nav li.submenu:hover ul,
	.header-area .main-nav .nav li.submenu:focus ul {
		height: 0px;
	}
}

@media (min-width: 767px) {
	.header-area .main-nav .nav {
		display: -webkit-box !important;
		display: -ms-flexbox !important;
		display: flex !important;
	}
}


/* 
---------------------------------------------
end header
--------------------------------------------- 
*/


/* 
---------------------------------------------
preloader
--------------------------------------------- 
*/

.js-preloader {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #fff;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	opacity: 1;
	visibility: visible;
	z-index: 9999;
	-webkit-transition: opacity 0.25s ease;
	-o-transition: opacity 0.25s ease;
	transition: opacity 0.25s ease;
}

.js-preloader.loaded {
	opacity: 0;
	visibility: hidden;
	pointer-events: none;
}

@-webkit-keyframes dot {
	50% {
		-webkit-transform: translateX(96px);
		transform: translateX(96px);
	}
}

@keyframes dot {
	50% {
		-webkit-transform: translateX(96px);
		transform: translateX(96px);
	}
}

@-webkit-keyframes dots {
	50% {
		-webkit-transform: translateX(-31px);
		transform: translateX(-31px);
	}
}

@keyframes dots {
	50% {
		-webkit-transform: translateX(-31px);
		transform: translateX(-31px);
	}
}

.preloader-inner {
	position: relative;
	width: 142px;
	height: 40px;
	background: #fff;
}

.preloader-inner .dot {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 12px;
	left: 15px;
	background-image: -webkit-gradient( linear, left top, left bottom, from(#052839), to(#3c91e6)) !important;
	background-image: -o-linear-gradient( top, #052839 0%, #3c91e6 100%) !important;
	background-image: linear-gradient( 180deg, #052839 0%, #3c91e6 100%) !important;
	background-color: #3c91e6 !important;
	border-radius: 50%;
	-webkit-transform: translateX(0);
	-ms-transform: translateX(0);
	transform: translateX(0);
	-webkit-animation: dot 2.8s infinite;
	animation: dot 2.8s infinite;
}

.preloader-inner .dots {
	-webkit-transform: translateX(0);
	-ms-transform: translateX(0);
	transform: translateX(0);
	margin-top: 12px;
	margin-left: 31px;
	-webkit-animation: dots 1.8s infinite;
	animation: dots 1.8s infinite;
}

.preloader-inner .dots span {
	display: block;
	float: left;
	width: 16px;
	height: 16px;
	margin-left: 16px;
	background-image: -webkit-gradient( linear, left top, left bottom, from(#052839), to(#3c91e6)) !important;
	background-image: -o-linear-gradient( top, #052839 0%, #3c91e6 100%) !important;
	background-image: linear-gradient( 180deg, #052839 0%, #3c91e6 100%) !important;
	background-color: #3c91e6 !important;
	border-radius: 50%;
}


/* 
---------------------------------------------
end preloader
--------------------------------------------- 
*/</header>



















// Header Type = Fixed
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var box = $('.header-text').height();
  var header = $('header').height();

  if (scroll >= box - header) {
    $("header").addClass("background-header");
  } else {
    $("header").removeClass("background-header");
  }
});
// Menu Dropdown Toggle
if ($('.menu-trigger').length) {
  $(".menu-trigger").on('click', function () {
    $(this).toggleClass('active');
    $('.header-area .nav').slideToggle(200);
  });
}
// Menu elevator animation
$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      var width = $(window).width();
      if (width < 991) {
        $('.menu-trigger').removeClass('active');
        $('.header-area .nav').slideUp(30);
      }
      $('html,body').animate({
        scrollTop: (target.offset().top) + 1
      }, 900);
      return false;
    }
  }
});

$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('.scroll-to-section a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('.scroll-to-section a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    var target = $(this.hash);
    $('html, body').stop().animate({
      scrollTop: (target.offset().top) + 1
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.nav ul li a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
// Window Resize Mobile Menu Fix
function mobileNav() {
  var width = $(window).width();
  $('.submenu').on('click', function () {
    if (width < 767) {
      $('.submenu ul').removeClass('active');
      $(this).find('ul').toggleClass('active');
    }
  });
}
