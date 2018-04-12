import React from 'react';
import emojis from './data/emoji.json';

//console.log(emojis);

//Create Class to display emojis
class EmojiDisplay extends React.Component {
  
    render(){
        return (
                <div>
                    <span>Display of emojis</span><br /> <br />
                    <i className="twa twa-dragon-face"></i>
                    <i className="twa twa-dragon-face"></i>
                    <i className="twa twa-dragon-face"></i>
                    <br />
                    <hr />
                </div>
            )
        }; 
}

//Create List of Names of emojis
class EmojiNames extends React.Component{
    render(){
        return (
                <div>
                    <span>List of Emojis</span><br />
                        <ul>
                            <li> twa twa-dragon-face </li>
                            <li> emoji2 </li>
                        </ul> 
                        <br />
                        <button onClick={this.getEmoji}></button> 
                        <hr/>
                </div>
            )
        }
}

//Create List of Names of emojis
class UserInput extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
                <form onSubmit={this.props.submitLength}>
                    <input id ="inputText" type="text" placeholder="Enter length"/> <br /><br />
                    <input type="submit" value="Generate"/>
                </form>
            )
      }
}


class App extends React.Component{

    constructor(){
        super()
        this.state = {length: 1}
        this.submitLength = this.submitLength.bind(this);
    }

    getEmoji(){ 
        const thisLength = this.state.length;
        
        console.log(emojis);
    }

    submitLength(e){
        let lengthInput = document.getElementById("inputText");
        this.setState({length: lengthInput.value}, ()=> console.log("new length:", this.state.length))

        e.preventDefault();
     }


    render(){
        
        return (
        <div>
            <EmojiDisplay />
            <EmojiNames />
            <UserInput submitLength={this.submitLength} />
   
        </div>
    );
  }
};

export default App;