$(document).ready(function () {

    // Home Button
    $("#homeBtn").click(function () {

        $("#homePage").show();
        $("#aboutPage").hide();
        $("#projectsPage").hide();
        $("#settingsPage").hide();

    });

    // About Button
    $("#aboutBtn").click(function () {

        $("#homePage").hide();
        $("#aboutPage").show();
        $("#projectsPage").hide();
        $("#settingsPage").hide();

    });

    // Projects Button
    $("#projectsBtn").click(function () {

        $("#homePage").hide();
        $("#aboutPage").hide();
        $("#projectsPage").show();
        $("#settingsPage").hide();

    });

    // Settings Button
    $("#settingsBtn").click(function () {

        $("#homePage").hide();
        $("#aboutPage").hide();
        $("#projectsPage").hide();
        $("#settingsPage").show();

    });

    // Change Font
$("#fontSelect").change(function () {

    $("body").css(
        "font-family",
        $(this).val()
    );

});

// Change Text Color
$("#colorSelect").change(function () {

    $("body").css(
        "color",
        $(this).val()
    );

});

// Dark Mode
$("#darkModeBtn").click(function () {

    $("body").toggleClass("darkMode");

});

});