import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ChanelList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount()
    {
        this.getChanels();
    }

    getChanels() {
        let url = route('api.chanel.list').url();
        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    render() {
        return (
            <div className="chat_list active_chat">
                <div className="chat_people">
                    {/*<div className="chat_img">*/}
                        {/*<img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />*/}
                    {/*</div>*/}
                    <div className="chat_ib">
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions
                            astrology under one roof.</p>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<ChanelList/>, document.getElementById('chanel-list'));
}else {
    console.log('not found ');
}
