
import React, { useState } from 'react';
import { Row, Col, Button, UncontrolledButtonDropdown } from 'reactstrap';
import iconCode from '../icons/code.png'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const Header = () => {

    const [dropdownOpen, setOpen] = useState(false);

    const [extensionSelected, setextensionSelected] = useState('JSON');

    
    return ( 
        <header className="App-header"> 

        <div   className="justify-content-between col-md-12 d-flex">

            <Col md="auto">
                <Row >
                    <Col md="auto">
        
                    <img src={iconCode} alt="Icono editor" height="50" style={{color:'white'}}/>
                    
                    </Col>
                    <div className="menu-escritorio">
                        <Col md="auto">
                            <h4>Editor online</h4>
                        </Col>
                    </div>
                </Row>
            </Col>

            <div className="menu-escritorio">
                <Col md="auto" className="pt-2">
                <Row>
    
                    <Col md="auto">
                        <ButtonDropdown isOpen={dropdownOpen} toggle={() => setOpen(!dropdownOpen)}>
                        <DropdownToggle caret>
                        {
                            extensionSelected==='JSON'?
                            <i className="fab fa-node-js mr-1"></i> :
                            <i className="fas fa-database mr-1"></i> 
                        }
                        
                        <strong>{extensionSelected}</strong> 
                        </DropdownToggle>
                        <DropdownMenu>
                    
                            <DropdownItem onClick={()=>{setextensionSelected('JSON')}}>
                            <i className="fab fa-node-js mr-1"></i><strong>JSON</strong>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={()=>{setextensionSelected('SQL')}}>
                            <i className="fas fa-database mr-1"></i><strong>SQL</strong></DropdownItem>
                        </DropdownMenu>
                        </ButtonDropdown>
                        
                    </Col>
    
                    <Col md="auto">
                        <Button ><strong>Abrir</strong> <i className="far fa-folder-open"></i> </Button>
                    </Col>
    
                    <Col md="auto">
                        <Button><strong>Guardar</strong> <i className="fas fa-file-download"></i> </Button>
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
                     <DropdownItem><strong>Abrir</strong> <i className="far fa-folder-open"></i></DropdownItem>
                     <DropdownItem><strong>Guardar</strong> <i className="fas fa-file-download"></i></DropdownItem>
                     <DropdownItem header>Extensión</DropdownItem>
                    <DropdownItem> <i className="fab fa-node-js mr-1"></i><strong>JSON</strong></DropdownItem>
                    <DropdownItem> <i className="fas fa-database mr-1"></i><strong>SQL</strong></DropdownItem>
                </DropdownMenu>
                </UncontrolledButtonDropdown>
                </Col>
            </div>
            
        </div>
    
        </header>
     );
}
 
export default Header;