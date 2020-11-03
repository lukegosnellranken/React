// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';

// class App extends Component {
//   state  = {
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Steph', age: 26}
//     ],
//     otherState: 'Some value'
//   }

//   switchNameHandler = () => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: 'Nick', age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, Im a React App</h1>
//         <p>this is working</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age = {this.state.persons[0].age}/>
//         <Person name={this.state.persons[1].name} age = {this.state.persons[1].age}/>
//         <Person name={this.state.persons[2].name} age = {this.state.persons[2].age}/>
//       </div>
//     );
//     //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
//   }
// }

// export default App;


// Lecture 44 HOOKS

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {
//   const [ personsState, setPersonsState] = useState({
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Steph', age: 26}
//     ]
//   });

//   const [otherState, setOtherState] = useState('some value');

//   console.log(personsState, otherState);
    
//   const switchNameHandler = () => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     setPersonsState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: 'Nick', age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   return (
//     <div className="App">
//       <h1>Hi, Im a React App</h1>
//       <p>this is working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age = {personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age = {personsState.persons[1].age}/>
//       <Person name={personsState.persons[2].name} age = {personsState.persons[2].age}/>
//     </div>
//   );
//   //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
// }

// export default app;


// Lecture 46

// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';

// class App extends Component {
//   state  = {
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Steph', age: 26}
//     ],
//     otherState: 'Some value'
//   }

//   switchNameHandler = (newName) => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: newName, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   nameChangedHandler = (event) => {
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: event.target.value, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   render() {
//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };

//     return (
//       <div className="App">
//         <h1>Hi, Im a React App</h1>
//         <p>this is working</p>
//         <button
//           style={style}
//           onClick={() => this.switchNameHandler('Blucas')}>Switch Name
//         </button>
//         <Person 
//           name={this.state.persons[0].name} 
//           age = {this.state.persons[0].age}/>
//         <Person 
//           name={this.state.persons[1].name} 
//           age = {this.state.persons[1].age}
//           click={this.switchNameHandler.bind(this, 'Lucas')}
//           changed={this.nameChangedHandler}> My Hobbies: Biking</Person>
//         <Person 
//           name={this.state.persons[2].name} 
//           age = {this.state.persons[2].age}/>
//       </div>
//     );
//     //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
//   }
// }

// export default App;



// Lecture 53

// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
// import person from './Person/Person';

// class App extends Component {
//   state  = {
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Steph', age: 26}
//     ],
//     otherState: 'Some value',
//     showPersons: false
//   }

//   switchNameHandler = (newName) => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: newName, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   nameChangedHandler = (event) => {
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: event.target.value, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   };

//   togglePersonHandler = (event) => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow});
//   }

//   render() {
//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };

//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           <Person 
//             name={this.state.persons[0].name} 
//             age = {this.state.persons[0].age}/>
//           <Person 
//             name={this.state.persons[1].name} 
//             age = {this.state.persons[1].age}
//             click={this.switchNameHandler.bind(this, 'Lucas')}
//             changed={this.nameChangedHandler}> My Hobbies: Biking</Person>
//           <Person 
//             name={this.state.persons[2].name} 
//             age = {this.state.persons[2].age}/>
//         </div>
//       );
//     }

//     return (
//       <div className="App">
//         <h1>Hi, Im a React App</h1>
//         <p>this is working</p>
//         <button
//           style={style}
//           onClick={() => this.togglePersonHandler()}>
//             Toggle Persons
//         </button>
//         {persons}
//       </div>
//     );
//     //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
//   }
// }

// export default App;



// Lecture 56

// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
// import person from './Person/Person';

// class App extends Component {
//   state  = {
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Steph', age: 26}
//     ],
//     otherState: 'Some value',
//     showPersons: false
//   }

//   switchNameHandler = (newName) => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: newName, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   nameChangedHandler = (event) => {
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: event.target.value, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   };

