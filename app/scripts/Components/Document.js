import React from 'react';
import ReactDom from 'react-dom';
export default React.createClass({
    getInitialState() {
        return {
            read: false,
            confirmation: false
        }

    },
    render() {
        console.log(this.state);
        console.log(this.props.documents);
        if (this.state.read === false && this.state.confirmation === false) {
            return ( <
                div >
                <
                h1 > {
                    this.props.documents.name
                } < /h1> <
                p > {
                    this.props.documents.body
                } < /p> <
                span > Mark As Read < /span><input onChange={this.handleCheck} type="checkbox"/ >
                <
                /div>
            );
        } else if (this.state.read === true && this.state.confirmation === false) {
            return ( <
                div className = "modal-background" >
                <
                div className = "modal" >
                <
                h3 > Hey did you you want to make this marked as read bro ? < /h3> <
                button onClick = {
                    this.handleConfirm
                }
                className = "confirm" > Confirm < /button> <
                button onClick = {
                    this.handleCancel
                }
                className = "cancel" > Cancel < /button> <
                /div> <
                h1 > {
                    this.props.documents.name
                } < /h1> <
                p > {
                    this.props.documents.body
                } < /p> <
                span > Mark As Read < /span><input checked='true' onChange={this.handleCheck} type="checkbox"/ >
                <
                /div>
            );
        } else if (this.state.read === true && this.state.confirmation === true) {
            return ( <
                div >
                <
                h1 > {
                    this.props.documents.name
                } < /h1> <
                p > {
                    this.props.documents.body
                } < /p> <
                span > Read < /span><input disabled='true' checked='true' type="checkbox"/ >
                <
                /div>
            );
        }
    },
    handleCheck(e) {
        this.setState({
            read: true,
            confirmation: false
        });

    },
    handleConfirm(e) {
        this.setState({
            read: true,
            confirmation: true
        });
    },
    handleCancel(e) {
        this.setState({
            read: false,
            confirmation: false
        });
    }
});
