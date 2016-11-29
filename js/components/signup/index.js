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

class Signup extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    const { props: { name, index, list } } = this;

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
							<ListItem>
							  <InputGroup>
							      <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
							      <Input placeholder="CONFIRM PASSWORD" secureTextEntry />
							  </InputGroup>
							</ListItem>
						</List>
						<Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
						onPress={() => this.replaceRoute('home')} >
						  Sign Up
						</Button>
					</View>
				</Image>
			</Content>
		</Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(Signup);
