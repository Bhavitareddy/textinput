import {Component} from "react"
import from "./index.css";

class TextInput extends Component{
    state={
        "search input",
         Save:true
    }
    onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isSave}))
  }
    


}

onAddInput = () => {
    const search input=(e.target.value)
    

render(){
    const(search input)=this.state

    return(
        <div className="bg-container">
        <div className="card-container">
            <h1 className="heading">Editable Text Input</h1>
            <input type="search"></input>
            <button type="button" className="button"  onClick={this.onClickButton}>Save</button>
        </div>
    </div>
    )

}
   
export default TextInput