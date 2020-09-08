var catalog = [];
var categories = [];

function fetchData() {
    $.ajax({
      url: 'http://restclass.azurewebsites.net/api/points',
      type: 'GET',
      success: function(allItems){
        //travel allItems
        //check if the item belog to me
        //if also push to catalog array
        for (let i = 0; i < allItems.length; i++) {
            var item = allItems[i];
            if (item.user === "Lety") {
                catalog.push(item);

                /**
                 * if array does not contains category
                 *  add the category
                 * 
                 * example
                 * if(categories.includes(item.category)){
                    categories.push(item.category);
                } categorias
                 */
                if(categories.indexOf(item.category)== -1){ //will not work on IE (use polly fill)
                    categories.push(item.category);
                }
            }
            
        }

        displayCatalog();
        displayCategories();
        //console.log(categories);
      },
      error: function(details){
          console.error("Error getting data", details);
      }
    });
        //will do any instruction form here
        console.log("below be ajax");
}


function displayCategories() {
    //travel the categories array
    //get each category
    //create sintax for li   <li> sdfsd</li>
    //append the sintax to #categories

    for (let i = 0; i < categories.length; i++) {
        var cat = categories[i];
        
        //display on html
        var sintax = 
        `<li onclick ="search('${cat}')" class = "list-group-item list-group-item-action
        ">${cat} </li>`;

        $('#categories').append(sintax);
    }
}

function displayCatalog() {
    //travel the array of items
    //get each item
    //display the ite on HTML

    for (let i = 0; i < catalog.length; i++) {
        var item = catalog[i];
        displayItem(item);
    }
    
}

function displayItem(item){
      //display on html
      var sintax = 
      `<div class="item">
          <img src="${item.image}">
          <div class="info">
              <label class="code">${item.code}</label>
              <label class="title">${item.title}</label>
              <label class="price">$ ${item.price}</label>

              <button class="btn btn-info btn sm"> Add </button>
          </div>
      </div>`;


      $('#catalog-container').append(sintax);
}

function search(text){
    //var text = $("#txtSearch").val();
    //console.log(text);

    //clear prev results
    //travel the array
    //get each item
    //if the item a title contains text OR the category contains the text OR the code contains the text
    //display the item
    $("#catalog-container").html('');
    for (let i = 0; i < catalog.length; i++) {
        var item = catalog[i];
        
        if(item.title.toLowerCase().includes(text.toLowerCase()) || item.category.toLowerCase().includes(text.toLowerCase()) || item.code.toLowerCase().includes(text.toLowerCase())){
            displayItem(item);
        }
    }
}

function init(){
    console.log("Catalog Working..!!");
    //hook events
    $("#btnSearch").click(function() {
        var text = $("#txtSearch").val();
        search(text);
    });

    //load data/settings

    fetchData();
}


window.onload = init;


/*
    code
    title
    price
    imgUrl
    quantity
    category
*/
