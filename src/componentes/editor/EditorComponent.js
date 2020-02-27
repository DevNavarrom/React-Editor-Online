import React   from 'react';
 
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
  export default class   EditorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: 'codigo...',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
      //  monaco={monaco}
        width="100%"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

 