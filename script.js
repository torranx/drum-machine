var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var drumOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}];

var drumTwo = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

//For extra small devices (Refresh browser to function)
//Can be improved? Values update onchange but does not automatically apply on style attribute.
var view = window.matchMedia("(max-width: 600px)");
var changeView = function changeView(e) {
    //Keydown animation variables
    if (e.matches) {
        inactiveKey = {
            width: '15vw',
            height: '15.5vw',
            backgroundColor: '#651e3e'
        };
        activeKey = {
            width: '15vw',
            height: '15vw',
            backgroundColor: 'rgb(226, 10, 64)'
        };
    } else {
        inactiveKey = {
            width: '80px',
            height: '90px',
            backgroundColor: ' #651e3e'
        };
        activeKey = {
            width: '80px',
            height: '88px',
            backgroundColor: 'rgb(226, 10, 64)'
        };
    }
};
changeView(view);
view.addEventListener("change", changeView, false);

var DrumPads = function (_React$Component) {
    _inherits(DrumPads, _React$Component);

    function DrumPads(props) {
        _classCallCheck(this, DrumPads);

        var _this = _possibleConstructorReturn(this, (DrumPads.__proto__ || Object.getPrototypeOf(DrumPads)).call(this, props));

        _this.state = {
            key: inactiveKey
        };
        _this.handlePress = _this.handlePress.bind(_this);
        _this.playSound = _this.playSound.bind(_this);
        return _this;
    }

    _createClass(DrumPads, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('keydown', this.handlePress);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.addEventListener('keydown', this.handlePress);
        }
        //Drum pad on keydown   

    }, {
        key: 'handlePress',
        value: function handlePress(e) {
            if (e.keyCode === this.props.pad.keyCode) {
                this.playSound();
            }
        }
    }, {
        key: 'activatePad',
        value: function activatePad() {
            if (this.state.key === activeKey) {
                this.setState({
                    key: inactiveKey
                });
            } else {
                this.setState({
                    key: activeKey
                });
            }
        }
    }, {
        key: 'playSound',
        value: function playSound() {
            var _this2 = this;

            //Power on/true: initiate, else don't
            if (this.props.power) {
                var sound = document.getElementById(this.props.pad.keyTrigger);
                sound.volume = this.props.volumeVal;
                sound.play();
                sound.currentTime = 0;
                this.activatePad();
                setTimeout(function () {
                    return _this2.activatePad();
                }, 100);
                this.props.updateDisplay(this.props.pad.id);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var style = !this.props.power ? { boxShadow: '-2px 2px 3px black' } : { boxShadow: '-2px 2px 3px rgb(226, 10, 64)' };
            return React.createElement(
                'div',
                { className: 'drum-pad',
                    style: Object.assign({}, this.state.key, style),
                    id: this.props.pad.id,
                    onClick: this.playSound },
                React.createElement('audio', { id: this.props.pad.keyTrigger,
                    src: this.props.pad.url,
                    className: 'clip',
                    type: 'audio/mpeg' }),
                this.props.pad.keyTrigger
            );
        }
    }]);

    return DrumPads;
}(React.Component);

