$(document).ready(function () {

    // ==========================
    // HOME
    // ==========================
    $("#homeBtn").click(function () {

        $("section").hide();
        $("#homePage").fadeIn(600);

    });

    // ==========================
    // ABOUT
    // ==========================
    $("#aboutBtn").click(function () {

        $("section").hide();
        $("#aboutPage").fadeIn(600);

    });

    // ==========================
    // PROJECTS
    // ==========================
    $("#projectsBtn").click(function () {

        $("section").hide();
        $("#projectsPage").fadeIn(600);

    });

    // ==========================
    // SETTINGS
    // ==========================
    $("#settingsBtn").click(function () {

        $("section").hide();
        $("#settingsPage").fadeIn(600);

    });

    // ==========================
    // CHANGE FONT
    // ==========================
    $("#fontSelect").change(function () {

        $("body").css(
            "font-family",
            $(this).val()
        );

    });

    // ==========================
    // CHANGE TEXT COLOR
    // ==========================
    $("#colorSelect").change(function () {

        $("body").css(
            "color",
            $(this).val()
        );

    });

    // ==========================
    // DARK MODE
    // ==========================
    $("#darkModeBtn").click(function () {

        $("body").toggleClass("darkMode");

    });

});