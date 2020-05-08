import React, { Component } from 'react';

import classes from  './AddPerson.module.css';

class AddPerson extends Component{
    state={
        name:'',
        age:'' 

    }
    nameChangedHandler=(event)=>{
    
        this.setState({name:event.target.value})
    
         

        
    }
    clear = () =>{
        this.setState({
          name: "" ,
          age:''   //simply you can clear your name and age
        });
      }
    ageChangedHandler=(event)=>{
        console.log('Event' , event);
        this.setState({age:event.target.value})
        
        
        
    }
    onChangedHandler()
    {
        this.clear();
    }
    clear=() =>{
        this.setState({name:'' ,age:''})

    }
render(){
    const {name , age} = this.state;
    const enabled =
    name.length>0 && age.length>0

    return(

        <div className={classes.AddPerson}>
        <input type="text" placeholder="name" 
         onChange={this.nameChangedHandler}
         value={this.state.name}/>
        <input type="number" placeholder="age" 
        onChange={this.ageChangedHandler}
        value={this.state.age}/>
         <button className={classes.Button} disabled ={!enabled}
          onClick={()=> { this.onChangedHandler();this.props.personAdded(this.state.name , this.state.age)}}>Add Person</button>
    </div>

    )
}
}

export default AddPerson;