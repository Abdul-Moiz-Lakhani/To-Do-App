function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('hrs').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    var t = setTimeout(startTime, 500);

    var daysList = ["SUN","MON","TUE","WED","THURS","FRI","SAT"];
    var k = today.getDay();

    document.getElementById("days").innerHTML = daysList[k];
}

function checkTime(i)
{
    // add zero in front of numbers < 10
    if (i < 10)
    {
        i = "0" + i
    };
      
    return i;
}

/* Sign In JS */

function borderStyle(x,y)
{
    document.getElementById(y).placeholder = "";

    x = document.getElementById(x);

    x.style.borderBottomColor = "orange";
    x.style.transition = "all 1s";
    x.style.transitionTimingFunction = "ease-out";
}

function hideBorderStyle(x)
{
    x.style.borderBottomColor = "darkgrey";
}

var userName;
var userKey;
var userNameSignIn;
var userKeySignIn;

function save()
{
    userName = document.getElementById('userName').value;
    userKey = document.getElementById('key').value;

    if(userName == "" || userKey == "")
    {
        alert("User Name or Key is missing...!");
    }
    else
    {
        localStorage.setItem(userKey,userName);
        alert("Congrats! You are successfully Registered");
    }
}

function check()
{
    userNameSignIn = document.getElementById('userNameS').value;
    userKeySignIn = document.getElementById('keyS').value;

    if(userNameSignIn == "" || userKeySignIn == "")
    {
        alert("User Name or Key is missing...!");
    }
    else
    {
        userSignIn();
    }
}

function userSignIn()
{
    userNameSignIn = document.getElementById('userNameS').value;
    userKeySignIn = document.getElementById('keyS').value;

    if(localStorage.length == 0)
    {
        alert("Nothing in record. Please Register First");
    }
    else
    {
        var flag = true;

        for (var i = 0; i < localStorage.length; i++)
        {
            var key   = localStorage.key(i);
            var value = localStorage.getItem(key);

            if(userNameSignIn === value && userKeySignIn === key)
            {
                alert("Welcome! You are successfully Signed In");

                flag = false;

                showNav();

                break;
            }
        }

        if(flag === true)
        {
             alert("User Name or Key is Incorrect! \nOR You are not registered \n\nNote: To register click I want to register" );
        }
    }
}

function showSignIn()
{
    document.getElementById('reg_div').style.display = 'none';
    document.getElementById('logout').style.display = "none";    
    document.getElementById('trashImg').style.display = "none";    
    document.getElementById('addItem').style.display = "none";    
    document.getElementById('signIn_div').style.display = 'block';
}

function showRegForm()
{
    document.getElementById('signIn_div').style.display = 'none';
    document.getElementById('logout').style.display = "none";
    document.getElementById('trashImg').style.display = "none";    
    document.getElementById('addItem').style.display = "none";
    document.getElementById('reg_div').style.display = 'block';    
}

/* Add Work in List Page */

function showNav() 
{
    document.getElementById('logout').style.display = "block";
    document.getElementById('viewList').style.display = "block";
    document.getElementById('addItem').style.display = "none";
    document.getElementById('trashImg').style.display = "none";
    document.getElementById('greetName').innerHTML = userNameSignIn;

    document.getElementById('signIn_div').style.display = 'none';
    document.getElementById('addWork_div').style.display = 'block';
}

function logOutBtn()
{
    document.getElementById('logout').style.display = "none";
    document.getElementById('viewList').style.display = "none";

    document.getElementById('addWork_div').style.display = 'none';
    document.getElementById('WorkList_div').style.display = 'none';

    document.getElementById('reg_div').style.display = 'block';
}

function showListPage()
{
    document.getElementById('logout').style.display = "none";
    document.getElementById('viewList').style.display = "none";
    document.getElementById('addItem').style.display = "block";
    document.getElementById('trashImg').style.display = "block";

    document.getElementById('addWork_div').style.display = 'none';
    document.getElementById('WorkList_div').style.display = 'block';

    if (workArray.length == 0) 
    {    
        document.getElementById('workList').style.display = "none";
        document.getElementById('message2').style.display = "block";
    }
    else
    {
        document.getElementById('message2').style.display = "none";
        document.getElementById('workList').style.display = "block";
    }
}

function changeSymbol(imgId,imgsrc)
{
    document.getElementById(imgId).src = imgsrc;
}

function previousSymbol(imgId,imgsrc)
{
    document.getElementById(imgId).src = imgsrc;
}

/* To Do Work List */

var workArray = [];

var count = 0;

function pushWork()
{
    
    var userWork = document.getElementById('getWork').value;

    if (userWork == "")
    {
        alert("Nothing to add! Please enter work to do");
    }
    else if (userWork.length > 14)
    {
        alert("Be specific. Maximum 14 Characters are allowed!");
    }
    else 
    {
        workArray.push(userWork);

        alert("Work Successfully Added!");
        document.getElementById('getWork').value = "";

        var listItem = document.createElement("li");
        listItem.style.backgroundColor = "rgba(255,179,71,0.5)";
        listItem.style.height = "30px";
        listItem.style.borderTop = "3px solid orange";
        listItem.style.borderBottom = "3px solid orange";
        listItem.style.clear = "both";
        var id = listItem.id = 'abc' + count;

        var bulletImage = document.createElement('div');
        bulletImage.id = "bulletImage";

        var img1 = document.createElement('img');
        img1.src = "images/check.png";

        var itemName = document.createElement("p");
        itemName.id = "innerText";

        var editImage = document.createElement('div');
        editImage.id = "edit";

        var img3 = document.createElement('img');
        img3.id = "editText";
        img3.setAttribute('title','Edit');
        img3.src = "images/edit.png";
        img3.onclick = function ()
        { 
            var textChange = prompt("Enter New Work To Do");
            
            var node = document.getElementById(id);
            var para = node.getElementsByTagName('p');
            
            if (textChange == "")
            {
                alert("You entered Nothing!");
            }
            else if (textChange.length > 14)
            {
                alert("Be specific. Maximum 14 Characters are allowed!");
            }
            else
            {   
                para[0].innerHTML = textChange;
            }
        };
        
        var trashImage = document.createElement('div');
        trashImage.id = "del";

        var img2 = document.createElement('img');
        img2.id = "delThis";
        img2.setAttribute('title','Delete');
        img2.src = "images/trash_wt.png";
        img2.onclick = function ()
        { 
            var node = document.getElementById(id);
            node.parentNode.removeChild(node);

            showMsgTwo();
        };

        var text = document.createTextNode(userWork);

        bulletImage.appendChild(img1);
        trashImage.appendChild(img2);
        editImage.appendChild(img3);

        itemName.appendChild(text);

        listItem.appendChild(trashImage);
        listItem.appendChild(editImage);
        listItem.appendChild(bulletImage);
        listItem.appendChild(itemName);
        document.getElementById("workList").appendChild(listItem);
    }

    count = count + 1;
}

function showMsgTwo()
{

    workArray.pop();

    if(workArray.length == 0)
    {
        document.getElementById('message2').style.display = "block";
        document.getElementById('workList').style.display = "none";
    }
}
    
function delAll()
{
    var x = document.getElementById('workList');    
    
    var y = x.getElementsByTagName('li');

    var c = y.length;

    if( c === 0 )
    {
        alert("There is noting in the List...");
    }
    else
    {   
        while (c !== 0)
        {
            var list = x.childNodes[c];

            x.removeChild(list);

            c--;
        }
    }

    document.getElementById('message2').style.display = "block";
    document.getElementById('workList').style.display = "none";
}