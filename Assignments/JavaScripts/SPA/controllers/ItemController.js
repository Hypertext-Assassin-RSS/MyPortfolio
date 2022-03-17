<!--Rajith Sanjaya-->

$("#btnItem").click(function () {
    $("#dash").css("display", "none");
    $("#order").css("display", "none");
    $("#item").css("display", "inline");
    $("#member").css("display", "none");


    $("#btnDash").css("color", "white");
    $("#btnOrder").css("color", "white");
    $("#btnMember").css("color", "white");
    $("#btnItem").css("color", "black");

    $("#item-name").focus();
});



$("#item-name,#QTY,#singlePrice").keydown(function (event) {
   if (event.key=="Tab"){
       event.preventDefault();
   }
});
newItemID();
itemValidation();


$('#btnSaveItem').prop("disabled", true);
$("#btnClearItem").prop("disabled", true);

/*$("#singlePrice").val("Rs:")*/

$('#btnSaveItem').click(function () {

    $('#itemTable>tr').off("click", "dblclick")

    let ItemID = $("#item-ID").val();
    let ItemName = $('#item-name').val();
    let QTY = $('#QTY').val();
    let SinglePrice = $('#singlePrice').val();

    let Item = new itemDTO(ItemID,ItemName,QTY,SinglePrice);

    const itemObject = {
        ID:Item.getItemID(),
        name:Item.getItemName(),
        QTY:Item.getItemQTY(),
        price:Item.getItemPrice()
    }

    ItemDB.push(itemObject);

    loadAllItem();

    clearItemData();

    $("#item-name").focus();

    newItemID();

    /*$('#singlePrice').val("Rs:")*/

    loadAllItems();

    $('#btnSaveItem').prop("disabled", true);


    $('#itemTable>tr').dblclick(function () {
        if (confirm("Are You Sure Want TO Remove This Row ?")) {
            $(this).remove();
        }
    });

    $('#itemTable>tr').click(function () {
        let itemID = $(this).children(":nth-child(1)").text();
        let name = $(this).children(":nth-child(2)").text();
        let QTY = $(this).children(":nth-child(3)").text();
        let price = $(this).children(":nth-child(4)").text();

        $("#item-ID").val(itemID);
        $('#item-name').val(name);
        $('#QTY').val(QTY);
        $('#singlePrice').val(price);

        $('#btnSaveItem').prop("disabled", false);
        $("#btnClearItem").prop("disabled", false);
    });
});

function itemValidation() {
    let nameRegEx = /^[A-z]{2,10}$/;
    let QTYRegEx = /^[0-9]{1,10}$/;
    let priceRegEX = /^[0-9]{2,10}$/;

    $("#item-name").keyup(function (event) {
       if (nameRegEx.test($("#item-name").val())){
           $("#item-name").css("border", "2px solid blue");
           $("#error5").text("  ");
           $("#btnClearItem").prop("disabled", false);
           if (event.key=="Enter"){
               $("#QTY").focus().keyup(function (event) {
                  if (QTYRegEx.test($("#QTY").val())){
                      $("#QTY").css("border", "2px solid blue");
                      $("#error6").text("  ");
                      $("#btnClearItem").prop("disabled", false);
                      if (event.key == "Enter") {
                          $("#singlePrice").focus().keyup(function (event) {
                              if (priceRegEX.test($("#singlePrice").val())){
                                  $("#singlePrice").css("border", "2px solid blue");
                                  $("#error7").text("  ");

                                  $("#btnClearItem").prop("disabled", false);

                                  $('#btnSaveItem').prop("disabled", false);
                                  if (event.key == "Enter") {
                                      $("#btnSaveItem").focus();
                                  }
                              }else{
                                  $("#singlePrice").css("border", "2px solid red");
                                  $("#error7").text("Only Numbers !");
                                  $("#error7").css("color", "red");
                              }
                          });
                      }
                  }else{
                      $("#QTY").css("border", "2px solid red");
                      $("#error6").text("Only Numbers !");
                      $("#error6").css("color", "red");
                  }
               });
           }
       }else{
           $("#item-name").css("border", "2px solid red");
           $("#error5").text("Least 2 Characters Need !");
           $("#error5").css("color", "red");
       }
    });


}

function loadAllItems() {
    $("#itemTable").empty();
    for (var i in ItemDB){
        let row = `<tr><td>${ItemDB[i].ID}</td><td>${ItemDB[i].name}</td><td>${ItemDB[i].QTY}</td><td>${ItemDB[i].price}</td></tr>`

        $("#itemTable").append(row);
    }
}


$("#btnClearItem").click(function () {
    if (confirm("Are you sure you want to clear this ?")) {
        clearItemData();
    }
});

$("#btnSearchItem").click(function () {
    searchItem();
});


function searchItem() {
    for (var i in ItemDB){
        if ($("#searchItem").val()==ItemDB[i].name){
            $("#item-ID").val(ItemDB[i].ID);
            $("#item-name").val(ItemDB[i].name);
            $("#QTY").val(ItemDB[i].QTY);
            $("#singlePrice").val(ItemDB[i].price);

        }else{

        }
    }
}

function clearItemData() {
    $("#item-ID").val("");
    $("#item-name").val("");
    $("#QTY").val("");
    $("#singlePrice").val("");
    $("#btnSaveItem").prop("disabled", true);
    $("#btnClearItem").prop("disabled", true);
}
function newItemID() {
    let genID = "IT000"+ItemDB.length;
    $("#item-ID").val(genID);
}

