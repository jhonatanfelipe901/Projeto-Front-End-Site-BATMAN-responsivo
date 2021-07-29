$( document ).ready(function() {

  //LÓGICA LOAD
  $('main').css('display', 'none');
  $('footer').css('display', 'none');

  $('body').css('background-color', 'rgba(12, 12, 12)');

  setTimeout(function()
  { 
    $('.myLoader').css('display', 'none');

    $('main').css('display', 'block');
    $('footer').css('display', 'block'); 
  }, 1000);
  //LÓGICA LOAD


  //FILTROS CARDS HERÓIS INIMIGOS
  $('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'cor-btn') {
      eachBoxes('cor', boxes);
    } 
    else if(type == 'ping-btn') {
      eachBoxes('ping', boxes);
    } 
    else if(type == 'cha-btn') {
      eachBoxes('cha', boxes);
    } 
    else {
      eachBoxes('all', boxes);
    }
  });

  function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }
  //FILTROS CARDS HERÓIS INIMIGOS

  // scroll para as seções
  let homeSection = $('#index-section');
  let referenceSection = $('#reference-area-section');
  let combatSection = $('#combat-area-section');
  let simulationSection = $('#simulation-fight-section');
  let contactSection = $('#contact-section');

  let scrollTo = '';

  $('.nav-item').click(function() {

      let btnId = $(this).attr('id');

      if(btnId == 'home-menu') {
        scrollTo = homeSection;
      } else if(btnId == 'reference-menu') {
        scrollTo = referenceSection;
      } else if(btnId == 'combat-menu') {
        scrollTo = combatSection;
      } else if(btnId == 'simulation-menu') {
        scrollTo = simulationSection;
      } else if(btnId == 'contact-menu') {
        scrollTo = contactSection;
      }
      else{
        scrollTo = homeSection;
      }

      $([document.documentElement, document.body]).animate({
          scrollTop: $(scrollTo).offset().top - 70
      }, 500);
    });  
    // scroll para as seções  
  });