import React from "react";
import NavBar from "../NavBar";
import css from "./skills.module.css";



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
    // const text  = this.state;
    return (
      <>
        <nav>
        <NavBar />
        </nav>
        <main>
          {/* <h1 className={css.skillsText}>Skills</h1> */}
          <h1 className={css.editableText} contenteditable="true">Click here, delete and start typing</h1>
          <p className={css.skillsBody}>I really like typography, so I made my own font which you can see above and throughout this website. It's called...</p>
          <h1 className={css.olivia}>'Olivia'</h1>
           
           {/* <input 
            className={css.fontInput}
            placeholder="What skills are you looking for? Click here and start typing"
            name = 'text'
            onChange = {this.onChange}
            value={this.state.text}
            onSubmit={this.handleSubmit}
          />
          <button 
            className={css.textButton}
            onClick={this.changeText} 
            aria-label = 'click this button to submit your text'>click me</button> */}
        </main>
        </>
    );
  }
}

export default Skills;

