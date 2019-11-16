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
        <NavBar/>
        </nav>
        <main className={css.page}> 
          {/* <h1 className={css.skillsText}>Skills</h1> */}
          <h1 className={css.editableText} contenteditable="true">Click here, delete and start typing</h1>
          <p className={css.skillsBody}>I really like typography, so I made my own font which you can see above and throughout this website. It's called...</p>
          <h1 className={css.olivia}>'Olivia'</h1>
          <div id={css.hoverHere}>hover here! you can only see this little sweetie on a desktop</div>
          {/* <div>
                            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Xm_6fko2eK9tszCD93-L7zjjlpSqqbwT" width="640" height="480"></iframe>
                    </div> */}
           
          
        </main>
        </>
    );
  }
}

export default Skills;

