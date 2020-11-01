window.draggableList = {
    moveElement: function (event) {
        var listItem = event.currentTarget;

        listItem.style.position = 'relative';
        listItem.style.zIndex = 1000;

        var originalTop = listItem.offsetTop;
        var originalPointerY = event.pageY;

        // move it out of any current parents directly into body
        // to make it positioned relative to the body
        //document.body.append(listItem);

        // centers the listItem at (pageX, pageY) coordinates
        function moveAt(pageY) {
            listItem.style.top = ((pageY - originalPointerY)) + 'px';
        }

        // move our absolutely positioned listItem under the pointer
        moveAt(event.pageY);

        function onMouseMove(event) {
            moveAt(event.pageY);
        }

        // (2) move the listItem on mousemove
        document.addEventListener('mousemove', onMouseMove);

        // (3) drop the listItem, remove unneeded handlers
        listItem.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            listItem.onmouseup = null;
        };
    }
}