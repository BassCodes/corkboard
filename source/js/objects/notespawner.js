import { BoardObject } from "../boardObject.js";
import { randomNumber } from "../utility.js";
import { Note } from "./note.js";
import { Tack } from "../widgets/tack.js";
import { Textbox } from "../widgets/textbox.js";
import { Mouse } from "../pointing.js";


const inspiration = ["Bababooey", "Hello there!", "Sticky!", "Noted.", "Look behind you...",
    "I'm in your notepad",
    "51.4354123 -68.691168",
    "help a beaver is gnawing at my leg!",
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
const noteBox = document.body;

export class NoteSpawner extends BoardObject {
    constructor(noteHue = 0, noteSize = 300, rotation = 5) {
        const margins = { left: 12, right: 25, top: 35, bottom: 50 };

        const y = window.innerHeight - 200;
        // console.log(window);
        super(0, y, noteSize, noteSize, "note", margins);
        this.el.style.filter = `hue-rotate(${noteHue}deg) `;
        this.el.style.background = `url("./assets/note.png")`;
        this.el.style.width = `${this.width}px`;
        this.el.style.height = `${this.height}px`;
        this.el.style.backgroundSize = `contain`;
        this.el.classList.add("clickable");
        this.rotate(rotation);
        this.el.addEventListener("mousedown", event => {
            const noteSize = 300;
            const x = event.screenX - noteSize / 2;
            const y = event.screenY - noteSize / 2;
            const note = new Note(x, y, randomNumber(-180, 180), noteSize, randomNumber(-15, 15), "./assets/note.png");
            note.registerGrabEvent();
            note.addWidgets([new Tack, new Textbox(inspiration[randomNumber(0, inspiration.length)])]);
            noteBox.append(note.el);
            Mouse.isDown = true;
            Mouse.dragging = note;
            Mouse.offset = [noteSize / 2, noteSize / 2];
        });
    }


    rotate(rotation) {
        this.rotation = rotation;
        this.el.style.rotate = `${rotation}deg`;
    }

}