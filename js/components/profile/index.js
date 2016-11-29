import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon, View, List, ListItem, Thumbnail, Tabs } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  popRoute,
} = actions;

class BlankPage extends Component {

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
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>{(name) ? this.props.name : 'Profile'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <View>
            <Image source={require('../../../images/thumbnail.jpg')} style={{ width: null }}></Image>
            <Tabs>
                <Text tabLabel='Recent'></Text>
                <Text tabLabel='Most'></Text>
            </Tabs>
          </View>
          <List>
              <ListItem>
                  <Thumbnail square size={80} source={require('../../../images/avatar.png')} />
                  <Text>Sankhadeep</Text>
                  <Text note>Its time to build a difference . .</Text>
              </ListItem>
              <ListItem>
                  <Thumbnail square size={80} source={require('../../../images/avatar.png')} />
                  <Text>Sankhadeep</Text>
                  <Text note>Its time to build a difference . .</Text>
              </ListItem>
              <ListItem>
                  <Thumbnail square size={80} source={require('../../../images/avatar.png')} />
                  <Text>Sankhadeep</Text>
                  <Text note>Its time to build a difference . .</Text>
              </ListItem>
              <ListItem>
                  <Thumbnail square size={80} source={require('../../../images/avatar.png')} />
                  <Text>Sankhadeep</Text>
                  <Text note>Its time to build a difference . .</Text>
              </ListItem>
              <ListItem>
                  <Thumbnail square size={80} source={require('../../../images/avatar.png')} />
                  <Text>Sankhadeep</Text>
                  <Text note>Its time to build a difference . .</Text>
              </ListItem>
              <ListItem>
                  <Thumbnail square size={80} source={require('../../../images/avatar.png')} />
                  <Text>Sankhadeep</Text>
                  <Text note>Its time to build a difference . .</Text>
              </ListItem>
              <ListItem>
                  <Thumbnail square size={80} source={require('../../../images/avatar.png')} />
                  <Text>Sankhadeep</Text>
                  <Text note>Its time to build a difference . .</Text>
              </ListItem>
              <ListItem>
                  <Thumbnail square size={80} source={require('../../../images/avatar.png')} />
                  <Text>Sankhadeep</Text>
                  <Text note>Its time to build a difference . .</Text>
              </ListItem>
              <ListItem>
                  <Thumbnail square size={80} source={require('../../../images/avatar.png')} />
                  <Text>Sankhadeep</Text>
                  <Text note>Its time to build a difference . .</Text>
              </ListItem>
              <ListItem>
                  <Thumbnail square size={80} source={require('../../../images/avatar.png')} />
                  <Text>Sankhadeep</Text>
                  <Text note>Its time to build a difference . .</Text>
              </ListItem>
              <ListItem>
                  <Thumbnail square size={80} source={require('../../../images/avatar.png')} />
                  <Text>Sankhadeep</Text>
                  <Text note>Its time to build a difference . .</Text>
              </ListItem>
              <ListItem>
                  <Thumbnail square size={80} source={require('../../../images/avatar.png')} />
                  <Text>Sankhadeep</Text>
                  <Text note>Its time to build a difference . .</Text>
              </ListItem>
          </List>
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


export default connect(mapStateToProps, bindAction)(BlankPage);
