
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Card, View, CardItem, Footer, FooterTab, Badge, Thumbnail, Text, Button, Icon, List, ListItem } from 'native-base';

import { setIndex } from '../../actions/list';
import navigateTo from '../../actions/sideBarNav';
import myTheme from '../../themes/base-theme';

import styles from './style';

class SideBar extends Component {

  static propTypes = {
    // setIndex: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content theme={myTheme} style={styles.sidebar} >
          <View style={styles.sidebarHeader}>
              <Thumbnail source={require('../../../images/avatar.png')} />
          
              <Text style={styles.colorLight}>Phạm Ngọc Linh</Text>
              <Text note style={styles.colorLight}>Administrator</Text>
          </View>

          <View style={styles.sidebarContent}>
              <Card>
                  <CardItem transparent button onPress={() => this.navigateTo('home')}>
                      <Icon name='ios-home'/>
                      <Text>DASHBOARD</Text>
                  </CardItem>
                  <CardItem transparent button onPress={() => this.navigateTo('blankPage')}>
                      <Icon name='ios-home'/>
                      <Text>CATEGORY #1</Text>
                  </CardItem>
                  <CardItem transparent button onPress={() => this.navigateTo('signup')}>
                      <Icon name='ios-home'/>
                      <Text>SIGN UP</Text>
                  </CardItem>
                  <CardItem transparent button onPress={() => this.navigateTo('profile')}>
                      <Icon name='ios-home'/>
                      <Text>PROFILE</Text>
                  </CardItem>
              </Card>
          </View>

          <View style={styles.sidebarFooter}>
              <Card>
                  <CardItem transparent button onPress={() => this.navigateTo('home')}>
                      <Icon name='ios-home'/>
                      <Text>SIGN OUT</Text>
                  </CardItem>
              </Card>
          </View>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SideBar);
