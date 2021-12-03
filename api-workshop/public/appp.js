const color = document.querySelector('.color');
const make = document.querySelector('.brand');
const widget = document.querySelector('.widget');
const filterBtn = document.querySelector('.filter');

const colorTemplateText = document.querySelector(".colorTemplate");
const colorTemplate = Handlebars.compile(colorTemplateText.innerHTML)

const brandTemplateText = document.querySelector(".makeTemplate");
const brandTemplate = Handlebars.compile(brandTemplateText.innerHTML)

const widgetTemplateText = document.querySelector(".widgetTemplate");
const widgetTemplate = Handlebars.compile(widgetTemplateText.innerHTML)

// axios
// .get('http://api-tutor.herokuapp.com/v1/colors')
// .then(function(result){
//    color.innerHTML = colorTemplate({
//     colors : result.data
//    });
// });

// axios
// .get('http://api-tutor.herokuapp.com/v1/makes')
// .then(function(result){
//    make.innerHTML = brandTemplate({
//     makes : result.data
//    });
// });


// axios
// .get('http://api-tutor.herokuapp.com/v1/cars')
// .then(function(result){
//    widget.innerHTML = widgetTemplate({
//     widgets : result.data
//    });
// });



function filterWidget(){

    var colorValue = color.value;
    var makeValue = make.value;
     
    if (colorValue !== undefined && makeValue !== undefined) {
        axios
        .get('http://api-tutor.herokuapp.com/v1/makes/:makeValue/color/:colorValue')
            .then(function(result){
                widget.innerHTML = carsTemplate(
                    { widgets: result.data }
                );
            });
    } else if (colorValue !== undefined) {
        axios
        .get(`http://api-tutor.herokuapp.com/v1/colors`)
            .then(function(result){
                widget.innerHTML = carsTemplate(
                    { cars: result.data }
                );
            });
    } else if (makeValue !== undefined) {
        axios
        .get(`http://api-tutor.herokuapp.com/v1/makes`)
            .then(function(result){
                widget.innerHTML = carsTemplate(
                    { cars: result.data }
                );                     
            });
        } 
}
filterBtn.addEventListener("click", filterWidget )
