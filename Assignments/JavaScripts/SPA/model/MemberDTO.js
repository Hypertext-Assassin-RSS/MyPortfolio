<!--Rajith Sanjaya-->

function MemberDTO(id,name,age,contact) {
    const __id = id;
    const __name = name;
    const __age = age;
    const __contact = contact;

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
        name=memberName;
    }
    this.getMemberAge = function()  {
        return age;
    }
    this.setMemberName = function (memberAge) {
        age=memberAge;
    }
    this.getMemberContact = function()  {
        return contact;
    }
    this.setMemberContact = function (memberContact) {
        contact=memberContact;
    }
}