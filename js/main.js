$(document).ready(function () {
    $("#design-img").click(function () {
        $("#dtext").show('500');
        $("#design-img").hide('500');
    });
    $("#dtext").click(function () {
        $("#dtext").hide('500');
        $("#design-img").show('500');
    });
});
$(document).ready(function () {
    $("#design-img2").click(function () {
        $("#dtext2").show('500');
        $("#design-img2").hide('500');
    });
    $("#dtext2").click(function () {
        $("#dtext2").hide('500');
        $("#design-img2").show('500');
    });
});
$(document).ready(function () {
    $("#design-img3").click(function () {
        $("#dtext3").show('500');
        $("#design-img3").hide('500');
    });
    $("#dtext3").click(function () {
        $("#dtext3").hide('500');
        $("#design-img3").show('500');
    });
});
$(document).ready(function () {
    $("#p1").hover(
        function () {
            $(this).addClass("overlay");
            $(".hoover1").show('500');
        },
        function () {
            $(".hoover1").hide('500');
        }
    );
});
$(document).ready(function () {
    $("#p2").hover(
        function () {
            $(this).addClass("overlay");
            $(".hoover2").show('500');
        },
        function () {
            $(".hoover2").hide('500');
        }
    );
}); $(document).ready(function () {
    $("#p3").hover(
        function () {
            $(this).addClass("overlay");
            $(".hoover3").show('500');
        },
        function () {
            $(".hoover3").hide('500');
        }
    );
});
$(document).ready(function () {
    $("#p4").hover(
        function () {
            $(this).addClass("overlay");
            $(".hoover4").show('500');
        },
        function () {
            $(".hoover4").hide('500');
        }
    );
});
$(document).ready(function () {
    $("#p5").hover(
        function () {
            $(this).addClass("overlay");
            $(".hoover5").show('500');
        },
        function () {
            $(".hoover5").hide('500');
        }
    );
});
$(document).ready(function () {
    $("#p6").hover(
        function () {
            $(this).addClass("overlay");
            $(".hoover6").show('500');
        },
        function () {
            $(".hoover6").hide('500');
        }
    );
});
$(document).ready(function () {
    $("#p7").hover(
        function () {
            $(this).addClass("overlay");
            $(".hoover7").show('500');
        },
        function () {
            $(".hoover7").hide('500');
        }
    );
});
$(document).ready(function () {
    $("#p8").hover(
        function () {
            $(this).addClass("overlay");
            $(".hoover8").show('500');
        },
        function () {
            $(".hoover8").hide('500');
        }
    );
});

$(document).ready(function () {
    $("form#formAll").submit(function (event) {
        var name = $("input#intono1").val();
        var email = $("input#intono2").val();
        var message = $("textarea#intono3").val();
        if ($("input#intono1").val() && $("input#intono2").val()) {
            alert("we have received your message. Thank you for reaching out to us.");
        } else {
            alert("Please enter your name and email!");
        }

    });
});