//   togglePersonHandler = (event) => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow});
//   }

//   render() {
//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };

//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map(person => {
//             return <Person 
//               name={person.name}
//               age={person.age} />
//           })};
//         </div>
//       );
//     }

//     return (
//       <div className="App">
//         <h1>Hi, Im a React App</h1>
//         <p>this is working</p>
//         <button
//           style={style}
//           onClick={() => this.togglePersonHandler()}>
//             Toggle Persons
//         </button>
//         {persons}
//       </div>
//     );
//     //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
//   }
// }

// export default App;




// Lecture 57

// import React, { Component } from 'react';
// import './App.css';
// //import Radium, { StyleRoot} from 'radium';
// import styled from 'styled-components';
// import Person from './Person/Person';

// const StyledButton = styled.button`
//   background-color: ${props => props.myAlt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
  
//   &:hover {
//     background-color: ${props => props.myAlt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

// class App extends Component {
//   state  = {
//     persons: [
//       {id: 'dfgg', name: 'Max', age: 28},
//       {id: 'fgfdg', name: 'Manu', age: 29},
//       {id: 'fgfdgd', name: 'Steph', age: 26}
//     ],
//     otherState: 'Some value',
//     showPersons: false
//   }

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });

//     const person = {
//       ...this.state.persons[personIndex]
//     };

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;


//     this.setState({persons: persons});
//   };

//   switchNameHandler = (newName) => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: newName, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   deletePersonHandler = (personIndex) => {
//     //const persons = this.state.persons.slice();
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({persons: persons});
//   }

//   togglePersonHandler = (event, id) => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow});
//   }

//   render() {
//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return <Person 
//               click={() => this.deletePersonHandler(index)}
//               name={person.name}
//               age={person.age}
//               key={person.id}
//               changed={(event) => this.nameChangedHandler(event, person.id)} />
//           })};
//         </div>
//       );

//       // style.backgroundColor = 'red';
//       // style[':hover'] = {
//       //   backgroundColor: 'salmon',
//       //   color: 'black'
//       // }
//     }

//     let classes=[];
//     if (this.state.persons.length <= 2) {
//       classes.push('red');
//     }
//     if (this.state.persons.length <= 1) {
//       classes.push('bold');
//     }

//     return (
//       <div className="App">
//         <h1>Hi, Im a React App</h1>
//         <p className={classes.join(' ')}>this is working</p>
//         <StyledButton
//           myAlt={this.state.showPersons}
//           onClick={() => this.togglePersonHandler()}>
//             Toggle Persons
//         </StyledButton>
//         {persons}
//       </div>
//     );
//     //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
//   }
// }

// export default App;




// Lecture 73

// import React, { Component } from 'react';
// import './App.css';
// //import Radium, { StyleRoot} from 'radium';
// //import styled from 'styled-components';
// import Person from './Person/Person';

// class App extends Component {
//   state  = {
//     persons: [
//       {id: 'dfgg', name: 'Max', age: 28},
//       {id: 'fgfdg', name: 'Manu', age: 29},
//       {id: 'fgfdgd', name: 'Steph', age: 26}
//     ],
//     otherState: 'Some value',
//     showPersons: false
//   }

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });

//     const person = {
//       ...this.state.persons[personIndex]
//     };

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;


//     this.setState({persons: persons});
//   };

//   switchNameHandler = (newName) => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: newName, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   deletePersonHandler = (personIndex) => {
//     //const persons = this.state.persons.slice();
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({persons: persons});
//   }

//   togglePersonHandler = (event, id) => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow});
//   }

//   render() {
//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return <Person 
//               click={() => this.deletePersonHandler(index)}
//               name={person.name}
//               age={person.age}
//               key={person.id}
//               changed={(event) => this.nameChangedHandler(event, person.id)} />
//           })};
//         </div>
//       );

//       // style.backgroundColor = 'red';
//       // style[':hover'] = {
//       //   backgroundColor: 'salmon',
//       //   color: 'black'
//       // }
//     }

