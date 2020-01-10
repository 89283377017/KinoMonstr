
// function onclickDivergent2(){
//     $('#htpsjt').attr('src', 'https://www.youtube.com/embed/LNaph4ub6pI');
// }

function onclickDivergent2 (event) {
    $("#htpsjt").attr("src", "https://www.youtube.com/embed/LNaph4ub6pI");
    $("#divergentH1").text("Дивергент, глава 2");
}



$(document).ready(function () {
    $(".classA").bind("click", onclickDivergent2);
});
