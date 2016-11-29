
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, List, ListItem, InputGroup, Input, Button, Icon, View, Text, Picker } from 'native-base';

import { setUser } from '../../actions/user';
import styles from './styles';

const {
  replaceAt,
} = actions;

const background = require('../../../images/shadow.png');

class Login extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  setUser(name) {
    this.props.setUser(name);
  }

  replaceRoute(route) {
    this.setUser(this.state.name);
    this.props.replaceAt('login', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container>
          <Content style={styles.container}>
              <Image source={background} style={styles.shadow}>
                  <View style={styles.bg}>
                      <List>
                          <ListItem>
                              <InputGroup>
                                  <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                                  <Input placeholder="EMAIL" />
                              </InputGroup>
                          </ListItem>
                          <ListItem>
                              <InputGroup>
                                  <Icon name="ios-call" style={{ color: '#0A69FE' }} />
                                  <Input placeholder="PHONE" keyboardType="numeric" />
                              </InputGroup>
                          </ListItem>
                          <ListItem>
                              <InputGroup>
                                  <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                                  <Input placeholder="PASSWORD" secureTextEntry />
                              </InputGroup>
                          </ListItem>
                      </List>
                      <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
                      onPress={() => this.replaceRoute('home')} >
                          Login
                      </Button>
                  </View>

                  
                  
              </Image>
          </Content>
      </Container>
    );
  }
}


// <Container>
//         <View style={styles.container}>
//           <Content>
//             <Image source={background} style={styles.shadow}>
//               <View style={styles.bg}>
//                 <InputGroup style={styles.input}>
//                   <Icon name="ios-person" />
//                   <Input placeholder="EMAIL/PHONE" onChangeText={name => this.setState({ name })} />
//                 </InputGroup>
//                 <InputGroup style={styles.input}>
//                   <Icon name="ios-unlock-outline" />
//                   <Input
//                     placeholder="PASSWORD"
//                     secureTextEntry
//                   />
//                 </InputGroup>
//                 <Button style={styles.btn} onPress={() => this.replaceRoute('home')}>
//                   Login
//                 </Button>
//               </View>
//             </Image>
//           </Content>
//         </View>
//       </Container>

function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
    setUser: name => dispatch(setUser(name)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Login);
