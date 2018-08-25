import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ChanelList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chanels: []
        }
    }

    componentDidMount()
    {
        this.getChanels();
    }

    getChanels() {

        let url = route('api.chanel.list').url();

        axios.get(url)
            .then(data => this.setState({
                chanels: data.data.data
            }));

    }
    render() {

        let chanelList = this.state.chanels.map((chanel, index) =>
            <div className="chat_list active_chat" key={chanel.id}>
                <div className="chat_people">
                    <div className="chat_ib">
                        <h5>{chanel.name} <span className="chat_date">Dec 25</span></h5>
                    </div>
                </div>
            </div>
        );

        return (
            <div>
                {chanelList}
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<ChanelList/>, document.getElementById('chanel-list'));
}else {
    console.log('not found ');
}
