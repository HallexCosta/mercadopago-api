import http from 'node:http'
import mercadoPago, { Customer } from 'mercadopago'
import MercadoPagoController from './app'

const PORT = 3333
http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {
  response.setHeader('Content-Type', 'application/json')

  for await (const body of request) {
    const customerData: Customer = { email: 'hallan.costa1@hotmail.com' }

    const mercadoPagoController = new MercadoPagoController(
      process.env.MP_ACCESS_TOKEN || '',
      mercadoPago
    )

    if (request.method === 'GET' && request.url === '/customer') {
      response.statusCode = 200
      return response.end(JSON.stringify(
        await mercadoPagoController
          .listCustomer(customerData.email)
      ))
    }
    if (request.method === 'POST' && request.url === '/customer') {
      const customer = await mercadoPagoController.createCustomer(customerData)
      console.log(customer)
      response.statusCode = 201
      return response.end(JSON.stringify(customer))
    }

    if (request.url === '/pix') {
      response.statusCode = 201
      const paymentResponse = await mercadoPagoController.createPixPayment(customerData.email)

      return response.end(
        JSON.stringify(paymentResponse.response.point_of_interaction)
      )
    }

    if (request.url?.includes('/')) {
      response.statusCode = 200
      return response.end(JSON.stringify({
        status: 200,
        message: "I'm alive"
      }))
    }
  }
})
  .listen(PORT, () => console.log('listening server on port ' + PORT))
