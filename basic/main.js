var language = {
  en: {
    agarwood: "Agarwood",
    home: "Home",
    about: "About",
    contact: "Contact",
    address: "Address"
  },
  zh: {
    agarwood: "沉香茶",
    home: "主页",
    about: "关于",
    contact: "联系",
    address: "地址"
  }
};

$(function() {
  $(".translate").click(function() {
    var lang = $(this).attr("id");
    $(".lang").each(function() {
      $(this).text(language[lang][$(this).attr("key")]);
    });
  });
});
