import { MercadoPagoAPI, Customer, Item, Preference, Payment } from 'mercadopago'

export default class MercadoPagoController {
  private readonly url: string

  public constructor(
    accessToken: string,
    private readonly mercadoPago: MercadoPagoAPI
  ) {
    this.url = `https://api.mercadopago.com/checkout/preferences?access_token=${accessToken}`
    this.mercadoPago.configure({
      sandbox: true,
      access_token: accessToken
    })
    this.mercadoPago.configurations.setAccessToken(accessToken)
  }

  public async listCustomer(email: string) {
    return await this.mercadoPago.customers.search({
      email
    })
  }
  public async createCustomer(customer: Customer) {
    return await this.mercadoPago.customers.create(customer)
  }

  public async createPixPayment(customerEmail: string) {
    const paymentData: Payment = {
      transaction_amount: 1,
      description: 'Donation a some ONG',
      payment_method_id: 'pix',
      payer: {
        email: customerEmail,
        first_name: 'hallex',
        last_name: 'costa',
        identification: {
          type: 'CPF',
          number: '19119119100'
        },
        address: {
          zip_code: '06233200',
          street_name: 'Av. das Nações Unidas',
          street_number: '3003',
          neighborhood: 'Bonfim',
          city: 'Araçatuba',
          federal_unit: 'SP'
        }
      }
    }

    const result = await this.mercadoPago.payment.create(paymentData)
    console.log(result)
    return result
  }
}