//     let classes=[];
//     if (this.state.persons.length <= 2) {
//       classes.push('red');
//     }
//     if (this.state.persons.length <= 1) {
//       classes.push('bold');
//     }

//     return (
//       <div className="App">
//         <h1>Hi, Im a React App</h1>
//         <p className={classes.join(' ')}>this is working</p>
//         <button
//           className="button"
//           onClick={() => this.togglePersonHandler()}>
//             Toggle Persons
//         </button>
//         {persons}
//       </div>
//     );
//     //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
//   }
// }

// export default App;




// Lecture 73 CSS Modules

// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';

// class App extends Component {
//   state  = {
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Steph', age: 26}
//     ],
//     otherState: 'Some value'
//   }

//   switchNameHandler = () => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: 'Nick', age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, Im a React App</h1>
//         <p>this is working</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age = {this.state.persons[0].age}/>
//         <Person name={this.state.persons[1].name} age = {this.state.persons[1].age}/>
//         <Person name={this.state.persons[2].name} age = {this.state.persons[2].age}/>
//       </div>
//     );
//     //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
//   }
// }

// export default App;


// Lecture 44 HOOKS

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {
//   const [ personsState, setPersonsState] = useState({
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Steph', age: 26}
//     ]
//   });

//   const [otherState, setOtherState] = useState('some value');

//   console.log(personsState, otherState);
    
//   const switchNameHandler = () => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     setPersonsState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: 'Nick', age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   return (
//     <div className="App">
//       <h1>Hi, Im a React App</h1>
//       <p>this is working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age = {personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age = {personsState.persons[1].age}/>
//       <Person name={personsState.persons[2].name} age = {personsState.persons[2].age}/>
//     </div>
//   );
//   //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
// }

// export default app;


// Lecture 46

// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';

// class App extends Component {
//   state  = {
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Steph', age: 26}
//     ],
//     otherState: 'Some value'
//   }

//   switchNameHandler = (newName) => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: newName, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   nameChangedHandler = (event) => {
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: event.target.value, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   render() {
//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };

//     return (
//       <div className="App">
//         <h1>Hi, Im a React App</h1>
//         <p>this is working</p>
//         <button
//           style={style}
//           onClick={() => this.switchNameHandler('Blucas')}>Switch Name
//         </button>
//         <Person 
//           name={this.state.persons[0].name} 
//           age = {this.state.persons[0].age}/>
//         <Person 
//           name={this.state.persons[1].name} 
//           age = {this.state.persons[1].age}
//           click={this.switchNameHandler.bind(this, 'Lucas')}
//           changed={this.nameChangedHandler}> My Hobbies: Biking</Person>
//         <Person 
//           name={this.state.persons[2].name} 
//           age = {this.state.persons[2].age}/>
//       </div>
//     );
//     //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
//   }
// }

// export default App;



// Lecture 53

// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
// import person from './Person/Person';

// class App extends Component {
//   state  = {
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Steph', age: 26}
//     ],
//     otherState: 'Some value',
//     showPersons: false
//   }

//   switchNameHandler = (newName) => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: newName, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   nameChangedHandler = (event) => {
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: event.target.value, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   };

//   togglePersonHandler = (event) => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow});
//   }

//   render() {
//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };

//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           <Person 
//             name={this.state.persons[0].name} 
//             age = {this.state.persons[0].age}/>
//           <Person 
//             name={this.state.persons[1].name} 
//             age = {this.state.persons[1].age}
//             click={this.switchNameHandler.bind(this, 'Lucas')}
//             changed={this.nameChangedHandler}> My Hobbies: Biking</Person>
//           <Person 
//             name={this.state.persons[2].name} 
//             age = {this.state.persons[2].age}/>
//         </div>
//       );
//     }

//     return (
//       <div className="App">
//         <h1>Hi, Im a React App</h1>
//         <p>this is working</p>
//         <button
//           style={style}
//           onClick={() => this.togglePersonHandler()}>
//             Toggle Persons
//         </button>
//         {persons}
//       </div>
//     );
//     //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
//   }
// }

// export default App;



// Lecture 56

// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
// import person from './Person/Person';

// class App extends Component {
//   state  = {
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Steph', age: 26}
//     ],
//     otherState: 'Some value',
//     showPersons: false
//   }

//   switchNameHandler = (newName) => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: newName, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   nameChangedHandler = (event) => {
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: event.target.value, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   };

