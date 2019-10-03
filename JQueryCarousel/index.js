//Adding JQuery
$(".thumbnail").bind('click', function (event) {
    $("#heroPhoto")[0].src = event.target.src;
});
