
$(document).ready(function () {
    $("#search").on("keydown", function () {
        var value = $(this).val().toLowerCase();
        $("#blogpost div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function three(imgurl, title, content, author, time, link) {
    let code = ' <a href="'+link+'" class="w3-col s12 m6 l4" style="padding:0px 30px">' +
        ' <div class="blog-cards three w3-card w3-white">' +
        '<img src="' + imgurl + '" width="100%"  style="border-radius:10px 10px 0px 0px" alt="' + title + '">' +
        '<div class="card-data w3-center" style="width:100%; display:flex;flex-direction: column;">' +
        '<div class="one" style="height:90%; justify-content: space-between;">' +
        '<h4 style="margin:0px; font-weight:bold; ">' + title + '</h4>' +
        '<p style="margin: 10px;font-size:12px;">' + content + '</p>' +
       
        '</div>' +
        ' </div> </div></a>';
    $("#blogpost").append(code);
}

function two(imgurl, title, content, author, time, link) {
    let code = ' <a href="'+link+'" class="w3-col s12 m6 l6" style="padding:0px 35px">' +
        ' <div class="blog-cards w3-card w3-white" style="height:350px;">' +
        '<img src="' + imgurl + '" width="100%"  style="border-radius:10px 10px 0px 0px" alt="' + title + '">' +
        '<div class="card-data w3-center" style="width:100%; display:flex;flex-direction: column;">' +
        '<div class="one" style="height:90%;justify-content: space-between;">' +
        '<h4 style="margin:0px; font-weight:bold;">' + title + '</h4>' +
        '<p style="margin: 10px;font-size:14px">' + content + '</p>' +
        '</div>' +
        ' </div> </div></a>';
    $("#blogpost").append(code);
}

function one(imgurl, title, content, author, time, link) {
    let code = '<a href="'+link+'" class="w3-col l12" style="padding:0px 30px;">'+
    '<div class="blog-cards-one w3-card w3-white">'+
    '<img src="' + imgurl + '" width="100%"  style="border-radius:10px 10px 0px 0px" alt="' + title + '">' +
        ' <div class="card-data w3-center" style="width:100%; display:flex;flex-direction: column;">' +
        '<div class="one" style="height:90%;justify-content: space-evenly;">' +
        '<h3 style="margin:0px; font-weight:bold;">' + title + '</h3>' +
        '<p style="margin: 10px;">' + content + '</p>' +
        '</div></div></div></a>';

    $("#blogpost").append(code);
}
