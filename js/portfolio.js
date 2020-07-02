var moves = ["top-down", "left-right", "bottom-top"]; //classes de animações css
var div = "pagina-inicial";//Gaurda a div em que está

$(".sobre-mim").fadeTo(1, 0);
$(".projetos").fadeTo(1, 0);


$("section").scroll(function() { // dispara o evento scroll da janela

    //ALTURA DAS DIVS
    var divPaginaInicial = $(".pagina-inicial").height(); // pega a altura da div pagina-inicial
    var divSobreMim = $(".sobre-mim").height(); // pega a altura da div sobre-mim
    var divProjetos = $(".projetos").height(); // pega a altura da div projetos
    //END ALTURA DAS DIVS

    //DIMENSÕES DA TELA

    var win_scrol = $(this).scrollTop(); // pega o valor da rolagem da section

    if (win_scrol < divPaginaInicial) {
        if (div != "pagina-inicial") {
            $(".pagina-inicial").fadeTo(0, 1);
            $.each(moves, function (i, v) {
                $("[data-animation=" + v + "]").removeClass(v);
                $("[data-animation=" + v + "]").width(); // trigger a DOM reflow
                $("[data-animation=" + v + "]").addClass(v);
            });

            $(".sobre-mim").fadeTo(1, 0);
            $(".projetos").fadeTo(1, 0);
            $(".menu").fadeOut("slow")
        }
        div = "pagina-inicial";
    }
    else if (win_scrol > divPaginaInicial && win_scrol < (divPaginaInicial + divSobreMim)) {
        if (div != "sobre-mim") {
            $(".pagina-inicial").fadeTo(1, 0);
            $(".sobre-mim").fadeTo(0, 1);
            $(".sobre-mim").removeClass("left-right");
            $(".sobre-mim").width(); // trigger a DOM reflow
            $(".sobre-mim").addClass("left-right");
            $(".projetos").fadeTo(1, 0);
            $(".menu").fadeIn("slow")
        }
        div = "sobre-mim";
    }
    else if (win_scrol > (divPaginaInicial + divSobreMim)) {
        if (div != "projetos") {
            $(".pagina-inicial").fadeTo(1, 0);
            $(".sobre-mim").fadeTo(1, 0);
            $(".projetos").fadeTo(0, 1);
            $(".projetos").removeClass("top-down");
            $(".projetos").width(); // trigger a DOM reflow
            $(".projetos").addClass("top-down");
            $(".menu").fadeIn("slow");
        }
        div = "projetos";
    }


    //END DIMENSÕES DA TELA


    //CONDIÇÕES

    // se a distância da altura da div à borda inferior da janela for menor ou igual a 0
    //if (distancia >= - divPaginaInicial) {
    //    //$(this).off("scroll"); // cancelo o evento "scroll" para não entrar novamente no "if"
    //    alert("a divPaginaInicial apareceu toda!");
    //}
    //END CONDIÇÕES
});
