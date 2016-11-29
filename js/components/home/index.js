
import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Footer, FooterTab, Badge, Tabs, Card, CardItem, InputGroup, Input, Thumbnail, Title, Content, Text, Button, Icon } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import myTheme from '../../themes/base-theme';
import styles from './styles';

import RecentCategory from '../recentCategory/index';
import MostCategory from '../mostCategory/index';

const {
  reset,
  pushRoute,
} = actions;

class Home extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    setIndex: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route, index) {
    this.props.setIndex(index);
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  searchBox() {
    alert("Search for...");
  }

  // Insert searchBar to use search bar
  // <Header searchBar rounded>
  //     <InputGroup>
  //         <Icon name="ios-search" />
  //         <Input placeholder="Search" />
  //         <Icon name="ios-people" />
  //     </InputGroup>
  //     <Button transparent>
  //         Search
  //     </Button>
  // </Header>

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>

        <Header>
          <Button transparent onPress={() => this.props.reset(this.props.navigation.key)}>
            <Icon name="ios-home" />
          </Button>
          <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>
          <Button transparent onPress={() => this.searchBox()}>
            <Icon name="ios-search" />
          </Button>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
            <Tabs>
                <RecentCategory tabLabel='Recent'></RecentCategory>
                <MostCategory tabLabel='Most'></MostCategory>
            </Tabs>

            <Card style={{ flex: 0 }}>
                <CardItem header>
                    <Thumbnail source={require('../../../images/avatar.png')} />
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                </CardItem>

                <CardItem cardBody>
                    <Image style={{ resizeMode: 'cover', width: null, height: 250 }} source={require('../../../images/thumbnail.jpg')} /> 
                    <Text>
                      A center aspect designed for efficient representation of vertically scrolling lists of changing data. This can be achieved on the same lines as that of dataArray concept of List.
                    </Text>
                </CardItem>

                <CardItem footer>
                    <Button transparent>
                        <Icon name="logo-github" />
                        1,926
                    </Button>

                    <Button transparent>
                        <Icon name="logo-github" />
                        1,926
                    </Button>                       
                </CardItem>
            </Card>

            <Card style={{ flex: 0, marginTop: 20 }}>
                <CardItem header>
                    <Thumbnail source={require('../../../images/avatar.png')} />
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                </CardItem>

                <CardItem cardBody>
                    <Image style={{ resizeMode: 'cover', width: null, height: 250 }} source={require('../../../images/thumbnail.jpg')} /> 
                    <Text>
                      A center aspect designed for efficient representation of vertically scrolling lists of changing data. This can be achieved on the same lines as that of dataArray concept of List.
                    </Text>
                </CardItem>

                <CardItem footer>
                    <Button transparent>
                        <Icon name="logo-github" />
                        Like nào
                    </Button>

                    <Button transparent>
                        <Icon name="logo-github" />
                        Love nào
                    </Button>

                    <Button transparent>
                        <Icon name="logo-github" />
                        Kiss nào
                    </Button>                       
                </CardItem>
            </Card>

        </Content>

        <Footer >
            <FooterTab>
                <Button>
                    <Badge>2</Badge>
                    Apps
                    <Icon name='ios-apps-outline' />
                </Button>
                <Button>
                    Camera
                    <Icon name='ios-camera-outline' />
                </Button>
                <Button active>
                    Navigate
                    <Icon name='ios-compass' />
                </Button>
                <Button>
                    Contact
                    <Icon name='ios-contact-outline' />
                </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
  }
}


// <Container theme={myTheme} style={styles.container}>
//         <Header>
//           <Button transparent onPress={() => this.props.reset(this.props.navigation.key)}>
//             <Icon name="ios-power" />
//           </Button>

//           <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>

//           <Button transparent onPress={this.props.openDrawer}>
//             <Icon name="ios-menu" />
//           </Button>
//         </Header>

//         <Content>
//           <Grid style={styles.mt}>
//             {this.props.list.map((item, i) =>
//               <Row key={i}>
//                 <TouchableOpacity
//                   style={styles.row}
//                   onPress={() => this.pushRoute('blankPage', i)}
//                 >
//                   <Text style={styles.text}>{item}</Text>
//                 </TouchableOpacity>
//               </Row>
//             )}
//           </Grid>
//         </Content>

//         <Footer >
//             <FooterTab>
//                 <Button>
//                     <Badge>2</Badge>
//                     Apps
//                     <Icon name='ios-apps-outline' />
//                 </Button>
//                 <Button>
//                     Camera
//                     <Icon name='ios-camera-outline' />
//                 </Button>
//                 <Button active>
//                     Navigate
//                     <Icon name='ios-compass' />
//                 </Button>
//                 <Button>
//                     Contact
//                     <Icon name='ios-contact-outline' />
//                 </Button>
//             </FooterTab>
//         </Footer>
//       </Container>

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'login' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
