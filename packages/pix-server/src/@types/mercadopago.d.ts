/// <reference types="mercadopago" />
import mercadopago from 'mercadopago'

declare module 'mercadopago' {
  export type Item = {
    title: string
    quantity: number
    currency_id: string
    unit_price: number
  }

  export type Customer = {
    email: string,
    first_name: string,
    last_name: string,
    phone: {
      area_code: string,
      number: string
    },
    identification: Identification,
    default_address: string,
    address: {
      id: string,
      zip_code: string,
      street_name: string,
      street_number: number
    },
    date_registered: Date,
    description: string,
    default_card: string
  }

  export type Preference = {
    items: Item[]
  }
  export type Configure = {
    sandbox: boolean
    access_token: string
  }
  export type Identification = {
    type: string
    number: string
  }
  export type Address = {
    zip_code: string,
    street_name: string
    street_number: string
    neighborhood: string
    city: string
    federal_unit: string
  }
  export type Payer = {
    email: string
    first_name: string
    last_name: string
    identification: Identification
    address: Address
  }
  export type Payment = {
    transaction_amount: number,
    description: string
    payment_method_id: 'pix' | 'credit' | 'debit'
    payer: Payer
  }
  export interface MercadoPagoPreferencesAPI {
    create(preference: Preference): void
  }
  export interface MercadoPagoCustomersAPI {
    create(customer: Customer): Promise<void>
    search(email: string): Promise<Customer>
  }
  export interface MercadoPagoConfigurationsAPI {
    setAccessToken(accessToken: string): void
  }
  export interface MercadoPagoPaymentAPI {
    create(payment: Payment): Promise<void>
  }
  export interface MercadoPagoAPI {
    preferences: MercadoPagoPreferencesAPI
    payment: MercadoPagoPaymentAPI
    customers: MercadoPagoCustomersAPI
    configurations: MercadoPagoConfigurationsAPI

    configure(configure: Configure): void
  }

  export default class {
    constructor() { return mercadopago }
  }
}
