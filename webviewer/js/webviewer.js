function qs(key) {
    key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
    let match = location.search.match(
        new RegExp("[?&]" + key + "=([^&]+)(&|$)")
    );
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}

function jumpToPage(page) {
    const offset = $("img")
        .eq(123)
        .prev()
        .offset();
    if (offset != null) $("html").scrollTop(offset.top);
}

function getCurPage() {
    return parseInt(
        $("img:in-viewport")
            .first()
            .prev()
            .text()
    );
}

function loadSampleManga(folder) {
    let count = 0;
    $.ajax({
        url: folder,
        success: function(data) {
            $(data)
                .find("a")
                .attr("href", function(i, val) {
                    if (val.match(/\.(jpe?g|png|gif)$/i)) {
                        $(".images").append(
                            `<div class='text'><b>${++count}</b></div><img src='${folder +
                                val}'>`
                        );
                    }
                });
        },
        complete: function(data) {
            showLoadingForSample();
            afterImagesLoaded();
        }
    });
}
const title = qs("title");
let folder;
if (title) {
    folder = "titles/" + title + "/";
    const volume = qs("vol");
    if (volume) {
        folder += "vol" + volume + "/";
        let chapter = qs("chap");
        if (chapter) folder += "chap" + chapter + "/";
    }
}

$(function() {
    if (folder) {
        loadSampleManga(folder);
    }
    // User select folder
    $("#filepicker").change(function() {
        if (!FileReader) {
            alert("Not supported browser!");
            return;
        }
        // Load images
        let files = this.files;
        let allImagesLoadedPromises = [];
        if (files && files.length) {
            $(".images").html("");
            let k = 0;
            let loadedCount = 0;
            console.log();
            const loc = files[0].webkitRelativePath;
            if (loc) folder = loc.substring(0, loc.lastIndexOf("/"));
            let pageCount = 0;
            for (let i = 0; i < files.length; i++) {
                const fileType = files[i].type;
                // Skip if it's not an image file
                if (fileType.substring(0, fileType.indexOf("/")) !== "image")
                    continue;
                const p = new Promise(function(resolve, reject) {
                    const fr = new FileReader();
                    fr.onload = function(e) {
                        $(".images").append(
                            `<div class='text'><b>${++pageCount}</b></div><img src='${
                                e.target.result
                            }'>`
                        );
                        let j = ++k % 5;
                        const progress = parseInt(
                            (++loadedCount / files.length) * 100
                        );
                        $("#fb_load").html(
                            "Loading images" +
                                Array(j + 1).join(".") +
                                Array(6 - j).join("&nbsp") +
                                "<b>" +
                                progress +
                                "%</b>"
                        );
                        resolve();
                    };
                    fr.readAsDataURL(files[i]);
                });
                allImagesLoadedPromises.push(p);
            }
            Promise.all(allImagesLoadedPromises).finally(afterImagesLoaded);
        }
    });
    let w = $(".sidebar").outerWidth();
    $(".feedback").css("max-width", parseFloat(w) - 20 + "px");
    // $(".images").css("margin-left", parseFloat(w) + 10 + "px");
    $(".images").on("click", "img", function() {
        $("body").animate(
            {
                scrollTop: $(this)
                    .nextAll("img")
                    .first()
                    .prev()
                    .offset().top
            },
            400
        );
    });

    $("#btn_zoom_in").on("click", function() {
        let curPage = getCurPage();
        $(".images").css({
            width: parseFloat($(".images")[0].style.width) + 5 + "%"
        });
        jumpToPage(curPage);
    });
    $("#btn_zoom_out").on("click", function() {
        let curPage = getCurPage();
        $(".images").css({
            width: parseFloat($(".images")[0].style.width) - 5 + "%"
        });
        jumpToPage(curPage);
    });
    $("#btn_fit").on("click", function() {
        let curPage = getCurPage();
        $(".images").css({
            width: "100%"
        });
        jumpToPage(curPage);
    });
    $("#btn_first").on("click", function() {
        $("html").scrollTop(
            $("img")
                .first()
                .prev()
                .offset().top
        );
    });
    $("#btn_last").on("click", function() {
        $("html").scrollTop(
            $("img")
                .last()
                .prev()
                .offset().top
        );
    });
    $("#btn_go").on("click", function() {
        jumpToPage($("#txtPage").val());
    });
    $("#txtPage").keypress(function(e) {
        if (e.keyCode == 13) $("#btn_go").click();
    });
    $("#btn_bookmark").on("click", function() {
        //let pos = $('body').scrollTop();
        let oldBmPage = Cookies.get(folder + "page");
        let page = getCurPage();
        let size = parseFloat($(".images")[0].style.width);
        //Cookies.set('scroll', pos, {expires: 7});
        Cookies.set(folder + "page", page, { expires: 7 });
        Cookies.set(folder + "zoom", size, { expires: 7 });
        $("img")
            .eq(oldBmPage - 1)
            .css("border", "1px solid black");
        $("img")
            .eq(oldBmPage - 1)
            .prev()
            .css(
                "text-shadow",
                "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black"
            );
        $("img")
            .eq(page - 1)
            .css("border", "2px solid red");
        $("img")
            .eq(page - 1)
            .prev()
            .css(
                "text-shadow",
                "-1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red"
            );
        //$("#fb_scroll").text("Added bookmark at position " + pos + ".");
        $("#fb_page").html("● Added bookmark at page <b>" + page + "</b>.");
        $("#fb_zoom").html(
            "● Remembered content size at <b>" + size + "%</b>."
        );
    });
    $("#btn_toggle").on("click", function() {
        $(".togglable").toggle("slow", function() {
            if ($("#btn_toggle").text() == "Hide") {
                $("#btn_toggle").text("Show");
            } else {
                $("#btn_toggle").text("Hide");
            }
        });
    });
    $(window).scroll(function() {
        $(".pageCount").html(
            "Page <b>" + getCurPage() + "</b> of <b>" + $("img").length + "</b>"
        );
    });
});

