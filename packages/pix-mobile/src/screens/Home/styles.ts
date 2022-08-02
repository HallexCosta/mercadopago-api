import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 100%;
`

export const Form = styled.View`
  width: 100%
  height: 100%

  margin-top: 24px;
`
export const Title = styled.Text`
  width: 100%;
  margin-top: 50px;

  font-size: 25px;
  font-weight: bold;

  text-align: center;
`
export const FieldGroup = styled.View`
  margin-left: 12px;
  margin-top: 12px;
`

export const InputName = styled.Text`
  font-size: 15px
  font-weight: bold;
`
export const InputBox = styled.TextInput`
  width: 90%;
  padding: 12px;

  border: 2px #eee solid;
  border-radius: 2px;
`
export const ContainerButtonPayment = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
`
export const ButtonPayment = styled.TouchableOpacity`
  width: 50%;
  width: 50%;
  align-items: center;

  background: #00a000;
  border-radius: 8px;

  padding: 12px;
  margin-top: 30px;
`

export const Text = styled.Text`
  font-size: 14px;  
  color: white;
`
