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
        console.log(result);

        $('li[data-id]').each(function(){
            var ctrObj = $(this);
            var ctrID = $(this).attr('data-id');
            console.log($(this).attr('data-id'));

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
