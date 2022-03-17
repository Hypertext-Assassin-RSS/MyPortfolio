<!--Rajith Sanjaya-->

function itemDTO(id,name,QTY,price) {
    const __id = id;
    const __name = name;
    const  __QTY = QTY;
    const  __price = price;

    this.getItemID = function () {
        return id;
    }
    this.setItemID = function (itemID) {
        id=itemID;
    }
    this.getItemName = function () {
        return name;
    }
    this.setItemName = function (itemName) {
        name=itemName;
    }
    this.getItemQTY = function () {
        return QTY;
    }
    this.setItemQTY = function (itemQTY) {
        QTY = itemQTY;
    }
    this.getItemPrice = function () {
        return price;
    }
    this.setItemPrice = function (itemPrice) {
        price = itemPrice;
    }
}