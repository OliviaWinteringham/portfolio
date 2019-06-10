import React from "react";
import NavBar from "../NavBar";
import css from "./skills.module.css"



class Skills extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  changeText = (event) => {
    event.preventDefault();
    console.log('it was clicked')
    return 'hello'
    
  
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  render() {
    const text  = this.state;
    return (
      <>
        <nav>
        <NavBar />
        </nav>
        <main>
          <h1 className={css.skillsText}>Skills</h1>
          <h2 className={css.editableText} contenteditable="true">What skills are you looking for? Click here and start typing</h2>
          <p className={css.skillsBody}>I really like typography, so I made my own font which you can see above and throughout this website. It's called 'Olivia'</p>
          {/* <input 
            className={css.fontInput}
            placeholder= 'type your name'
            name = 'text'
            onChange = {this.onChange}
            value={text}
            onSubmit={this.handleSubmit}
          />
          <button 
            className={css.textButton}
            onClick={this.changeText} 
            aria-label = 'click this button to submit your text'>click me</button> */}
        </main>
        <image src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500 2x"/>
      </> 
    );
  }
}

export default Skills;

