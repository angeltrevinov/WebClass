// your code here
$("#number-chooser").submit(function( event ) {
    event.preventDefault();
    let arrayNumbers;
    arrayNumbers = makeArray($("#number-choice")[0].value);
    $('.js-results').append(arrayNumbers);
});


function  makeArray(maxNumber) {
    let arrayNumbers = [];
    for(let intCount = 1; intCount <= maxNumber; intCount++) {

        if( intCount % 15 == 0) {

            arrayNumbers.push("<div class='fizz-buzz-item fizzbuzz'>" +
                "<span>" +
                "fizzbuzz" +
                "</span>" +
                "</div>");

        } else if(intCount % 3 == 0 ){
            arrayNumbers.push("<div class='fizz-buzz-item fizz'>" +
                "<span>" +
                "fizz" +
                "</span>" +
                "</div>");

        } else if(intCount % 5 == 0) {
            arrayNumbers.push("<div class='fizz-buzz-item buzz'>" +
                "<span>" +
                "buzz" +
                "</span>" +
                "</div>");
        } else {
            arrayNumbers.push("<div class='fizz-buzz-item'>" +
                "<span>" +
                intCount +
                "</span>" +
                "</div>");
        }
    }

    return arrayNumbers;
}
