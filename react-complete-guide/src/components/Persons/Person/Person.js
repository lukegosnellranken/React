// import React, {Component} from 'react';
// //import Radium from 'radium';
// //import styled from 'styled-components';

// import classes from './Person.css';

// const person = (props) => {
//     // const rnd = Math.random();

//     // if (rnd > 0.7) {
//     //     throw new Error('Something went wrong');
//     // }

//     console.log('[Person.js] rendering...');
//     return (
//         //<div className="Person" style={style}>
//         <div className={classes.Person}>
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
        
//     )
// };

// export default person;



// Lecture 91

// import React, {Component} from 'react';
// import Aux from '../../../hoc/Auxillary';
// import classes from './Person.css';

// class Person extends Component {
//     render() {
//         console.log('[Person.js] rendering...');

//         return (
//             <div className={classes.Person}>
//                 <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
//                 <p>{this.props.children}</p>
//                 <input type="text" onChange={this.props.changed} value={this.props.name} />
//             </div>
            
//         )
//     }
// };

// export default Person;





// Lecture 103

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');

        return (
            //<React.Fragment>
            <Aux>
                
                {this.context.authenticated ? (
                <p>Authenticated!</p> 
                ) : (
                <p>Please log in</p>
                )}
                
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />  
            </Aux>
        );
    }
}

Person.propTypes= {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    chnaged: PropTypes.func
};

export default withClass(Person, classes.Person);