/*<!--Rajith Sanjaya-->*/
$("#btnMember").click(function () {
    $("#dash").css("display", "none");
    $("#order").css("display", "none");
    $("#item").css("display", "none");
    $("#member").css("display", "inline");


    $("#btnDash").css("color", "white");
    $("#btnOrder").css("color", "white");
    $("#btnMember").css("color", "black");
    $("#btnItem").css("color", "white");

    $("#name").focus();

});





$("#name,#age,#contact,#id").keydown(function (event) {
   if (event.key=="Tab"){
       event.preventDefault();
   }
});

$('#btnSaveMember').prop("disabled", true);
$('#btnClearMember').prop("disabled", true);
newMemID();
memberValidation();





$('#btnSaveMember').click(function () {
    $('#memTable>tr').off("click")
    let memName = $('#name').val();
    let memAge = $('#age').val();
    let memContact = $('#contact').val();
    let memId = $('#id').val();




    var Member = new MemberDTO(memId,memName,memAge,memContact);

    //object created using model get methods
    let memberObject={
        id:Member.getMemberID(),
        name:Member.getMemberName(),
        age:Member.getMemberAge(),
        contact:Member.getMemberContact()
    }

    //add object to array DB

    MemberDB.push(memberObject);

    loadAllMember();

    clearMemberData();

    newMemID();

    loadAllMembers();



    $('#btnSaveMember').prop("disabled", true);

    $('#memTable>tr').dblclick(function () {
        if (confirm("Are You Sure You Want To Delete This Row")) {
            $(this).remove();
        }

    });

    $('#memTable>tr').click(function () {
        let Id = $(this).children(":nth-child(1)").text();
        let Name = $(this).children(":nth-child(2)").text();
        let Age = $(this).children(":nth-child(3)").text();
        let Contact = $(this).children(":nth-child(4)").text();

        $('#name').val(Name);
        $('#age').val(Age);
        $('#contact').val(Contact);
        $('#id').val(Id);

        $('#btnSaveMember').prop("disabled", false);
        $('#btnClearMember').prop("disabled", false);
    });
});

    //load all data to table
    function loadAllMembers() {
        $("#memTable").empty();
        for (var i in MemberDB) {
            //add array data to row
            let row = `<tr><td> ${MemberDB[i].id} </td><td>${MemberDB[i].name}</td><td>${MemberDB[i].age}</td><td>${MemberDB[i].contact}</td></tr>`;
            //add row to table
            $('#memTable').append(row);

        }
    }



//validate member information
function memberValidation() {
    let  NameRegEx = /^[A-z]{3,30}$/;
    let  AgeRegEx = /^[0-9]{2}$/;
    let contactRegEx =/^[0-9]{10}$/;

    $("#name").keyup(function (event) {
       if (NameRegEx.test($("#name").val())){
           $("#name").css("border", "2px solid blue");
           $("#error6").text("  ");
           if (event.key=="Enter"){
               $("#age").focus().keyup(function (event) {
                  if (AgeRegEx.test($("#age").val())){
                      $("#age").css("border", "2px solid blue");
                      $("#error7").text("  ");
                      if (event.key=="Enter"){
                          $("#contact").focus().keyup(function (event) {
                              if (contactRegEx.test($("#contact").val())){
                                  $("#contact").css("border", "2px solid blue");
                                  $("#error4").text("  ");
                                  if (event.key=="Enter"){
                                      $("#btnSaveMember").prop("disabled",false).focus();
                                  }
                              }else{
                                  $("#contact").css("border", "2px solid red");
                                  $("#error4").text("Please Note Only Ten Numbers Allowed !");
                                  $("#error4").css("color", "red");
                              }

                          });
                      }
                  }else{
                      $("#age").css("border", "2px solid red");
                      $("#error7").text("Please Not Only Two Number Allowed !");
                      $("#error7").css("color", "red");
                  }
               });
           }
       }else{
           $("#name").css("border", "2px solid red");
           $("#error6").text("To Short !");
           $("#error6").css("color", "red");
       }
    });
    
}

$("#btnSearchMember").click(function () {
   searchMember();
});

//search Member

function searchMember() {
    for(var i in MemberDB){
        if($("#searchMember").val()==MemberDB[i].id){
            /*console.log("ok",MemberDB[i].id,MemberDB[i].name);*/
            $("#id").val(MemberDB[i].id);
            $("#name").val(MemberDB[i].name);
            $("#age").val(MemberDB[i].age);
            $("#contact").val(MemberDB[i].contact);

        }else{

        }
    }
}

function clearMemberData() {
    $("#id").val("");
    $("#name").val("");
    $("#age").val("");
    $("#contact").val("");
    $("#btnSaveMember").prop("disabled", true);
    $("#btnClearMember").prop("disabled", true);
    $("#name").focus();

}

$("#btnClearMember").click(function () {
    if (confirm("Are you sure you want to delete this ?")) {
        setTimeout(clearMemberData);
    }
});

//generate new id
function newMemID() {
    let genID = "M000"+MemberDB.length;
    $('#id').val(genID);
}