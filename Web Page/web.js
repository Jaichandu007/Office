let userList = [
    {
        username: "admin",
        passwd: "admin",
        fName: "admin",
        lName: " ",
        dob: "26-01-1972",
        eid: "101",
        email: "admin@beehyv.com",
        pwd: "admin",
        phone: "1111111111",
        address: "Kondapur",
        designation: "CEO",
        link: "admin@linkedin.in ",
        language: "English"
    },
    {
        username: "vineetks",
        passwd: "vineetks",
        fName: "vineet",
        lName: "ks ",
        dob: "16-05-2000",
        eid: "104",
        email: "vineetks@beehyv.com",
        pwd: "vineetks",
        phone: "9876543210",
        address: "Kondapur",
        designation: "HR",
        link: "vineetks@linkedin.in",
        language: "English"
    },
    {
        username: "vishnup",
        passwd: "vishnup",
        fName: "Vishnu",
        lName: "P ",
        dob: "07-01-2001",
        eid: "109",
        email: "vishnu@beehyv.com",
        pwd: "vishnu",
        phone: "6202621419",
        address: "Kondapur",
        designation: "Project Manager",
        link: "vishnu@linkedin.in",
        language: "English"
    },
    {
        username: "jaichandu",
        passwd: "jaichandu",
        fName: "Jai",
        lName: "Chandu",
        dob: "17-07-2000",
        eid: "117",
        email: "chandu@beehyv.in",
        pwd: "chandu",
        phone: "8742976478",
        address: "Kondapur",
        designation: "Employee",
        link: "chandu@linkedin.com ",
        language: "English"
    }


]




function getInfo() {
    let username = `${fName}  ${lName}`;
    let passwd = document.getElementById("Passwd");
    let fName = document.getElementById("FirstName");
    let lName = document.getElementById("LastName");
    let dob = document.getElementById("DatOfBirth");
    let eid = document.getElementById("EmployeeID");
    let email = document.getElementById("Email");
    let pwd = document.getElementById("Passwd");
    let phone = document.getElementById("ContactNumber");
    let address = document.getElementById("Address");
    let designation = document.getElementById("Designation");
    let link = document.getElementById("Link");
    let language = document.getElementById("Languages");
}

function verifyUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    console.log(user);
    console.log(pass);


    let l = userList.length;
    for (i = 0; i < l; i++) {
        if (userList[i].username == user || userList[i].phone == user || userList[i].email == user) {
            if (userList[i].passwd == pass) {
                let obj = JSON.stringify(userList[i]);
                window.localStorage.setItem("userDetails", obj);
                return true;
            }
            else {
                alert("Incorrect Password");

            }
        }
    }
    alert("Username doesnot exist. Please Sign Up");
    return false;
}


function validateSignupForm() {

    let firstName = document.getElementById("FirstName").value;
    let lastName = document.getElementById("LastName").value;
    let emailId = document.getElementById("Email").value;
    let profilePic = document.getElementById("ProfilePic").value;
    let passwd = document.getElementById("Passwd").value;
    let add = document.getElementById("Address").value;
    let contactLink = document.getElementById("Link").value;
    let role = document.getElementById("Designation").value;
    let lang = document.getElementById("Languages").value;
    let phoneNum = document.getElementById("ContactNumber").value;
    let dateOfBirth = document.getElementById("DateOfBirth").value;
    let employId = document.getElementById("EmployeeID").value;

    let idVerify = uniqueId(employId);

    let ageverify = validAge(dateOfBirth);

    let numVerify = phoneNumberValidate(phoneNum);


    if (numVerify && ageverify && idVerify) {

        let user = {
            user: firstName + lastName,
            fName: firstName,
            lName: lastName,
            dob: dateOfBirth,
            eid: employId,
            email: emailId,
            pwd: passwd,
            phone: phoneNum,
            address: add,
            designation: role,
            link: contactLink,
            language: lang
        }

        let userObject = JSON.stringify(user);
        window.localStorage.setItem("userDetails", userObject);
        return true;
    }
    else
        return false;

}

function phoneNumberValidate(phoneNum) {

    let numString = phoneNum.toString();

    if (phoneNum < 0 || isNaN(phoneNum) || numString.length != 10) {
        alert("Invalid phone Number");
        return false;
    }
    else {
        return true;
    }
}

function validAge(dateOfBirth) {


    let milliDiv = 365.25 * 24 * 60 * 60 * 1000;

    let dob = new Date(dateOfBirth);

    let age = Math.floor((Date.now() - dob.getTime()) / milliDiv);

    if (age >= 20) {
        return true;
    }
    else {
        alert("Age must be greater than 20.");
        return false;
    }
}



function uniqueId(employId) {

    if (isNaN(employId) || employId < 0) {

        alert('employee ID must be a number greater than 0')
        return false;

    }
    else {
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].eid == employId) {
                alert("Employee Id already Exists.");
                return false;
            }
        }
        return true;
    }
}


function showDetails() {

    let tmp = window.localStorage.getItem("userDetails");

    let userObj = JSON.parse(tmp);


    document.getElementById("fullName").innerHTML = `${userObj.fName}  ${userObj.lName}`;
    document.getElementById("Role").innerHTML = userObj.designation;
    document.getElementById("communicationAddress").innerHTML = userObj.address;
    document.getElementById("mobileNumber").innerHTML = userObj.phone;
    document.getElementById("mailID").innerHTML = userObj.email;
    document.getElementById("personalLink").innerHTML = userObj.link;
    document.getElementById("lang").innerHTML = userObj.language;
}




function modalConnector() {
    console.log(1);
    let webname = document.getElementById("fullName").innerHTML;
    let webdesignation = document.getElementById("Role").innerHTML;
    let webaddress = document.getElementById("communicationAddress").innerHTML;
    let webcontactNumber = document.getElementById("mobileNumber").innerHTML;
    let weblink = document.getElementById("personalLink").innerHTML;
    let webemail = document.getElementById("mailID").innerHTML;
    let weblanguage = document.getElementById("lang").innerHTML;
    console.log(webname);

    document.getElementById("username").value = webname;
    document.getElementById("designation").value = webdesignation;
    document.getElementById("address").value = webaddress;
    document.getElementById("contactNumber").value = webcontactNumber;
    document.getElementById("link").value = weblink;
    document.getElementById("email").value = webemail;
    document.getElementById("language").value = weblanguage;



}

function modalDetails() {
    let modaluser = document.getElementById("username").value;
    let modaldesignation = document.getElementById("designation").value;
    let modaladdress = document.getElementById("address").value;
    let modalcontactNumber = document.getElementById("contactNumber").value;
    let modallink = document.getElementById("link").value;
    let modalemail = document.getElementById("email").value;
    let modallanguage = document.getElementById("language").value;

    document.getElementById("fullName").innerHTML = modaluser;
    document.getElementById("Role").innerHTML = modaldesignation;
    document.getElementById("communicationAddress").innerHTML = modaladdress;
    document.getElementById("mobileNumber").innerHTML = modalcontactNumber;
    document.getElementById("mailID").innerHTML = modalemail;
    document.getElementById("personalLink").innerHTML = modallink;
    document.getElementById("lang").innerHTML = modallanguage;

}

function redirect() {
    if (window.localStorage.length === 0) {
        console.log(window.localStorage.getItem("userDetails"));

    } else {
        window.location.href = "webpage.html";
    }
}

function redirect1() {
    if (window.localStorage.getItem("userDetails") != null) {
        window.location.href = "webpage.html";
    }
}

function removeData() {

    localStorage.removeItem("userDetails");
}