//   togglePersonHandler = (event) => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow});
//   }

//   render() {
//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };

//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map(person => {
//             return <Person 
//               name={person.name}
//               age={person.age} />
//           })};
//         </div>
//       );
//     }

//     return (
//       <div className="App">
//         <h1>Hi, Im a React App</h1>
//         <p>this is working</p>
//         <button
//           style={style}
//           onClick={() => this.togglePersonHandler()}>
//             Toggle Persons
//         </button>
//         {persons}
//       </div>
//     );
//     //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
//   }
// }

// export default App;




// Lecture 57

// import React, { Component } from 'react';
// import './App.css';
// //import Radium, { StyleRoot} from 'radium';
// import styled from 'styled-components';
// import Person from './Person/Person';

// const StyledButton = styled.button`
//   background-color: ${props => props.myAlt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
  
//   &:hover {
//     background-color: ${props => props.myAlt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

// class App extends Component {
//   state  = {
//     persons: [
//       {id: 'dfgg', name: 'Max', age: 28},
//       {id: 'fgfdg', name: 'Manu', age: 29},
//       {id: 'fgfdgd', name: 'Steph', age: 26}
//     ],
//     otherState: 'Some value',
//     showPersons: false
//   }

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });

//     const person = {
//       ...this.state.persons[personIndex]
//     };

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;


//     this.setState({persons: persons});
//   };

//   switchNameHandler = (newName) => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: newName, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   deletePersonHandler = (personIndex) => {
//     //const persons = this.state.persons.slice();
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({persons: persons});
//   }

//   togglePersonHandler = (event, id) => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow});
//   }

//   render() {
//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return <Person 
//               click={() => this.deletePersonHandler(index)}
//               name={person.name}
//               age={person.age}
//               key={person.id}
//               changed={(event) => this.nameChangedHandler(event, person.id)} />
//           })};
//         </div>
//       );

//       // style.backgroundColor = 'red';
//       // style[':hover'] = {
//       //   backgroundColor: 'salmon',
//       //   color: 'black'
//       // }
//     }

//     let classes=[];
//     if (this.state.persons.length <= 2) {
//       classes.push('red');
//     }
//     if (this.state.persons.length <= 1) {
//       classes.push('bold');
//     }

//     return (
//       <div className="App">
//         <h1>Hi, Im a React App</h1>
//         <p className={classes.join(' ')}>this is working</p>
//         <StyledButton
//           myAlt={this.state.showPersons}
//           onClick={() => this.togglePersonHandler()}>
//             Toggle Persons
//         </StyledButton>
//         {persons}
//       </div>
//     );
//     //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
//   }
// }

// export default App;




// Lecture 73

// import React, { Component } from 'react';
// import './App.css';
// //import Radium, { StyleRoot} from 'radium';
// //import styled from 'styled-components';
// import Person from './Person/Person';

// class App extends Component {
//   state  = {
//     persons: [
//       {id: 'dfgg', name: 'Max', age: 28},
//       {id: 'fgfdg', name: 'Manu', age: 29},
//       {id: 'fgfdgd', name: 'Steph', age: 26}
//     ],
//     otherState: 'Some value',
//     showPersons: false
//   }

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });

//     const person = {
//       ...this.state.persons[personIndex]
//     };

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;


//     this.setState({persons: persons});
//   };

