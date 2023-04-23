import { pageWidget } from "../pageWidget.js";

export class Textbox extends pageWidget {
    constructor(text = "") {
        super("textarea", "textbox", { respectMargins: true, fillWidth: true, fillHeight: true, centerWidth: false, centerHeight: false, width: null, height: null }, true);
        this.el.spellcheck = false;
        this.el.value = text;

    }

}