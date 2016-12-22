var React = require('react');
var {Link,IndexLink} = require('react-router');

var NavBar = React.createClass({

    render: function () {
        return (
            <div>
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">React Timer App
                                <li> <IndexLink  activeClassName= "active" activeStyle = {{fontWeight: 'bold'}} to = '/'> Timer </IndexLink> </li>
                                <li> <Link  activeClassName= "active" activeStyle = {{fontWeight: 'bold'}} to = '/countdown'> Countdown </Link> </li>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li className="menu-text">
                                Created By <a href="https://github.com/ThalaHemanth" target="_blank"> Hemanth </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        )
    }
});

module.exports = NavBar;
