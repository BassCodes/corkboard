import { BoardObject } from "../boardObject.js";
export class Note extends BoardObject {
    constructor(x, y, noteHue = 0, noteSize = 300, rotation = 0, url) {
        const margins = { left: 12, right: 25, top: 35, bottom: 50 };
        super(x, y, noteSize, noteSize, "note", margins);
        this.el.style.filter = `hue-rotate(${noteHue}deg) `;
        this.el.style.background = `url(${url})`;
        this.el.style.width = `${this.width}px`;
        this.el.style.height = `${this.height}px`;
        this.el.style.backgroundSize = `contain`;
        this.rotate(rotation);
    }

    rotate(rotation) {
        this.rotation = rotation;
        this.el.style.rotate = `${rotation}deg`;
    }

}