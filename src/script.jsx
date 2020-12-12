const drumOne = [{
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
    },{
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' 
    },{
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' 
    },{
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' 
    },{
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' 
}];

const drumTwo = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' 
    },{
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' 
    },{
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' 
    },{
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' 
    },{
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' 
    },{
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' 
    },{
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' 
    },{
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' 
    },{
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' 
}];

//For extra small devices (Refresh browser to function)
//Can be improved? Values update onchange but does not automatically apply on style attribute.
let view = window.matchMedia("(max-width: 600px)");
const changeView = (e) => {
    //Keydown animation variables
    if (e.matches) {
        inactiveKey = {
            width: '15vw',
            height: '15.5vw',
            backgroundColor: '#651e3e'
        }
        activeKey = {
            width: '15vw',
            height: '15vw',
            backgroundColor: 'rgb(226, 10, 64)'
        }
    } else {
        inactiveKey = {
            width: '80px',
            height: '90px',
            backgroundColor: ' #651e3e' 
        }
        activeKey = {
            width: '80px',
            height: '88px',
            backgroundColor: 'rgb(226, 10, 64)'
        }
    }
}
changeView(view);
view.addEventListener("change",changeView,false);
class DrumPads extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            key: inactiveKey
        }
        this.handlePress = this.handlePress.bind(this);
        this.playSound = this.playSound.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handlePress)
    }          
    componentWillUnmount() {
        document.addEventListener('keydown', this.handlePress)
    }  
    //Drum pad on keydown   
    handlePress(e) {
        if (e.keyCode === this.props.pad.keyCode) { 
            this.playSound();
        }
    }
    activatePad() {
        if (this.state.key === activeKey) {
            this.setState({
                key: inactiveKey
            })
        } else {
            this.setState({
                key: activeKey
            })
        }
    }
    playSound() {
        //Power on/true: initiate, else don't
        if(this.props.power) {
            let sound = document.getElementById(this.props.pad.keyTrigger);
            sound.volume = this.props.volumeVal;
            sound.play();
            sound.currentTime = 0;
            this.activatePad();
            setTimeout(() => this.activatePad(), 100)
            this.props.updateDisplay(this.props.pad.id);
        }
    }
    render() {
        const style = !this.props.power ? {boxShadow: '-2px 2px 3px black'} : {boxShadow: '-2px 2px 3px rgb(226, 10, 64)'};
        return (
                <div    className="drum-pad" 
                        style={Object.assign({},this.state.key,style)}
                        id={this.props.pad.id}
                        onClick={this.playSound}>
                    <audio  id={this.props.pad.keyTrigger}
                            src={this.props.pad.url}
                            className="clip"
                            type="audio/mpeg"/>
                    {this.props.pad.keyTrigger}
                </div>
        )
    }
}
class Controls extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const flip = this.props.switch ? {float:'left'} : {float:'right'}; //For bank switch
        const style = this.props.power ? {float:'right'} : {float:'left'}; //For power switch
        const displayStyle = this.props.power ? {opacity: '1'} : {opacity: '.4'};
            return (
                <div className="controlContainer">
                    <div className="head">
                        Drum Machine
                    </div>
                    <div className="switchContainer">
                        POWER
                        <div className="switchBox">
                            <div className="switch" onClick={this.props.onAndOff} style={style}/>
                        </div>
                    </div>
                    <div className="display" id="display" style={displayStyle}>
                        {this.props.currentDisplay}
                    </div>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={this.props.volumeInput} 
                        onChange={this.props.adjustVol} 
                        step="1" 
                        class="slider" 
                        id="myRange"
                    />
                    <div className="switchContainer">
                        BANK
                        <div className="switchBox">
                            <div className="switch" onClick={this.props.changePad} style={flip}/>
                        </div>
                    </div>
                </div>
            )
    }
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            volumeInput: 50, 
            volumeVal: .5,
            currentDisplay: '',
            power: false, 
            switch: true //for bank
        }
        this.adjustVol = this.adjustVol.bind(this);
        this.updateDisplay = this.updateDisplay.bind(this);
        this.onAndOff = this.onAndOff.bind(this);
        this.changePad = this.changePad.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
    }
    updateDisplay(id) {
        this.setState({
            currentDisplay: id
        })
    }
    clearDisplay(){
        this.setState({
            currentDisplay: ''
        })
    }
    onAndOff() {
        this.setState({
            power: !this.state.power
        });
        setTimeout(() => this.clearDisplay(), 0);
    }
    changePad() {
        this.setState({
            switch: !this.state.switch
        });
        setTimeout(() => this.clearDisplay(), 0);
    }
    adjustVol(event) {
        const text = "Volume " + event.target.value;
        const vol = event.target.value / 100;
        this.setState({
            volumeVal: vol,
            volumeInput: event.target.value,
            currentDisplay: text
        });
        setTimeout(() => this.clearDisplay(), 1000);
    }
    render() {
        const pads = this.state.switch ? drumOne : drumTwo; //render pads depending on bank (on switch)
        const padOne = pads.map((pad,i) => {
            return <DrumPads
                        key = {i}
                        pad = {pad}
                        updateDisplay={this.updateDisplay}
                        volumeVal = {this.state.volumeVal}
                        power={this.state.power}
                    />
        });
        const style = this.state.power ? {border:'3px solid #ff1e00'} : {border:'3px solid black'};
        return (
            <div>
                <div className="flexBox">
                    <div className="drumContainer" style={style}>
                        <div className="keysContainer">
                            {padOne}
                        </div>
                        <Controls
                            volumeInput={this.state.volumeInput}
                            adjustVol={this.adjustVol}
                            currentDisplay={this.state.currentDisplay}
                            onAndOff={this.onAndOff}
                            changePad={this.changePad}
                            power={this.state.power}
                            switch={this.state.switch}
                        />
                    </div>
                    <p>If layout is broken, refresh the page.</p>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('drum-machine'))