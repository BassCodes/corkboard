import { BoardObject } from "../boardObject.js";

export class Page extends BoardObject {
    constructor(x, y, width, height, rotation = 0, url) {
        const margins = { left: 86, right: 10, top: 83, bottom: 0 };
        super(x, y, width, height, "note", margins);
        this.el.style.width = `${width}px`;
        this.el.style.height = `${height}px`;
        this.el.style.backgroundImage = `url(${url})`;
        this.el.style.backgroundSize = `contain`;
        this.rotate(rotation);
    }

    rotate(rotation) {
        this.rotation = rotation;
        this.el.style.rotate = `${rotation}deg`;
    }

}