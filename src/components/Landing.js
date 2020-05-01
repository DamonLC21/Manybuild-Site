import React, { Component } from 'react'
import logo from '../MBlogo.png'
import { Link } from 'react-router-dom'


export default class Landing extends Component {

    state = {
        first: true,
        second: false,
        third: false,
        done: false
    }

    componentDidMount(){
        setTimeout(() => this.setState({first: false, second: true}), 3000)
        setTimeout(() => this.setState({second: false, third: true}), 6000)
        setTimeout(() => this.setState({third: false, done: true}), 8500)
    }

    render(){
        const {first,second,third,done} = this.state
        return (
            <section className='landing' style={{backgroundColor: done ? "#253551" : null}}>
                <div>
                    { first ? <h1 className='welcome'>With the right team</h1> : null }
                    { second ? <h1 className='welcome'>We can build anything</h1> : null }
                    { third ? <h1 className='welcome2' id='mb'>Manybuild</h1> : null }
                    { done ? (
                        <section className='welcome2'>
                            <img src={logo} alt="manybuild"/> 
                            <p className='language'>Please choose a language | Por favor elige un idioma </p>
                            <div className="landing-buttons">
                                <Link to='/home/english'>
                                    <button>English</button>
                                </Link>
                                <Link to='/home/espanol'>
                                    <button>Espanol</button>
                                </Link>
                            </div>
                        </section>
                        ) : null
                    }
                </div>
            </section>
        )
    }
}
