import { pageWidget } from "../pageWidget.js";
export class Tack extends pageWidget {
    constructor(tackHue) {
        super("div", "tack", { respectMargins: false, fillWidth: false, fillHeight: false, centerWidth: true, centerHeight: false, width: 45, height: 45 }, false);

        this.el.style.filter = `hue-rotate(${tackHue}deg)`;
        this.el.classList.add("clickable");
        this.el.addEventListener("mousedown", () => {
            this.click();
        }, false);
    }

    click() {
        this.parent.el.parentNode.append(this.el);
        this.parent.removeWidget(this);
        let velocity = 0;
        let finished = false;
        let frame = () => {
            this.parent.nudgePosition(0, velocity);
            velocity = velocity + 1.5;
            if (this.parent.y > screen.height) {
                this.parent.el.remove();
                finished = true;
                return;
            }
            requestAnimationFrame(frame);
        };
        if (!finished) (
            requestAnimationFrame(frame)
        );

    }


}