import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class NewChannel extends Component {
    constructor(props) {
        super(props);
        this.chanelName = React.createRef();
    }
    render() {
        return (
            <form className="form-inline">
                <div className="from-group">
                    <input type="text" ref={this.chanelName} id="chanelName" className="form-control" placeholder="new chanel" />
                </div>
                <button type="button" className="btn btn-primary" onClick={this.handleNewChanel}>New</button>
            </form>
        );
    }


    handleNewChanel(e) {
        let url = route('api.chanel.create');
        let name = document.getElementById('chanelName').value;
        axios.post(url, { name:name })
            .then(function (respose) {
                console.log(respose.data);
            });

    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<NewChannel />, document.getElementById('new-chanel'));
}
