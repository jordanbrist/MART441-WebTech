function refreshPage()
{
    const params = new URLSearchParams(window.location.search)
    var fName = params.get("inputFirstName");
    var lName = params.get("inputLastName");
    var age = params.get("inputAge");
    var refresh = params.has("norefresh");
    if(!refresh)
    {
        window.location = "index2.html?firstName=" + fName + "&lastName=" + lName + age + "&norefresh=1";
    }
}
