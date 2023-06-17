import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    console.log('Constructor Caller')
    this.state = {date: new Date()}
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
    console.log('componentWillUnmount')
  }

  tick = () => this.setState({date: new Date()})

  render() {
    const {date} = this.state
    console.log('render Called')

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