let imgCountdown = 0;

function afterImagesLoaded() {
    if ($(".images").children().length === 0) {
        console.log("Nothing is loaded yet!");
        return;
    }
    $("#fb_load").html("");
    let bmScroll = null;
    let bmPage = Cookies.get(folder + "page");
    let bmZoom = Cookies.get(folder + "zoom");
    if (bmScroll) {
        $("body").animate(
            {
                scrollTop: bmScroll
            },
            1000
        );
        $("#fb_scroll").text(
            "Recovered bookmark at position " + bmScroll + "."
        );
    }
    if (bmZoom) {
        $(".images").css({ width: bmZoom + "%" });
        $("#fb_zoom").html(
            "● Recovered content size at <b>" + bmZoom + "%</b>."
        );
    }
    if (bmPage) {
        let bmImage = $("img").eq(bmPage - 1);
        bmImage.css("border", "2px solid red");
        bmImage
            .prev()
            .css(
                "text-shadow",
                "-1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red"
            );
        $("#fb_page").html(
            "● Jumped to bookmarked page <b>" + bmPage + "</b>."
        );
        // Prevent browser to automatically recovers last scroll position
        setTimeout(() => jumpToPage(bmPage), 0);
    }
    $(".pageCount").html(
        "Page <b>" + getCurPage() + "</b> of <b>" + $("img").length + "</b>"
    );
}

function showLoadingForSample() {
    let i = 0;
    let progress = 0;
    let totalImg = $(".images img").length;
    let intervalLoading = setInterval(function() {
        let j = ++i % 5;
        if (imgCountdown) {
            progress = parseInt(((totalImg - imgCountdown) / totalImg) * 100);
        }
        $("#fb_load").html(
            "Loading images" +
                Array(j + 1).join(".") +
                Array(6 - j).join("&nbsp") +
                "<b>" +
                progress +
                "%</b>"
        );
    }, 500);
    waitForImages(function() {
        $("#fb_load").html("");
        clearInterval(intervalLoading);
    });
}

function waitForImages(callback) {
    let $img = $(".images img");
    imgCountdown = $img.length;

    let waitImgLoad = function() {
        imgCountdown--;
        if (imgCountdown === 0) {
            callback();
        }
    };
    $img.on("load", waitImgLoad).on("error", waitImgLoad);
}

let done = true;

$(document).keydown(function(e) {
    let curPage = getCurPage();
    let prev = $("img").eq(curPage - 2);
    let next = $("img").eq(curPage);
    if (!done) return;
    switch (e.which) {
        case 37: // left
            e.preventDefault(); // prevent the default action (scroll / move caret)
            if (curPage > 1) {
                done = false;
                $("html").animate(
                    {
                        scrollTop: prev.prev().offset().top
                    },
                    {
                        duration: 500,
                        complete: function() {
                            done = true;
                        }
                    }
                );
            }
            break;
        case 38: // up
            break;
        case 39: // right
            e.preventDefault(); // prevent the default action (scroll / move caret)
            if (next.length != 0) {
                done = false;
                $("html").animate(
                    {
                        scrollTop: next.prev().offset().top
                    },
                    {
                        duration: 500,
                        complete: function() {
                            done = true;
                        }
                    }
                );
            }
            break;
        case 40: // down
            break;
        default:
            return; // exit this handler for other keys
    }
});
// (function(window){
//   let supportPageOffset = window.pageXOffset !== undefined;
//   let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
//   let sidebar = document.getElementById("fixed");
//   window.addEventListener("scroll", function(e) {
//     let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
//     sidebar.style.left = -x + 10 + "px";
//   });
// })(window);
