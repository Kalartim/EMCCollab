// Tab Function
function tabScript(event, title) {

    var i, tabcontent, tablinks;

    // Gets all elements in tabcon class and hides them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //Gets all elements in tablinks class and removes them from the active class
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Show the  current tab, and add the active class to the button that opens that tab.
    document.getElementById(title).style.display = "block";
    event.currentTarget.className += " active";
}