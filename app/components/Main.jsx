var React = require('react');
var NavBar = require('NavBar');

var Main = React.createClass({
    render: function() {
        return (
                <div>
                    <div>
                      
                      <NavBar/>
                      <h2> Main.jsx</h2>

                      {this.props.children}
                    </div>
                  </div>

              );
    }
});

module.exports = Main;
