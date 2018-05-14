
window.onload = function() {
    var project = document.getElementsByClassName("wrapper");
    TweenLite.from(project, 2, {top:"500px"});
    TweenLite.from("#head", 1.5, {left:"500px"});
    TweenLite.from("#content", 1.5, {right:"500px"});
    TweenLite.from("#pro", 1, {right:"500px", rotation:"360"});
    TweenLite.from("#about", 1, {left:"500px", rotation:"360"});    
}

