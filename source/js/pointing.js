export let Mouse = { isDown: false, dragging: null, offset: [0, 0] };

globalThis.addEventListener("load", () => {
    document.addEventListener('mouseup', () => {
        Mouse.isDown = false;
        Mouse.dragging = null;
    });
    document.addEventListener("touchend", event => {
        Mouse.isDown = false;
        Mouse.dragging = null;
        console.log("touchend");
    });

    document.addEventListener('mousemove', (event) => {
        event.preventDefault();
        if (Mouse.isDown && Mouse.dragging.el) {
            const x = event.screenX - Mouse.offset[0];
            const y = event.screenY - Mouse.offset[1];
            Mouse.dragging.updatePosition(x, y);
        }

    });
    document.addEventListener('touchmove', (event) => {
        console.log("touchmove");
        if (Mouse.isDown && Mouse.dragging.el) {
            const x = event.touches[0].screenX - Mouse.offset[0];
            const y = event.touches[0].screenY - Mouse.offset[1];
            Mouse.dragging.updatePosition(x, y);
        }

    });
});
