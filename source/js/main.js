import { randomNumber } from './utility.js';
import { Note } from "./objects/note.js";
import { Page } from "./objects/page.js";
import { Tack } from './widgets/tack.js';
import { Textbox } from './widgets/textbox.js';
import { Paragraph } from './widgets/paragraph.js';
import { NoteSpawner } from './objects/notespawner.js';

globalThis.onload = function () {

    const noteBox = document.body;
    for (let i = 0; i < 5; i++) {
        const noteSize = 300;
        const x = randomNumber(0, document.documentElement.scrollWidth - noteSize);
        const y = randomNumber(0, document.documentElement.scrollHeight - noteSize);
        const note = new Note(x, y, randomNumber(-180, 180), noteSize, randomNumber(-15, 15), "./assets/note.png");
        note.registerGrabEvent();
        note.addWidgets([new Tack, new Textbox("Welcome")]);
        noteBox.append(note.el);
    }
    for (let i = 0; i < 1; i++) {
        const noteSize = 300;
        const x = randomNumber(0, document.documentElement.scrollWidth - 1004);
        const y = randomNumber(0, document.documentElement.scrollHeight - 720);
        const note = new Page(x, y, 720, 1004, undefined, "./assets/page.png");
        note.registerGrabEvent();
        note.addWidget(new Tack);
        note.addWidget(new Paragraph(
            `
            Hello and welcome to the Corkboard! 
            <br>
            Try dragging everything around and writing in the notes. <i> also click the tacks!</i>
            <br>
            <br>
            <br>
            Back to  <a href="https://alexanderbass.com/show">Alexanderbass.com</a>?
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            P.S. yes, I do know that sticky notes don't need tacks as they're sticky, but this wouldn't be half as fun without the falling notes.
            `
        ));
        noteBox.append(note.el);
    }
    const noteSpawner = new NoteSpawner();
    noteSpawner.addWidget(new Paragraph("Create New Note", 50, 50));
    noteBox.append(noteSpawner.el);


};