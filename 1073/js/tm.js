$(document).off('focusout', '.txt-theme').on('focusout', '.txt-theme', function () {
       var name = $(this).attr("name");
       $("[name='"+name+"']").text($(this).text())
});