import React, { Component } from 'react';
import CounterInfo from './CounterInfo';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Test',
            arr:['Test1','Test2','Test3'],
            inputName:'',
            counter: 3
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onAddNameHandler = this.onAddNameHandler.bind(this);
    }

    onChangeHandler(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState(currentState => {
            return {
                ...currentState,
                [name]: value,
            };
        });
    }

    onAddNameHandler(event) {
        event.preventDefault();
        let newNames = this.state.arr;
        let newCounter = this.state.counter + 1;
        let temp = this.state.inputName;
        newNames.push(temp);
        this.setState({
            names: newNames,
            inputName: '',
            counter: newCounter
        });
    }

    render() {
        const {
            name,
            arr,
            inputName,
            counter
        } = this.state;

        return (
            <div>
                <h2>Home</h2>
                <p>{name}</p>
                <ul>
                    {
                        arr.map((name,index) => (<li key={index}>{name}</li>))
                    }
                </ul>
                <form onSubmit={this.onAddNameHandler}>
                    <input type="text" name="inputName" value={inputName} onChange={this.onChangeHandler}/>
                    <button>Add Name</button>
                </form>
                <CounterInfo counter={counter}/>
            </div>
        );
    }
}

export default Home;