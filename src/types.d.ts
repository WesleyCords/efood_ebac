declare type MenuItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

declare type ProductItem = {
  id: number
  price: number
}

declare type Checkout = {
  products: ProductItem[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      complement: string
      number: number
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}
