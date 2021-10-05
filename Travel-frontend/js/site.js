var carouselBanner = document.querySelector('#carouselBanner')
var carousel = new bootstrap.Carousel(carouselBanner, {
    wrap: true
})

const mainSearch = document.querySeQulector(".mainSearch");
const optionSearches = mainSearch.querySelectorAll(".optionSearch");

$(document).on("click", ".optionSearch li", function () {
    $(this).addClass("active").siblings().removeClass("active");
    let option = $(this);
    let parents = option.parents()[1]
    // console.log(parents.classList[1])
    let selected = $("." + parents.classList[1] + " option:contains(" + option[0].innerText + ")");
    // console.log(selected)
    $(selected).attr('selected', 'true').siblings().removeAttr('selected');
    option.parents()[0].style.display = "none";
});

$(document).on("click", ".mainSearch select", function () {
    let parents = $(this).parents()[0]
    // console.log(parents)
    let optionSearch = parents.querySelector(".optionSearch");
    optionSearch.style.display = "block";
    // console.log(optionSearch.classList)
})

var $posDestination1 = $(".wrap-destination .listDestination .container .row:first-child");
var $posDestination2 = $(".wrap-destination .listDestination .container .row:nth-child(2)");
var $posDestination = $(".wrap-destination .listDestination .container").children();
console.log($(".wrap-destination .listDestination .container").children())
// console.log($('.wrap-destination .listDestination .container .row:nth-child(' + (1+1) +')'))
window.onscroll = function (ev) {
    for (let i = 0; i < $posDestination.length; i++) {
        if (window.scrollY > $('.wrap-destination .listDestination .container .row:nth-child(' + (i + 1) + ')').offset().top - 600) {
            if (i % 2 == 0)
                $('.wrap-destination .listDestination .container .row:nth-child(' + (i + 1) + ')').addClass("visiable animate__animated animate__fadeInRight")
            else
                $('.wrap-destination .listDestination .container .row:nth-child(' + (i + 1) + ')').addClass("visiable animate__animated animate__fadeInLeft")

        }
    }
}




// for (let i = 0; i < optionSearches.length; i++) {
//     let osItems = optionSearches[i].querySelectorAll("li");

//     for (let j = 0; j < osItems.length; j++) {

//         osItems[j].onclick = function (e) {
//             let sibling = siblings(osItems[j]);
//             for(let k = 0; k<sibling.length; k++){
//                 sibling[k].classList.remove("active");
//             }
//             osItems[j].classList.add("active");
//             console.log(e);
//         }
//     }
// }

// function siblings(e) {
//     // for collecting siblings
//     let siblings = [];
//     // if no parent, return no sibling
//     if (!e.parentNode) {
//         return siblings;
//     }
//     // first child of the parent node
//     let sibling = e.parentNode.firstChild;

//     // collecting siblings
//     while (sibling) {
//         if (sibling.nodeType === 1 && sibling !== e) {
//             siblings.push(sibling);
//         }
//         sibling = sibling.nextSibling;
//     }
//     return siblings;
//};