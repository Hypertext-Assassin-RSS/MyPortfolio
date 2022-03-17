<!--Rajith Sanjaya-->
$("#btnDash").click(function () {
    $("#dash").css("display", "inline");
    $("#order").css("display", "none");
    $("#item").css("display", "none");
    $("#member").css("display", "none");


    $("#btnDash").css("color", "black");
    $("#btnOrder").css("color", "white");
    $("#btnMember").css("color", "white");
    $("#btnItem").css("color", "white");
});

var labVal = ["week one", "week tow", "week three", "week four", "week five"];
var yValues = [30, 49, 44, 12, 30];
var barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: labVal,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Sales"
        }
    }
});