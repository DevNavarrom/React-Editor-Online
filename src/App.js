import React, { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import EditorComponent from './componentes/editor/EditorComponent';
import { dividirLineasJson, formatJson, dividirLineasSQL, formatSQL, quitarTags, clean } from './componentes/editor/Funciones';
 
function App() {

  const [text, settext] = useState(`SELECT * FROM estudiantes where carrera LIKE 'Ing' and edad >10`);
  const [format, setformat] = useState('SQL')
  const [lines, setlines] = useState(1);
  const stylesColors=[
    {name:'comillas',value:'#17a2b8'},
    {name:'reservadas',value:'#17a2b8'},
    {name:'csimples',value:'#DADB59'}
  ]

  const handleChange=(text,tipo)=>{
     setformat(tipo)
     let newText='';
     let lines=[];

      if(tipo==='JSON'){

       lines = dividirLineasJson(text);
       newText=formatJson(lines,stylesColors)

     }else{
       lines = dividirLineasSQL(text);
       newText=formatSQL(lines,stylesColors)

     }    

     settext(newText)
     setlines(lines.length);
  }

  const saveFile = () => {
    const element = document.createElement("a");
    let textSave=clean(text,stylesColors);
    const file = new Blob([textSave], {type: ''});
    element.href = URL.createObjectURL(file);
    element.download = `fichero.${format.toLowerCase()}`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }


  return (
    <div className="App">

      <Header 
      changeText={handleChange} 
      format={format} 
      onChangeFormat={setformat}
      onSave={saveFile}
      />
 
      <EditorComponent text={text} format={format} onChange={settext} lines={lines}/>


    </div>
  );
}

export default App;
