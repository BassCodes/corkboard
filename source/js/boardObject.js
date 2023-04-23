import { Mouse } from './pointing.js';
export class BoardObject {
    constructor(x, y, width, height, className, margins = { left: 0, right: 0, top: 0, bottom: 0 }) {
        this.el = document.createElement('div');
        this.el.className = className;
        this.width = width;
        this.height = height;
        this.margins = margins;
        this.updatePosition(x, y);
        this.grabbable = false;
        this.widgets = [];
    }
    updatePosition(x, y) {
        this.x = x;
        this.y = y;
        this.el.style.left = `${x}px`;
        this.el.style.top = `${y}px`;
    }

    nudgePosition(dx, dy) {
        this.x = this.x + dx;
        this.y = this.y + dy;
        this.el.style.left = `${this.x}px`;
        this.el.style.top = `${this.y}px`;
    }

    addWidget(widget) {
        widget.setParent(this);
        widget.resize();
        this.el.appendChild(widget.el);
        this.widgets.push(widget);
    }

    addWidgets(widgetList) {
        for (const widget of widgetList) {
            this.addWidget(widget);
        }
    }

    removeWidget(widget) {
        this.widgets = this.widgets.filter(function (currentWidget) {
            return currentWidget !== widget;
        });
        widget.el.remove();
    }


    registerGrabEvent() {
        this.grabbable = true;
        this.el.classList.add("grabable");
        this.el.addEventListener("mousedown", event => {
            if (!(event.target == this.el || event.target.clickThrough)) return;

            this.el.parentNode.append(this.el);
            Mouse.isDown = true;
            Mouse.dragging = this;
            const x = event.screenX - this.x;
            const y = event.screenY - this.y;
            Mouse.offset = [x, y];
        });
        this.el.addEventListener("touchstart", event => {
            if (!(event.target == this.el || event.target.clickThrough)) return;
            this.el.parentNode.append(this.el);

            Mouse.isDown = true;
            Mouse.dragging = this;
            console.log("touchstart", Mouse.dragging);
        });

    }
}