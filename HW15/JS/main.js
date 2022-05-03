function refreshPage() {
    const params = new URLSearchParams(window.location.search)
    var fName = params.get("firstName");
    var lName = params.get("lastName");
    var age = params.get("inputAge");
    var refresh = params.has("norefresh");
    if (!refresh) {
        window.location = "index2.html?firstName=" + fName + "&lastName=" + lName + "&inputAge=" + age + "&norefresh=1";
    }
}
