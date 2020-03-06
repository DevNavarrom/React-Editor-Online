
import React, { Component } from 'react';
import { Row, Col, Button, UncontrolledButtonDropdown } from 'reactstrap';
import iconCode from '../icons/code.png'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export class Header extends Component {

    state={
        dropdownOpen:false
    }

    constructor(props){
        super(props);
        this.fileInputRef = React.createRef();
    }

     showFile = async (e) => {
        e.preventDefault()

         const reader = new FileReader()

         let name=e.target.files[0].name;
          let tipo=name.split('.')[1];
    
        if(tipo==='json' || tipo==='sql'){

            reader.onload = async (e) => { 
                const text = (e.target.result)
                 this.props.changeText(text,tipo.toUpperCase())
               };
      
 
        }else
        {
            alert('Archivo no valido');
        }
          reader.readAsText(e.target.files[0])
      }
    
    render(){ 
       return ( 
        <header className="App-header"> 

        <div   className="justify-content-between col-md-12 d-flex">

        <input 
        ref={this.fileInputRef}
        className="button d-none" 
        type="file" 
        onChange={(e) => this.showFile(e)} 
        placeholder="abrir"
        title="s"/>

            <Col md="auto">
                <Row >
                    <Col md="auto">
        
                    <img src={iconCode} alt="Icono editor" height="50" style={{color:'white'}}/>
                    
                    </Col>
                    <div className="menu-escritorio">
                        <Col md="auto" className="pt-2">
                            <h4>Editor online</h4>
                        </Col>
                    </div>
                </Row>
            </Col>

            <div className="menu-escritorio">
                <Col md="auto" className="pt-2">
                <Row>
    
                    <Col md="auto">
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({...this.state,dropdownOpen:!this.state.dropdownOpen})}>
                        <DropdownToggle caret>
                        {
                            this.props.format==='JSON'?
                            <i className="fab fa-node-js mr-1"></i> :
                            <i className="fas fa-database mr-1"></i> 
                        }
                        
                        <strong>{this.props.format}</strong> 
                        </DropdownToggle>
                        <DropdownMenu>
                    
                            <DropdownItem onClick={()=>{this.props.onChangeFormat('JSON')}}>
                            <i className="fab fa-node-js mr-1"></i><strong>JSON</strong>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={()=>{ this.props.onChangeFormat('SQL') }}>
                            <i className="fas fa-database mr-1"></i><strong>SQL</strong></DropdownItem>
                        </DropdownMenu>
                        </ButtonDropdown>
                        
                    </Col>
    
                    <Col md="auto">
                        <Button onClick={()=>{this.fileInputRef.current.click()}}
                         ><strong>Abrir</strong> 
                         <i className="far fa-folder-open"></i> 
                         </Button>
                    </Col>
    
                    <Col md="auto">
                        <Button onClick={this.props.onSave}><strong>Guardar</strong> <i className="fas fa-file-download"></i> </Button>
                    </Col>
    
                </Row>
                </Col>
            </div>


            <div className="menu-movil">
                <Col md="auto" className="pt-2 pr-2">
                <UncontrolledButtonDropdown direction="left">
                <DropdownToggle caret>
                    <i className="fas fa-bars"></i>
                </DropdownToggle>
                <DropdownMenu>
                     <DropdownItem header>Archivos</DropdownItem>
                     <DropdownItem onClick={()=>{this.fileInputRef.current.click()}}>
                         <strong>Abrir</strong> 
                         <i className="far fa-folder-open"></i>
                         </DropdownItem>
                     <DropdownItem onClick={this.props.onSave}><strong>Guardar</strong> <i className="fas fa-file-download"></i></DropdownItem>
                     <DropdownItem header>Extensión</DropdownItem>

                    <DropdownItem onClick={()=>{ this.props.onChangeFormat('JSON') }}> 
                    <i className="fab fa-node-js mr-1"></i><strong>JSON</strong></DropdownItem>

                    <DropdownItem onClick={()=>{ this.props.onChangeFormat('SQL') }}> 
                    <i className="fas fa-database mr-1"></i><strong>SQL</strong></DropdownItem>
                </DropdownMenu>
                </UncontrolledButtonDropdown>
                </Col>
            </div>
            
        </div>
    
        </header>
     );}
}
 
export default Header;