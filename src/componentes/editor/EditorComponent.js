import React, { Component }   from 'react';
import ContentEditable from 'react-contenteditable'
import './Editor.css'
import {  quitarTags, formatJson, dividirLineasJson, formatSQL, dividirLineasSQL} from './Funciones';


export default class   EditorComponent extends Component {

  stylesColors=[
    {name:'comillas',value:'#17a2b8'},
    {name:'reservadas',value:'#17a2b8'},
    {name:'csimples',value:'#DADB59'}
  ]

  state={
    numLines:1
  }
 
  componentDidMount(){

    let lines = dividirLineasSQL(this.props.text);
    let newText=formatSQL(lines,this.stylesColors)

    this.props.onChange(newText);

    this.setState({numLines:lines.length})
  }
 
  componentDidUpdate(prevProps){
     if(prevProps.lines!==this.props.lines){

 
        this.setState({ numLines:this.props.lines})


    }
  }

  handleChange = event => {

    let text=event.target.value;

    let lines=quitarTags(text,this.stylesColors);

 
    let newText="";

    if(this.props.format==='JSON')
    newText=formatJson(lines,this.stylesColors)
    else
    newText=formatSQL(lines,this.stylesColors)

 
    this.props.onChange(newText);
 
    this.setState({...this.state,numLines:lines.length})
  }

  crearLineas=()=>{
    let lineas=[];
 
       for (let i= 0; i < this.state.numLines; i++) {
        lineas.push(<p key={i} className="lines">{(i+1)}</p>)
      }

      return lineas;
  }

 

  render() { 

    return (
      <div className="App">

         
                
                  <div className="cont-lines">
                    
                  {this.crearLineas()}
               
                  </div>
                   
                    <ContentEditable
                      html={this.props.text}
                       autoCorrect="false"
                      autoComplete="off" 
                      autoCapitalize="off" 
                      spellCheck="false"
                      data-column="price"
                      className="content-editable"
                      onChange={this.handleChange}
                    />
                  
                
      </div>
    )
  }
}

 
 