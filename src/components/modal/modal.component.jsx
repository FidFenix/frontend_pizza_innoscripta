import React, { Component } from 'react';

import './Modal.css';

class BodyModal extends Component {
    render(){
        const {body} = this.props;
        return (
                <div>
                    <p>{body}</p>
                </div>
        )
    }
}

class HeaderModal extends Component {
    render(){
        const {title} = this.props;
        return (
            <>
                <div>
                    <h3>{title}</h3>
                </div>
            </> 
        )
    }
}

const Backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
);


class ModalComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
           title: this.props.title,
           body: this.props.body
        }
     }

    render() {
        return (
            <>
                <Backdrop show={this.props.show} clicked={this.props.closed} />
                    <div
                        className="modal-container"
                        style={{
                             transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                             opacity: this.props.show ? '1' : '0'
                        }}>
                        <HeaderModal title={this.state.title}/>
                        <BodyModal body={this.state.body}/>                
                        {this.props.children}
                    </div>
            </> 
        )
     }
}

export default ModalComp;