'use strict';

const e = React.createElement;
const domRecipes = document.querySelector('#react_recipes');
const rootRecipes = ReactDOM.createRoot(domRecipes);
const domDetail = document.querySelector('#react_detail');
const rootDetail = ReactDOM.createRoot(domDetail);

const processData = (dataRecipes, dataSpecials) => {
    console.log(dataRecipes);
    console.log(dataSpecials);

    this.listItems = dataRecipes.map(dataRecipes => {
        return e(
            'li',
            { key: dataRecipes.uuid },
            [
                e(
                    'p',
                    { className: 'rcp__list--ttl', key: dataRecipes.uuid + "_ttl" },
                    dataRecipes.title
                ),
                e(
                    'div',
                    { className: 'rcp__list--img', key: dataRecipes.uuid + "_img" },
                    e(
                        'img',
                        { src: dataRecipes.images.medium },
                        null
                    )
                )
            ])
    });

    rootRecipes.render(e(
        'ul',
        { className: 'rcp__list' },
        this.listItems
    ))

    this.listInfo = dataRecipes.map(dataRecipes => {
        let ctrIngredients = dataRecipes.ingredients.map(dataIngredients => {
            if((dataIngredients.amount != "" && dataIngredients.amount != null) && (dataIngredients.measurement != "" && dataIngredients.measurement != null)){
                return e(
                    'li',
                    { key: dataIngredients.uuid },
                    [
                        e(
                            'p',
                            { className: 'rcp__ing--legend', key: dataIngredients.uuid + "_ing01" },
                            "name : " + dataIngredients.name
                        ),
                        e(
                            'p',
                            { className: 'rcp__ing--legend', key: dataIngredients.uuid + "_ing02" },
                            "amount : " + dataIngredients.amount
                        ),
                        e(
                            'p',
                            { className: 'rcp__ing--legend', key: dataIngredients.uuid + "_ing03" },
                            "measurement : " + dataIngredients.measurement
                        )
                    ]
                )
            }else if(!(dataIngredients.amount != "" && dataIngredients.amount != null) && (dataIngredients.measurement != "" && dataIngredients.measurement != null)){
                return e(
                    'li',
                    { key: dataIngredients.uuid },
                    [
                        e(
                            'p',
                            { className: 'rcp__ing--legend', key: dataIngredients.uuid + "_ing01" },
                            "name : " + dataIngredients.name
                        ),
                        e(
                            'p',
                            { className: 'rcp__ing--legend', key: dataIngredients.uuid + "_ing03" },
                            "measurement : " + dataIngredients.measurement
                        )
                    ]
                )
            }else if((dataIngredients.amount != "" && dataIngredients.amount != null) && !(dataIngredients.measurement != "" && dataIngredients.measurement != null)){
                return e(
                    'li',
                    { key: dataIngredients.uuid },
                    [
                        e(
                            'p',
                            { className: 'rcp__ing--legend', key: dataIngredients.uuid + "_ing01" },
                            "name : " + dataIngredients.name
                        ),
                        e(
                            'p',
                            { className: 'rcp__ing--legend', key: dataIngredients.uuid + "_ing02" },
                            "amount : " + dataIngredients.amount
                        )
                    ]
                )
            }else {
                return e(
                    'li',
                    { key: dataIngredients.uuid },
                    [
                        e(
                            'p',
                            { className: 'rcp__ing--legend', key: dataIngredients.uuid + "_ing01" },
                            "name : " + dataIngredients.name
                        )
                    ]
                )
            }
        });

        let ctr = 0;
        let ctrInstruction = dataRecipes.directions.map(dataInstruction => {
            ctr++;
            if (dataInstruction.optional) {
                return e(
                    'li',
                    { key: dataRecipes.uuid + "_ins" + ctr },
                    ctr + ". ( optional ) " + dataInstruction.instructions
                )
            } else {
                return e(
                    'li',
                    { key: dataRecipes.uuid + "_ins" + ctr },
                    ctr + ". " + dataInstruction.instructions
                )
            }
        });

        return e(
            'li',
            { className: 'rcp__detail--item', key: dataRecipes.uuid + "_data" },
            [
                e(
                    'div',
                    { className: 'rcp__detail--inner', key: dataRecipes.uuid + "_data_inr" },
                    [
                        e(
                            'p',
                            { className: 'rcp__detail--close', key: dataRecipes.uuid + "_data_close" },
                            "X"
                        ),
                        e(
                            'div',
                            { className: 'rcp__detail--img', key: dataRecipes.uuid + "_data_img" },
                            e(
                                'img',
                                { src: dataRecipes.images.medium, className: 'rcp__detail--img' },
                                null
                            )
                        ),
                        e(
                            'div',
                            { className: 'rcp__text', key: dataRecipes.uuid + "_data_text" },
                            [
                                e(
                                    'p',
                                    { className: 'rcp__text--ttl', key: dataRecipes.uuid + "_data_text01" },
                                    dataRecipes.title
                                ),
                                e(
                                    'p',
                                    { className: 'rcp__text--desc', key: dataRecipes.uuid + "_data_text02" },
                                    dataRecipes.description
                                ),
                                e(
                                    'p',
                                    { className: 'rcp__text--legend', key: dataRecipes.uuid + "_data_text03" },
                                    "servings : " + dataRecipes.servings
                                ),
                                e(
                                    'p',
                                    { className: 'rcp__text--legend', key: dataRecipes.uuid + "_data_text04" },
                                    "prep time : " + dataRecipes.prepTime
                                ),
                                e(
                                    'p',
                                    { className: 'rcp__text--legend', key: dataRecipes.uuid + "_data_text05" },
                                    "cook time : " + dataRecipes.cookTime
                                )
                            ]
                        )
                    ]
                ),
                e(
                    'div',
                    { className: 'rcp__col', key: dataRecipes.uuid + "_data_col" },
                    [
                        e(
                            'div',
                            { className: 'rcp__ing', key: dataRecipes.uuid + "_data_ing" },
                            [
                                e(
                                    'p',
                                    { className: 'rcp__ing--ttl', key: dataRecipes.uuid + "_data_ing--ttl" },
                                    "Ingredients"
                                ),
                                e(
                                    'ul',
                                    { key: dataRecipes.uuid + "_data_ing--ul" },
                                    ctrIngredients
                                )
                            ]
                        ),
                        e(
                            'div',
                            { className: 'rcp__ins', key: dataRecipes.uuid + "_data_ins" },
                            [
                                e(
                                    'p',
                                    { className: 'rcp__ins--ttl', key: dataRecipes.uuid + "_data_ins--ttl" },
                                    "Directions"
                                ),
                                e(
                                    'ul',
                                    { key: dataRecipes.uuid + "_data_ins--ul" },
                                    ctrInstruction
                                )
                            ]
                        )
                    ]
                )
            ])
    });

    rootDetail.render(e(
        'ul',
        { className: 'rcp__detail' },
        this.listInfo
    ))
};

