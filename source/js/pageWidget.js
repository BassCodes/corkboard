export class pageWidget {
    constructor(elementType, className, size = { respectMargins: false, fillWidth: true, fillHeight: true, centerWidth: false, centerHeight: false, width: null, height: null }, clickThrough = false) {
        this.size = size;
        this.el = document.createElement(elementType);
        this.el.clickThrough = clickThrough;
        this.el.className = className;
        parent = {};
    }

    setParent(parent) {
        this.parent = parent;
    }

    resize() {
        const parent = this.parent;
        const elStyle = this.el.style;
        const size = this.size;
        elStyle.position = "absolute";
        if (this.size.respectMargins) {
            this.size.fillWidth ? elStyle.width = `${parent.width - parent.margins.left - parent.margins.right}px` : {};
            this.size.fillHeight ? elStyle.height = `${parent.height - parent.margins.top - parent.margins.bottom}px` : {};
            elStyle.position = "absolute";
            elStyle.top = `${parent.margins.top}px`;
            elStyle.right = `${parent.margins.right}px`;
            elStyle.left = `${parent.margins.left}px`;
            elStyle.bottom = `${parent.margins.bottom}px`;
        } else {
            this.size.fillWidth ? elStyle.width = `${parent.width}px` : {};
            this.size.fillHeight ? elStyle.height = `${parent.height}px` : {};
        }

        size.centerWidth ? elStyle.left = `${(parent.width - size.width) / 2}px` : {};
        size.centerHeight ? elStyle.top = `${(parent.height - size.height) / 2}px` : {};
        size.width ? elStyle.width = `${size.width}px` : {};
        size.height ? elStyle.height = `${size.height}px` : {};
    }


}