// Criado uma interface chamada IVenda que recebe o tipo de dado que será retornado da API.
interface ISale {
  id: number;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  parcelas: number | null;
  data: string;
}

// Criado um type chamado ISaleWithoutDate que recebe o tipo de dado que será retornado da API, porém sem a data. O omit é usado para omitir(remover) um tipo de dado.
type ISaleWithoutDate = Omit<ISale, "data">;
