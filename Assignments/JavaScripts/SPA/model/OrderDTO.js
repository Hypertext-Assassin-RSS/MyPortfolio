<!--Rajith Sanjaya-->
    function OrderMemberDTO(orderID,id,name,contact,cashier,date) {
        const __orderID = orderID;
        const __id = id;
        const __name = name;
        const __contact = contact;
        const __cashier = cashier;
        const __date = date;

        this.getOrderID = function()  {
            return orderID;
        }
        this.setOrderID = function (OrderID) {
            orderID=OrderID;
        }
        this.getMemberID = function()  {
            return id;
        }
        this.setMemberID = function (memberID) {
            id=memberID;
        }
        this.getMemberName = function()  {
            return name;
        }
        this.setMemberName = function (memberName) {
            id=memberName;
        }
        this.getMemberContact = function()  {
            return contact;
        }
        this.setMemberContact = function (memberContact) {
            id=memberContact;
        }
        this.getCashier = function () {
            return cashier;
        }
        this.setCashier = function (Cashier) {
            cashier = Cashier;
        }
        this.getDate = function () {
            return date;
        }
        this.setDate = function (Date) {
            date = Date;
        }
    }
    function OrderItemDTO(ItemID,name,QTY,price,OrderID) {
        const __ItemID=ItemID;
        const __name = name;
        const  __QTY = QTY;
        const  __price = price;
        const __orderId = OrderID;

        this.getItemID = function () {
            return ItemID;
        }
        this.seItemID = function (itemID) {
            ItemID = itemID
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
        this.setItem = function (itemPrice) {
            price = itemPrice;
        }
        this.getOrderID = function () {
            return OrderID;
        }
        this.setOrderID = function (orderID) {
            OrderID = orderID;
        }
    }


