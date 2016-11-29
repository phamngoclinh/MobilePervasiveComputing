import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Card, CardItem, Thumbnail, Title, Content, Text, Button, Icon } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  popRoute,
} = actions;

class MostCategory extends Component {

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
        <Content padder>
        	<Text>MOST CATEGORY</Text>
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


export default connect(mapStateToProps, bindAction)(MostCategory);
