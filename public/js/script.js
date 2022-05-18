'use strict';

const e = React.createElement;
const domRecipes = document.querySelector('#react_recipes');
const rootRecipes = ReactDOM.createRoot(domRecipes);
const domDetail = document.querySelector('#react_detail');
const rootDetail = ReactDOM.createRoot(domDetail);

const processData = (dataRecipes, dataSpecials) => {

    let ctr = -1;
    this.listItems = dataRecipes.map(dataRecipes => {
        ctr ++;
        return e(
            'li',
            { key: dataRecipes.uuid, onClick: () => {
                
            }},
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
            let ctrSpecial = dataSpecials.map(dataSpecials => {
                if(dataIngredients.uuid == dataSpecials.ingredientId){
                    return e(
                            'p',
                            { className: 'rcp__ing--legend', key: dataIngredients.uuid + "_spc01" },
                            [
                                e(
                                    'span',
                                    { key: dataIngredients.uuid + "_spc02" },
                                    dataSpecials.type + " : " + dataSpecials.title
                                ),
                                e(
                                    'span',
                                    { key: dataIngredients.uuid +"_spc03" },
                                    " - " + dataSpecials.text
                                )
                            ])
                }
            });

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
                        ),
                        ctrSpecial
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
                        ),
                        ctrSpecial
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
                        ),
                        ctrSpecial
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
                        ),
                        ctrSpecial
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
                            { className: 'rcp__detail--close', key: dataRecipes.uuid + "_data_close", onClick: () => {
                                
                            } },
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

    
$("main").on("click",".rcp__list li", function(){
    $(".rcp__detail").find(".rcp__detail--item").eq($(this).index()).fadeIn();
    $( ".overlay" ).fadeIn();
});

$("main").on("click",".rcp__detail--close, .overlay", function(){
    $(".overlay").fadeOut();
    $(".rcp__detail .rcp__detail--item").fadeOut();
});