var Controls = function (_React$Component2) {
    _inherits(Controls, _React$Component2);

    function Controls(props) {
        _classCallCheck(this, Controls);

        return _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).call(this, props));
    }

    _createClass(Controls, [{
        key: 'render',
        value: function render() {
            var flip = this.props.switch ? { float: 'left' } : { float: 'right' }; //For bank switch
            var style = this.props.power ? { float: 'right' } : { float: 'left' }; //For power switch
            var displayStyle = this.props.power ? { opacity: '1' } : { opacity: '.4' };
            return React.createElement(
                'div',
                { className: 'controlContainer' },
                React.createElement(
                    'div',
                    { className: 'head' },
                    'Drum Machine'
                ),
                React.createElement(
                    'div',
                    { className: 'switchContainer' },
                    'POWER',
                    React.createElement(
                        'div',
                        { className: 'switchBox' },
                        React.createElement('div', { className: 'switch', onClick: this.props.onAndOff, style: style })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'display', id: 'display', style: displayStyle },
                    this.props.currentDisplay
                ),
                React.createElement('input', {
                    type: 'range',
                    min: '0',
                    max: '100',
                    value: this.props.volumeInput,
                    onChange: this.props.adjustVol,
                    step: '1',
                    'class': 'slider',
                    id: 'myRange'
                }),
                React.createElement(
                    'div',
                    { className: 'switchContainer' },
                    'BANK',
                    React.createElement(
                        'div',
                        { className: 'switchBox' },
                        React.createElement('div', { className: 'switch', onClick: this.props.changePad, style: flip })
                    )
                )
            );
        }
    }]);

    return Controls;
}(React.Component);

var App = function (_React$Component3) {
    _inherits(App, _React$Component3);

    function App(props) {
        _classCallCheck(this, App);

        var _this4 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this4.state = {
            volumeInput: 50,
            volumeVal: .5,
            currentDisplay: '',
            power: false,
            switch: true //for bank
        };
        _this4.adjustVol = _this4.adjustVol.bind(_this4);
        _this4.updateDisplay = _this4.updateDisplay.bind(_this4);
        _this4.onAndOff = _this4.onAndOff.bind(_this4);
        _this4.changePad = _this4.changePad.bind(_this4);
        _this4.clearDisplay = _this4.clearDisplay.bind(_this4);
        return _this4;
    }

    _createClass(App, [{
        key: 'updateDisplay',
        value: function updateDisplay(id) {
            this.setState({
                currentDisplay: id
            });
        }
    }, {
        key: 'clearDisplay',
        value: function clearDisplay() {
            this.setState({
                currentDisplay: ''
            });
        }
    }, {
        key: 'onAndOff',
        value: function onAndOff() {
            var _this5 = this;

            this.setState({
                power: !this.state.power
            });
            setTimeout(function () {
                return _this5.clearDisplay();
            }, 0);
        }
    }, {
        key: 'changePad',
        value: function changePad() {
            var _this6 = this;

            this.setState({
                switch: !this.state.switch
            });
            setTimeout(function () {
                return _this6.clearDisplay();
            }, 0);
        }
    }, {
        key: 'adjustVol',
        value: function adjustVol(event) {
            var _this7 = this;

            var text = "Volume " + event.target.value;
            var vol = event.target.value / 100;
            this.setState({
                volumeVal: vol,
                volumeInput: event.target.value,
                currentDisplay: text
            });
            setTimeout(function () {
                return _this7.clearDisplay();
            }, 1000);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this8 = this;

            var pads = this.state.switch ? drumOne : drumTwo; //render pads depending on bank (on switch)
            var padOne = pads.map(function (pad, i) {
                return React.createElement(DrumPads, {
                    key: i,
                    pad: pad,
                    updateDisplay: _this8.updateDisplay,
                    volumeVal: _this8.state.volumeVal,
                    power: _this8.state.power
                });
            });
            var style = this.state.power ? { border: '3px solid #ff1e00' } : { border: '3px solid black' };
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'flexBox' },
                    React.createElement(
                        'div',
                        { className: 'drumContainer', style: style },
                        React.createElement(
                            'div',
                            { className: 'keysContainer' },
                            padOne
                        ),
                        React.createElement(Controls, {
                            volumeInput: this.state.volumeInput,
                            adjustVol: this.adjustVol,
                            currentDisplay: this.state.currentDisplay,
                            onAndOff: this.onAndOff,
                            changePad: this.changePad,
                            power: this.state.power,
                            'switch': this.state.switch
                        })
                    ),
                    React.createElement(
                        'p',
                        null,
                        'If layout is broken, refresh the page.'
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('drum-machine'));