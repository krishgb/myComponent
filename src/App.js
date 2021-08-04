import { Component, createRef } from 'react'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <MyComponent headerText="Say with me">
        <h1>GO BEYOND PLUS ULTRA</h1>
      </MyComponent>
    </div>
  )
}

class MyComponent extends Component {
  constructor(props) {

    // calling super constructor with props
    super(props)

    // instead of stringrefs(this.refs) createRefs can be used
    this.myComponent = createRef()

    // set the default internal state
    this.state = {
      clicks: 0
    }
  }
  componentDidMount() {
    // this.refs.myComponentDiv.addEventListener('click', this.clickHandler)
    this.myComponent.current.addEventListener('click', this.clickHandler)
  }
  componentWillUnmount() {
    // this.refs.myComponentDiv.removeEventListener('click', this.clickHandler)
    this.myComponent.current.removeEventListener('click', this.clickHandler)
  }

  // make it as an arrow function to get rid of "this"
  clickHandler = () => {
    this.setState({
      // clicks: this.clicks + 1 - should be this.state.click
      clicks: this.state.clicks + 1
    })
  }

  render() {
    const { children, headerText } = this.props
    return (
      <div className="my-component" ref={this.myComponent}>
        <h2>My Component ({this.state.clicks} clicks)</h2>
        <h3>{headerText}</h3>
        {children}
      </div>
    )
  }
}
