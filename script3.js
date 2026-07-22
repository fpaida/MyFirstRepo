$(document).ready(function () {

    function showPage(pageId, buttonId){

        $("#homePage").hide();
        $("#aboutPage").hide();
        $("#projectsPage").hide();
        $("#settingsPage").hide();

        $(pageId).fadeIn(300);

        $("nav button").removeClass("active");

        $(buttonId).addClass("active");

    }

    // Home
    $("#homeBtn").click(function(){

        showPage("#homePage","#homeBtn");

    });

    // About
    $("#aboutBtn").click(function(){

        showPage("#aboutPage","#aboutBtn");

    });

    // Projects
    $("#projectsBtn").click(function(){

        showPage("#projectsPage","#projectsBtn");

    });

    // Settings
    $("#settingsBtn").click(function(){

        showPage("#settingsPage","#settingsBtn");

    });

    // Change Font

    $("#fontSelect").change(function(){

        $("body").css(
            "font-family",
            $(this).val()
        );

    });

    // Change Text Color

    $("#colorSelect").change(function(){

        $("body").css(
            "color",
            $(this).val()
        );

    });

    // Dark Mode

    $("#darkModeBtn").click(function(){

        $("body").toggleClass("darkMode");

    });

});