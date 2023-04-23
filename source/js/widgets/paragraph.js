import { pageWidget } from "../pageWidget.js";

export class Paragraph extends pageWidget {
    constructor(text, fontSize = 25, lineSpacing = 27) {
        super("p", "paragraph", { respectMargins: true, fillWidth: true, fillHeight: false, centerWidth: false, centerHeight: false, width: null, height: 8 }, true);
        // this.el.spellcheck = false;
        this.el.style.color = "black";
        this.el.style.paddingTop = "5px";
        this.el.style.overflowWrap = "anywhere";
        this.el.style.lineHeight = `${lineSpacing}px`;
        this.el.style.fontSize = `${fontSize}px`;
        this.el.style.userSelect = "none";
        this.el.innerHTML = text;

    }

}