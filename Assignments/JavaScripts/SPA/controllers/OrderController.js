<!--Rajith Sanjaya-->
$(function () {
    $('#datepicker').datepicker();
});

$("#btnOrder").css("color", "black");

$("#orderID").focus();
newID();
memberValidation();
datetime();

$("#btnMemberAdd,#btnItemAdd").prop("disabled",true);


$("#orderID,#memberName,#memberID,#memberContact,#itemNameNameDrop,#itemID,#itemPrice,#discount,#QTAvailable,#QTYorder,#orderID").keydown(function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$("#btnOrder").click(function () {
    $("#dash").css("display", "none");
    $("#order").css("display", "inline");
    $("#item").css("display", "none");
    $("#member").css("display", "none");


    $("#btnDash").css("color", "white");
    $("#btnOrder").css("color", "black");
    $("#btnMember").css("color", "white");
    $("#btnItem").css("color", "white");
    $("#orderID").focus();
});


$("#orderID").focus();
memberValidation();
itemValid();
newID();

$("#btnMemberAdd").keyup(function (event) {
    if (event.key=="Enter"){
        addMember();
        itemValid();
    }
});



function memberValidation() {
    $("#orderID").keyup(function (event) {
        if (event.key=="Enter"){
            $("#memberNameDrop").focus().keyup(function (event) {
                if (event.key=="Enter"){
                    $("#cashierNameDrop").focus().keyup(function (event) {
                        if (event.key=="Enter"){
                            $("#memberID").focus().keyup(function (event) {
                                if (event.key=="Enter"){
                                    $("#memberContact").focus().keyup(function (event) {
                                        if (event.key=="Enter"){
                                            $("#btnMemberAdd").prop("disabled",false).focus();
                                        }
                                    });
                                }
                            });
                        }

                    });
                }
            });
        }
    });
}

function addMember() {
    let memberID = $("#memberID").val();
    let memberName = $("#memberNameDrop").val();
    let memberContact = $("#memberContact").val();
    let cashier = $("#cashierNameDrop").val();
    let orderID = $("#orderID").val();
    let date = $("#date").val();

    newID();

    /*let row =`<tr><td>${memberID}</td><td>${memberName}</td><td>${memberContact}</td><td>${cashier}</td><td>${orderID}</td><td>${date}</td></tr>`;

    $("#tblOrderMember").append(row);*/

    var orderMember = new OrderMemberDTO(orderID,memberID,memberName,memberContact,cashier,date);

    let memberObject={
        OrderID:orderMember.getOrderID(),
        id:orderMember.getMemberID(),
        name:orderMember.getMemberName(),
        contact:orderMember.getMemberContact(),
        cashier:orderMember.getCashier(),
        date:orderMember.getDate()
    }

    MemberOrderDB.push(memberObject);

    loadAllMemberData();

    clearMember();

    newID();

    $("#tblOrderMember>tr").dblclick(function () {
        if (confirm("Are You Sure Want to  Delete This Row ?"))
            $(this).remove();
    });


    $("#btnMemberAdd").prop("disabled",true);

}

function loadAllMemberData() {
    $("#tblOrderMember").empty();
    for (var i in MemberOrderDB){
        let row = `<tr><td> ${MemberOrderDB[i].id} </td><td>${MemberOrderDB[i].name}</td><td>${MemberOrderDB[i].contact}</td><td>${MemberOrderDB[i].cashier}</td><td>${MemberOrderDB[i].OrderID}</td><td>${MemberOrderDB[i].date}</td></tr>`;
        $("#tblOrderMember").append(row);
    }
}

function addItem() {
    let itemName = $("#itemNameNameDrop").val();
    let itemID = $("#itemID").val();
    let itemPrice = $("#itemPrice").val();
    let discount = $("#discount").val();
    let QTYavailable = $("#QTAvailable").val();
    let QTYorder = $("#QTYorder").val();
    let orderID = $("#orderID").val();

    let Item = new OrderItemDTO(itemID,itemName,QTYorder,itemPrice,orderID);

    let itemObject={
        itemID:Item.getItemID(),
        name:Item.getItemName(),
        QTY:Item.getItemQTY(),
        Price:Item.getItemPrice(),
        OrderID:Item.getOrderID()
    }

    ItemOrderDB.push(itemObject);


    countTotal();

    loadAllItemData();

    $("#tableOrder>tr").dblclick(function () {
        if (confirm("Are You Sure Want to  Delete This Row ?"))
            $(this).remove();
    });

    changeQTY();

    clearItem();

    $("#btnItemAdd").prop("disabled", true);

}

let Total = 0;
function countTotal() {
    let Price  = parseInt($("#itemPrice").val());
    let QTY = parseInt($("#QTYorder").val());
    let SubTotal = Price*QTY;
    Total = Total+SubTotal;
    $("#total").text(Total);

}

function loadAllItemData(){
    $("#tableOrder").empty();
    for (var i in ItemOrderDB){
        let row = `<tr><td>${ItemOrderDB[i].itemID}</td><td>${ItemOrderDB[i].name}</td><td>${ItemOrderDB[i].Price}</td><td>${ItemOrderDB[i].QTY}</td></tr>`
        $("#tableOrder").append(row);
    }
}

function itemValid() {
    $("#itemNameNameDrop").focus().keyup(function (event) {
        if (event.key=="Enter"){
            $("#itemPrice").focus().keyup(function (event) {
                if (event.key=="Enter"){
                    $("#itemID").focus().keyup(function (event) {
                        if (event.key=="Enter"){
                            $("#QTAvailable").focus().keyup(function (event) {
                                if (event.key=="Enter"){
                                    $("#discount").focus().keyup(function (event) {
                                        if (event.key=="Enter"){
                                            $("#QTYorder").focus().keyup(function (event) {
                                                if (event.key=="Enter"){
                                                    $("#btnItemAdd").prop("disabled",false).focus();

                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }

                    });
                }
            });
        }
    });
}


$("#btnItemAdd").keyup(function (event) {
    if (event.key=="Enter"){
        $("#itemNameNameDrop").focus();
        addItem();
    }
});



function clearMember() {
    $("#memberID").val("");
    $("#memberName").val("");
    $("#memberContact").val("");
    $("#cashier").val("");
    $("#orderID").val("");
}
function clearItem() {
    $("#itemName").val("");
    $("#itemID").val("");
    $("#itemPrice").val("");
    $("#discount").val("");
    $("#QTYorder").val("");
}
function datetime() {
    let today = new Date();

    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    let dateTime = date+' '+time;

    $("#date").val(dateTime);
}
function newID() {
    let genID = "OR00"+ MemberOrderDB.length;
    $("#orderID").val(genID);
}

function loadAllMember() {
    $("#memberNameDrop").empty();
    for (var i in MemberDB){
        let data = `<option>${MemberDB[i].name}</option>`;
        $("#memberNameDrop").append(data);

    }
}
function loadAllItem() {
    $("#itemNameNameDrop").empty();
    for (var i in ItemDB){
        let data = `<option>${ItemDB[i].name}</option>`;
        $("#itemNameNameDrop").append(data);
    }
}

$("#memberNameDrop").keyup(function (event) {
    for (var i in MemberDB){
        if ($("#memberNameDrop").val()==MemberDB[i].name){
            $("#memberID").val(MemberDB[i].id);
            $("#memberContact").val(MemberDB[i].contact);
        }
    }
});

$("#itemNameNameDrop").keyup(function (event) {
   for (var i in ItemDB){
       if ($("#itemNameNameDrop").val()==ItemDB[i].name){
           $("#itemID").val(ItemDB[i].ID);
           $("#itemPrice").val(ItemDB[i].price);
           $("#QTAvailable").val(ItemDB[i].QTY);
       }
   }
});


function changeQTY() {
    let oldQty = parseInt($("#QTAvailable").val());
    let QTY = parseInt($("#QTYorder").val());
    let itemQTY = oldQty-QTY;
    for (var i in ItemDB){
        if ($("#itemNameNameDrop").val()==ItemDB[i].name){
            $("#QTAvailable").val(itemQTY);
            ItemDB[i].setItemQTY(itemQTY);
        }
    }

}

