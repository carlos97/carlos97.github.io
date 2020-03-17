$(document).ready(function(){
    $("#sect1").show();
    for (var i = 2; i < 9; i++) {
        $("#sect" + i).hide();
    }
    $("#interact").hide()
});
$("#buscar").click(function(){
    var tema=document.getElementById("formulario").value;
    var temas={
        densidad:1,
        normal:2,
        exponencial:3,
        gamma:4,
        chicuadrada:5,
        weibull:6,
        logaritmica:7,
        beta:8
    };
    desplegar(temas[tema]);
    console.log("funcionando", tema)
});
function desplegar(tema){
    $("#interact").hide()
    for (var i = 1; i < 9; i++) {
        $("#sect" + i).hide();
    }
    $("#sect"+tema).show(350);
    
}
function ejemp(tema){
    for (var i = 1; i < 9; i++) {
        $("#sect" + i).hide();
    }
    $("#interact").show(400);

    var ejemplos={
        densidad: 'https://docs.google.com/spreadsheets/d/13buTEteHgG85Ihpro_1HNEvt2c0WLDcrD4krw63DYUY/edit?usp=sharing',
        normal: 'https://docs.google.com/spreadsheets/d/1RoddWyO41lNKxWpIfZqjJDY7mE9BM5W_VZ6vUTFAC2M/edit?usp=sharing;',
        exponencial: 'https://docs.google.com/spreadsheets/d/1Q3287PGAx0WH3mzYGJXprSwN4NaDEjofFUDewmu_swU/edit?usp=sharing',
        gamma:'https://docs.google.com/spreadsheets/d/1lC7KY4DbqVwQ8TvRMEVPOExtP3DM5-jHvVVJIWCxn7s/edit?usp=sharing',
        cuadrada: 'https://docs.google.com/spreadsheets/d/1lQd0A39z5tbTZgRi_cE3Ol9PggTeyR0s31Wamz2Oe68/edit?usp=sharing',
        weibull:'https://docs.google.com/spreadsheets/d/17z5lOA2b3Jq50L5gxWLHNnzzIUW0qawveQAExcoZQfg/edit?usp=sharing',
        logaritmica:'https://docs.google.com/spreadsheets/d/13lLaCwNnrRMzNdUmeD5SDJw3kpPXuUoPCtNp9SorX1Q/edit?usp=sharing',
        beta:'https://docs.google.com/spreadsheets/d/1zJ9nPOx2PE0IPnS02pgrtVLEktuUyts_5ymLRyb9njo/edit?usp=sharing'
    };

    var frame='<iframe src="'+ejemplos[tema]+'"width="100%"height="100%"></iframe>'

    console.log(frame);

    var ventana=document.getElementById("interact");

    ventana.innerHTML=frame;


}
