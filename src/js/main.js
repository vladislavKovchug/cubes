function hide() {
    var s = document.documentElement.style;
    s.cssText = s.cssText ? '' : 'overflow:hidden;width:100%;height:100%';
}
hide();

function Cube(x, y, z) {
    with (paper) {
        var size = 40;
        var height = 40;

        var top = new Path();
        top.strokeColor = 'black';
        var axonometricX = x;
        var axonometricY = y;

        top.add(new paper.Point(axonometricX, axonometricY + size * 0.75));
        top.add(new paper.Point(axonometricX + size, axonometricY));
        top.add(new paper.Point(axonometricX, axonometricY - size * 0.75));
        top.add(new paper.Point(axonometricX - size, axonometricY));
        top.closed = true;

        var leftSide = new Path();
        leftSide.strokeColor = 'black';
        leftSide.add(new paper.Point(axonometricX - size, axonometricY));
        leftSide.add(new paper.Point(axonometricX, axonometricY + size * 0.75));
        leftSide.add(new paper.Point(axonometricX, axonometricY + size * 0.75 + height));
        leftSide.add(new paper.Point(axonometricX - size, axonometricY + height));
        leftSide.closed = true;

        var rightSide = new Path();
        rightSide.strokeColor = 'black';
        rightSide.add(new paper.Point(axonometricX, axonometricY + size * 0.75));
        rightSide.add(new paper.Point(axonometricX + size, axonometricY));
        rightSide.add(new paper.Point(axonometricX + size, axonometricY + height));
        rightSide.add(new paper.Point(axonometricX, axonometricY + size * 0.75 + height));
        rightSide.closed = true;
    }
}

$(function () {
    console.log('loaded');
    var canvas = $("#scene");
    console.log(window.innerWidth + 'x' + window.innerHeight);
    canvas.height(window.innerHeight);
    canvas.width(window.innerWidth);
    paper.setup(canvas.get(0));

    var sprites = [];

    canvas.bind("mousedown", function (event) {
        var x = event.clientX;
        var y = event.clientY;

        new Cube(x, y);

    });


    paper.view.onFrame = function (event) {

        // On each frame, rotate the path by 3 degrees:
    }


});