//   switchNameHandler = (newName) => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: newName, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   deletePersonHandler = (personIndex) => {
//     //const persons = this.state.persons.slice();
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({persons: persons});
//   }

//   togglePersonHandler = (event, id) => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow});
//   }

//   render() {
//     let persons = null;

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return <Person 
//               click={() => this.deletePersonHandler(index)}
//               name={person.name}
//               age={person.age}
//               key={person.id}
//               changed={(event) => this.nameChangedHandler(event, person.id)} />
//           })};
//         </div>
//       );

//       // style.backgroundColor = 'red';
//       // style[':hover'] = {
//       //   backgroundColor: 'salmon',
//       //   color: 'black'
//       // }
//     }

//     let classes=[];
//     if (this.state.persons.length <= 2) {
//       classes.push('red');
//     }
//     if (this.state.persons.length <= 1) {
//       classes.push('bold');
//     }

//     return (
//       <div className="App">
//         <h1>Hi, Im a React App</h1>
//         <p className={classes.join(' ')}>this is working</p>
//         <button
//           className="button"
//           onClick={() => this.togglePersonHandler()}>
//             Toggle Persons
//         </button>
//         {persons}
//       </div>
//     );
//     //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
//   }
// }

// export default App;




// Lecture 73 CSS Modules

// import React, { Component } from 'react';
// import classes from './App.css';
// //import Radium, { StyleRoot} from 'radium';
// //import styled from 'styled-components';
// import Person from '../components/Persons/Person/Person';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

// class App extends Component {
//   state  = {
//     persons: [
//       {id: 'dfgg', name: 'Max', age: 28},
//       {id: 'fgfdg', name: 'Manu', age: 29},
//       {id: 'fgfdgd', name: 'Steph', age: 26}
//     ],
//     otherState: 'Some value',
//     showPersons: false
//   }

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });

//     const person = {
//       ...this.state.persons[personIndex]
//     };

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;


//     this.setState({persons: persons});
//   };

//   switchNameHandler = (newName) => {
//     //console.log('click');
//     // DON'T DO THIS: this.state.persons[0].name = "Luke";
//     this.setState({
//       persons: [
//         {name: 'Luke', age: 22},
//         {name: newName, age: 18},
//         {name: 'David', age: 24}
//       ]
//     });
//   }

//   deletePersonHandler = (personIndex) => {
//     //const persons = this.state.persons.slice();
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({persons: persons});
//   }

//   togglePersonHandler = (event, id) => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow});
//   }

//   render() {
//     let persons = null;
//     let btnClass = ''[classes.Button];

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return <ErrorBoundary key={person.id}>
//                 <Person 
//                 click={() => this.deletePersonHandler(index)}
//                 name={person.name}
//                 age={person.age}
//                 changed={(event) => this.nameChangedHandler(event, person.id)} /> 
//               </ErrorBoundary>
//           })};
//         </div>
//       );

//       btnClass = classes.Red;
//     }

//     let assignedClasses=[];
//     if (this.state.persons.length <= 2) {
//       assignedClasses.push(classes.red);
//     }
//     if (this.state.persons.length <= 1) {
//       assignedClasses.push(classes.bold);
//     }

//     return (
//       <div className={classes.App}>
//         <h1>Hi, Im a React App</h1>
//         <p className={assignedClasses.join(' ')}>this is working</p>
//         <button
//           className={btnClass}
//           onClick={() => this.togglePersonHandler()}>
//             Toggle Persons
//         </button>
//         {persons}
//       </div>
//     );
//     //THIS IS JSX, WHICH GETS COMPILED TO JS (LIKE BELOW)
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
//   }
// }

// export default App;






// Lecture 86

import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons, 
        changeCounter: this.state.changeCounter + 1 
      }
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({ showCockpit: false })}}>Remove Cockpit</button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated, 
          login: this.loginHandler
        }}>
          {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          />) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