const fetchSpecials = (dataRecipes) => {
    return fetch("http://localhost:3001/specials")
        .then((response) => response.json())
        .then((data) => processData(dataRecipes, data))};

const fetchRecipes = () => {
    return fetch("http://localhost:3001/recipes")
          .then((response) => response.json())
          .then((data) => fetchSpecials(data))};

    fetchRecipes();







        





var data;

$.ajax({
    url: "http://localhost:3001/recipes",
    context: document.body
}).done(function(result) {

    var list = "";
    var detail = "";
    data = result;

    jQuery.each( result, function( ctr, val ) {
        list += "<li>";
        list += "<p class='rcp__list--ttl'>"+ val.title +"</p>";
        list += "<div class='rcp__list--img'><img src='"+ val.images.medium +"' alt=''></div>";
        list += "</li>";

        detail += "<li class='rcp__detail--item'>";
        detail += "<div class='rcp__detail--inner'>"
        detail += "<p class='rcp__detail--close'>X</p>"
        detail += "<div class='rcp__detail--img'><img src='"+ val.images.medium +"' alt=''></div>";
        detail += "<div class='rcp__text'>"
        detail += "<p class='rcp__text--ttl'>"+ val.title +"</p>";
        detail += "<p class='rcp__text--desc'>"+ val.description +"</p>";
        detail += "<p class='rcp__text--legend'>servings : "+ val.servings +"</p>";
        detail += "<p class='rcp__text--legend'>prep time : "+ val.prepTime +"</p>";
        detail += "<p class='rcp__text--legend'>cook time : "+ val.cookTime +"</p>";
        detail += "</div>";
        detail += "</div>";

        detail += "<div class='rcp__col'><div class='rcp__ing'><p class='rcp__ing--ttl'>Ingredients</p><ul>";
        jQuery.each( val.ingredients, function( ctr01, val01 ) {
            detail += "<li data-id='"+ val01.uuid +"'>";
            detail += "<p class='rcp__ing--legend'>name : "+ val01.name +"</p>";
            if(val01.amount != "" && val01.amount != null){
                detail += "<p class='rcp__ing--legend'>amount : "+ val01.amount +"</p>";
            }
            if(val01.measurement != "" && val01.measurement != null){
                detail += "<p class='rcp__ing--legend'>measurement : "+ val01.measurement +"</p>";
            }
            detail += "</li>";
        });
        detail += "</ul></div>";

        detail += "<div class='rcp__ins'><p class='rcp__ins--ttl'>Directions</p><ul>";
        jQuery.each( val.directions, function( ctr01, val01 ) {
            detail += "<li>"+ (ctr01+1) +". ";
            if(val01.optional){
                detail += "( Optional ) ";
            }
            detail += val01.instructions;
            detail += "</li>";
        });
        detail += "</ul></div></div>";

        detail += "</li>";
    });

    $( ".rcp__list" ).append( list );
    $( ".rcp__detail" ).append( detail );

    $.ajax({
        url: "http://localhost:3001/specials",
        context: document.body
    }).done(function(result) {
        $('li[data-id]').each(function(){
            var ctrObj = $(this);
            var ctrID = $(this).attr('data-id');

            jQuery.each( result, function( ctr, val ) {
                if(val.ingredientId == ctrID){
                    ctrObj.append("<p class='rcp__ing--legend'>"+ val.type +" : "+ val.title + "<br> - " + val.text);
                    return false;
                }
            });

        });
    });
});

$(".rcp__list").on("click","li", function(){
    $(".rcp__detail").find(".rcp__detail--item").eq($(this).index()).fadeIn();
    $( ".overlay" ).fadeIn();
});
$("main").on("click",".rcp__detail--close, .overlay", function(){
    $(".overlay").fadeOut();
    $(".rcp__detail .rcp__detail--item").fadeOut();
});