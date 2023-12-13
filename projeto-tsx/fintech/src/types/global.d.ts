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