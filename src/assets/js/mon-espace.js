(function ($) {
    "use strict";
  
    $(document).ready(function () {
      /**
       * Back to top button
       */
      const backtotop = $('.back-to-top');
      if (backtotop.length) {
        const toggleBacktotop = () => {
          if ($(window).scrollTop() > 100) {
            backtotop.addClass('active');
          } else {
            backtotop.removeClass('active');
          }
        };
        toggleBacktotop();
        $(window).on('scroll', toggleBacktotop);
      }
  
      /**
       * Mobile nav toggle
       */
      $('.mobile-nav-toggle').on('click', function () {
        $('#navbar').toggleClass('navbar-mobile');
        $(this).toggleClass('bi-list bi-x');
      });
  
      /**
       * Mobile nav dropdowns activate
       */
      $('.navbar .dropdown > a').on('click', function (e) {
        if ($('#navbar').hasClass('navbar-mobile')) {
          e.preventDefault();
          $(this).next().toggleClass('dropdown-active');
        }
      });
  
      /**
       * Scrool with ofset on links with a class name .scrollto
       */
      $('.scrollto').on('click', function (e) {
        if (this.hash) {
          e.preventDefault();
          const navbar = $('#navbar');
          if (navbar.hasClass('navbar-mobile')) {
            navbar.removeClass('navbar-mobile');
            $('.mobile-nav-toggle').toggleClass('bi-list bi-x');
          }
          $('html, body').animate(
            {
              scrollTop: $(this.hash).offset().top - navbar.outerHeight(),
            },
            1500,
            'easeInOutExpo'
          );
        }
      });
  
      /**
       * Scroll with ofset on page load with hash links in the url
       */
      $(document).ready(function () {
        if (window.location.hash) {
          if ($(window.location.hash).length) {
            $('html, body').animate(
              {
                scrollTop: $(window.location.hash).offset().top - $('#navbar').outerHeight(),
              },
              1500,
              'easeInOutExpo'
            );
          }
        }
      });
  
      /**
       * Preloader
       */
      const preloader = $('#preloader');
      if (preloader.length) {
        $(window).on('load', function () {
          preloader.remove();
        });
      }
  
      /**
       * Porfolio isotope and filter
       */
      $(window).on('load', function () {
        const portfolioContainer = $('.portfolio-container');
        if (portfolioContainer.length) {
          const portfolioIsotope = portfolioContainer.isotope({
            itemSelector: '.portfolio-item',
          });
          $('#portfolio-flters li').on('click', function () {
            $('#portfolio-flters li').removeClass('filter-active');
            $(this).addClass('filter-active');
            portfolioIsotope.isotope({
              filter: $(this).data('filter'),
            });
            AOS.refresh();
          });
        }
      });
  
      /**
       * Initiate portfolio lightbox 
       */
      GLightbox({
        selector: '.portfolio-lightbox',
      });
  
      /**
       * Initiate portfolio details lightbox 
       */
      GLightbox({
        selector: '.portfolio-details-lightbox',
        width: '90%',
        height: '90vh',
      });
  
      /**
       * Portfolio details slider
       */
      new Swiper('.portfolio-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: '
  