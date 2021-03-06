import {AlgoVisHelper} from './AlgoVisHelper'

export class AlgoFrame {

    private g2d;
    private canvasWidth;
    private canvasHeight;
    private data;

    constructor(g2d, canvasWidth, canvasHeight) {
        this.g2d = g2d;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    getCanvasWidth() {
        return this.canvasWidth;
    }

    getCanvasHeight() {
        return this.canvasHeight;
    }

    repaint() {
        // 具体绘制
        this.g2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        let w = this.canvasWidth / this.data.N();

        for (let i = 0; i < this.data.N(); i++) {
            if (i < this.data.orderedIndex) {
                AlgoVisHelper.setColor(this.g2d, AlgoVisHelper.Red);
            } else {
                AlgoVisHelper.setColor(this.g2d, AlgoVisHelper.Grey);
            }
            if (i == this.data.currentIndex) {
                AlgoVisHelper.setColor(this.g2d, AlgoVisHelper.LightBlue);
            }
            AlgoVisHelper.fillRectangle(this.g2d, i * w, this.canvasHeight - this.data.get(i), w - 1, this.data.get(i));
        }
    }

    render(data) {
        this.data = data;
        this.repaint();
    }
}