
        var CONTACTS = [
            {
                id: 1,
                name: 'Victor',
                phoneNumber: '+9725468878',
                image: 'http://www.knowyourquotes.com/images/profiles/2931/thumb1/2.jpg'
                // image: 'https://media.giphy.com/media/xUOxf5Clvu7wX5wbGU/giphy.gif'
            }, {
                id: 2,
                name: 'Vanessa',
                phoneNumber: '+9725468898',
                image: 'https://i.cbc.ca/1.3972742.1486584385!/fileImage/httpImage/image.jpg_gen/derivatives/square_140/laura-salvas.jpg?imwidth=40'
                // image: 'https://media.giphy.com/media/xULW8ipASRPBBibH1K/giphy.gif'
            }, {
                id: 3,
                name: 'Vova',
                phoneNumber: '+9725468879',
                image: 'http://www.knowyourquotes.com/images/profiles/2382/thumb1/1.jpg'
                // image: 'https://media.giphy.com/media/xT0xeNOgQVfrNNAtz2/giphy.gif'
            }, {
                id: 4,
                name: 'Leo',
                phoneNumber: '+9725468879',
                image: 'http://www.knowyourquotes.com/images/profiles/2382/thumb1/1.jpg'
                // image: 'https://media.giphy.com/media/xT0xeNOgQVfrNNAtz2/giphy.gif'
            }, {
                id: 5,
                name: 'Caprio',
                phoneNumber: '+9725468879',
                image: 'http://www.knowyourquotes.com/images/profiles/2382/thumb1/1.jpg'
                // image: 'https://media.giphy.com/media/xT0xeNOgQVfrNNAtz2/giphy.gif'
            }
        ];


        // var HelloWorld = React.createClass({
        //     render: function() {
        //         return <h2> My name is {this.props.name} and I love {this.props.todo} </h2>;
        //     }
        // });

        var Contact = React.createClass({
            render: function() {
                return (
                    <li className="contact">
                        <div className="contact-details">
                            <div className="contact-name"> {this.props.name} </div>
                            <div className="contact-phoneNumber"> {this.props.phoneNumber} </div>
                        </div>
                        <img className="contact-image" src={this.props.image} width='60px' height='60px'/>
                    </li>
                );
            }
        });
        
        var ContactList = React.createClass({
            getInitialState: function() {
                return {
                    displayedContacts: CONTACTS
                };
            },
            handleSearch: function (event) {
                var searchQuery = event.target.value.toLowerCase();
                var displayedContacts = CONTACTS.filter(function(el) {
                    var searchValue = el.name.toLowerCase();
                    return searchValue.indexOf(searchQuery) !== -1;
                });

                this.setState({
                    displayedContacts: displayedContacts
                });

            },

            render: function() {
                return (
                    <div>
                        <input type="text" className="contact-search" onChange={this.handleSearch} />   
                        <ul>
                            {
                                this.state.displayedContacts.map(function(el) {
                                    return <Contact 
                                        key={el.id} 
                                        name={el.name} 
                                        phoneNumber={el.phoneNumber} 
                                        image={el.image}
                                    />;
                                })
                            }
                        </ul>
                    </div>

                );
            }
        });

        // ReactDOM.render(
        // <div>
        //     <HelloWorld name="Nastya" todo="to play Poker" />
        //     <HelloWorld name="Olya" todo="to play Soccer" />
        //     <HelloWorld name="Sveta" todo="to play Baseball" />
        // </div>,
        // document.getElementById("content")
        // ); 

        ReactDOM.render(
            <ContactList />,
            document.getElementById("content")
        ); 
