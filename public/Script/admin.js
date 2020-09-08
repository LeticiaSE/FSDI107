/*
    AJAX
    Async Javascript and Xml

    http://restclass.azurewebsites.net
    http verbs (request Methods)
        GET: get info (CAN NOT SEND DATA)
        POST: create/send data
        PUT: update some existing elements
        PATCH: update part of an existing element
        DELETE: remove an existing element

*/

//Object Constructor for Item
function Item(code,title,price,category,image) {
    this.code = code;
    this.title = title;
    this.price = price;
    this.category = category;
    this.image = image;
    this.user = 'Lety';
    
}

function register() {
    var code = $("#txtCode").val();
    var title = $("#txtTitle").val();
    var price = $("#txtPrice").val();
    var category = $("#txtCategory").val();
    var image = $("#txtImage").val();

    var item = new Item(code,title,price,category,image);
    console.log(item);
    console.log(JSON.stringify(item));

    //console.log(code, title, category, price, image);

    //create the AJAX request
    $.ajax({
        url: 'http://localhost:8080/api/items',
        type: 'POST',
        data: JSON.stringify(item),//specify the object
        contentType: 'application/json',
        success: function(response) {
            console.log("Yeei", response);
        },
        error: function(errorDetails) {
            console.log("Ouuch.!",errorDetails);
        }
    });
}

function init() {
    // Hook events
    $("#btnSave").click(register);
    //load data
}


window.onload = init;

