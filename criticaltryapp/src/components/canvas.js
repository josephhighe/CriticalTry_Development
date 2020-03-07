import React, { Component } from 'react';
import { v4 } from 'uuid';
import Pusher from 'pusher-js';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.endPaintEvent = this.endPaintEvent.bind(this);

        this.pusher = new Pusher('7895d894a85752be2471', {
            cluster: 'us2',
        });
    }

    // determines where to paint or not
    isPainting = false;

    // These are for the paint stroke colors
    /**
     * Todo:
     *  -Bind these to variables for color selection
     *  -Add additional strokes for multiple users
     */
    userStrokeStyle = '#EE92C2';
    guestStrokeStyle = '#F0C987';
    // This is an array which will be used to draw to the screen
    line = [];

    userId = v4();
    prevPos = { offsetX: 0, offsetY: 0 };

    onMouseDown({ nativeEvent }) {
        // store initial mouse position based on event data recieved from click
        const { offsetX, offsetY } = nativeEvent;
        this.isPainting = true;
        this.prevPos = {offsetX, offsetY};
    }

    onMouseMove({ nativeEvent }) {
        if (this.isPainting) {
            const { offsetX, offsetY } = nativeEvent;
            const offSetData = { offsetX, offsetY };

            // set the start and stop position of the paint event
            const positionData = {
                start: { ...this.prevPos },
                stop: { ...offSetData },
            };
            // Add position to the line array
            this.line = this.line.concat(positionData);
            this.paint(this.prevPos, offSetData, this.userStrokeStyle);
        }
    }

    endPaintEvent() {
        if (this.isPainting) {
            this.isPainting = false;
            /**
             * Todo: 
             *  -CREATE SERVER TO HANDLE REQUESTS LIVE
             */
            this.sendPaintData();
        }
    }

    paint(prevPos, currPos, strokeStyle) {
        const { offsetX, offsetY } = currPos;
        const { offsetX: x, offsetY: y } = prevPos;

        this.ctx.beginPath();
        this.ctx.strokeStyle = strokeStyle;

        // move to the prevPosition of the mouse
        this.ctx.moveTo(x, y);
        // Draw a line to the current position of the mouse
        this.ctx.lineTo(offsetX, offsetY);
        // Visualize the line using the strokeStyle
        this.ctx.stroke();
        this.prevPos = { offsetX, offsetY };
    }

    // This is used to send an async request to a server for live updating of paint
    async sendPaintData() {
        const body = {
            line: this.line,
            userId: this.userId,
        };

        console.log("send paint data called from: " + this.userId);
        // We use the native fetch API to make requests to the server
        /**
         * Todo:
         *  -Change fetch URL property to variable
         *  -Change method type to const
         *  -Change header to variable
         */
        const req = await fetch('http://localhost:4000/paint', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
            },
        });
        const res = await req.json();
        this.line = [];
        console.log(req);
        console.log(res);
    }

    componentDidMount() {
        // Here set up the properties of the canvas element
        /**
         * Todo:
         *  -Change these properties variables
         */
        this.canvas.width = 1000;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 5;
        console.log("Component Mounted!");
        /**
         * Todo:
         *  -Alter this code to utilize a switch statement to recognize how to
         * render information to the screen
         * ~~ALTERNATIVELY~~
         *  -Use multiple lines/objects for these lines to control the color
         */
        const channel = this.pusher.subscribe('painting');
        channel.bind('draw', (data) => {
            const {userId, line} = data;
            if (userId !== this.userId) {
                line.forEach((position) => {
                    this.paint(position.start, position.stop, this.guestStrokeStyle);
                });
            }
        });
    }

    render() {
        return (
            <canvas
                ref={(ref) => (this.canvas = ref)}
                style={{ background: 'lightgreen',opacity: .5 }}
                onMouseDown={this.onMouseDown}
                onMouseLeave={this.endPaintEvent}
                onMouseUp={this.endPaintEvent}
                onMouseMove={this.onMouseMove}
            />
        );
    }
}
export default Canvas;