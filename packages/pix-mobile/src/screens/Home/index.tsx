import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Title,
  InputName,
  InputBox,
  Text,
  ButtonPayment,
  ContainerButtonPayment,
  Form,
  FieldGroup
} from './styles'

export default function Home() {
  const [customerEmail, setCustomerEmail] = useState('')
  const [paymentValue, setPaymentValue] = useState(0)

  const navigation = useNavigation()

  function handleConfirmPayment() {
    navigation.navigate('Checkout')
  }

  return (
    <Container>
      <Title>Modulo Pix - MercadoPago</Title>

      <Form>
        <FieldGroup>
          <InputName>Email do comprador</InputName>
          <InputBox
            placeholder="Informe o email do comprador/cliente"
            onChange={(content: string) => setCustomerEmail(content)}
            value={customerEmail}
          />
        </FieldGroup>
        <FieldGroup>
          <InputName>Valor de pagamento</InputName>
          <InputBox
            placeholder="Inform o valor de pagamento"
            onChange={(content: string) => setPaymentValue(Number(content))}
            value={paymentValue}
          />
        </FieldGroup>

        <ContainerButtonPayment>
          <ButtonPayment
            onPress={handleConfirmPayment}
          >
            <Text>Confirm Pix</Text>
          </ButtonPayment>
        </ContainerButtonPayment>
      </Form>
    </Container>
  )
}
