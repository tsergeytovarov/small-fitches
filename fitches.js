// нам понадобится бибилиоека jQuery

$(finction(){
  // для начала забираем адресс страницы и отрезаем оттуда домен
  var a = location.href.substr(location.href.indexOf('/',7));
  // перебираем верхние элементы навигации
  $('.menu-sitemap-tree>ul>li').each(function(){
    // првоеряем адресс ссылки - долэжен совпадать с нашим адресом 
    if( $('a', this).attr('href') == a){ 
      // если все верно - убираем класс - который отвечает за скрытие элементов
      $(this).removeClass('close');
      return false;
    } 
  }) 
});


// После оптимизации 


$(finction(){
  $('.menu-sitemap-tree>ul>li').each(function(){
    if( $('a', this).attr('href') == location.href.substr(location.href.indexOf('/',7)) ){ 
      $(this).removeClass('close'); return false
    } 
  }) 
})
