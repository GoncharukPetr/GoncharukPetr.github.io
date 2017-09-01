    $('#fullPage').fullpage({
        anchors:['Page1', 'Page2', 'Page3','Page4','Page5','Page6','Page7'],
        menu:'#mainMenu',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrows: true,
        navigation: true,
        navigationToolTips:['Главная','ТХ','Модули','Бонусы','Купить','Отзывы','Гарантия'],
        showActiveTooltip: true,
        continuousVertical: true,
        responsiveWidth: 700,
        scrollingSpeed:900
    });


    $(document).ready(function () {
       setTimeout(function () {
           $('body').addClass('loaded')
       },500)
    });


