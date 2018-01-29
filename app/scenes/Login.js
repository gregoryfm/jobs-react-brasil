import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import styled from 'styled-components/native'
// import RedInput from '../components/utils/red-input'
import { connect } from 'react-redux'
import { dispatch } from '../redux/store'
import { fetchQuestions } from '../redux/actions/quizz-actions'
import { Actions } from 'react-native-router-flux'

const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: #ffffff;
`

const Header = styled.View`
  flex: 3;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: black;
`

const Logo = styled.Text`
  color: #ffffff;
  font-size: 59px;
`

const SpanBold = styled.Text`
  font-weight: bold;
`

const HeaderSubtitles = styled.Text`
  color: #ffffff;
  font-size: 20px;
  text-align: center;
`
const Form = styled.View`
  flex: 5;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  margin-vertical: 20px;
`

const FormTitle = styled.Text`
  color: rgb(117, 117, 117);
  font-size: 24px;

`

const FormMessage = styled.Text`
  color: rgb(117, 117, 117);
  font-size: 16px;
`

const GoButton = styled.TouchableOpacity`
  background-color: white;
`
const SpanRed = styled.Text`
  color: rgb(255, 82, 82);
`

const LoginButton = styled.TouchableOpacity`
  background-color: rgb(255, 82, 82);
  width: 100%;
  height: 70px;
  margin-bottom: 0px;
  justify-content: center;
  align-items: center;
`

const LoginText = styled.Text`
  font-size: 34px;
  color: #ffffff;
`

class Home extends React.Component {
  static navigationOptions = {
    header: null
  };

  handleLoginPress() {

  }

  render() {
    return(
      <Wrapper>
        <Header>
          <Logo><SpanBold>Go</SpanBold> Ninja</Logo>
          <HeaderSubtitles>Hire the bests freelancers around the world!</HeaderSubtitles>
        </Header>
        <Form>
          <FormTitle>Welcome back!</FormTitle>
          <TextInput
            style={{height: 40, borderBottomColor: 'gray', borderWidth: 1, width: '100%'}}
            placeholder='Login'
          />
          <TextInput
            style={{height: 40, borderBottomColor: 'gray', borderWidth: 1, width: '100%'}}
            placeholder='Password'
            secureTextEntry
          />
          <GoButton><FormMessage>Not registered yet? <SpanRed>Sign up</SpanRed> here!</FormMessage></GoButton>
        </Form>
        <LoginButton onPress={this.handleLoginPress}><LoginText>Login</LoginText></LoginButton>
      </Wrapper>
    )
  }
}

export default Home