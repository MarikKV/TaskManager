import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    render() {
        return (
            <div>
              <h1>Hello user: {localStorage.getItem('CurrentUser')} </h1>

            </div>
        );
    }
}
export default Home;