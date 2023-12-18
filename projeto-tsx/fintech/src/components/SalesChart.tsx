import {
  LineChart,
  XAxis,
  Tooltip,
  Line,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Criado uma interface chamada ISale que contém as propriedades da API que serão usadas no gráfico.
interface SaleDay {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

// Criado uma função chamada transformData que recebe como parâmetro uma array de objetos do tipo ISale e retorna uma array de objetos do tipo SaleDay, a função é responsável por transformar os dados da API para os dados que serão mostrados no gráfico.
function transformData(data: ISale[]): SaleDay[] {
  // O método reduce está passando por todos os itens da array data e está definindo o parâmetro acc como um objeto que contém uma prpopriedade key que é uma string do tipo SaleDay, e o parâmetro item como um objeto do tipo ISale. O valor inicial do objeto acc é um objeto vazio.
  const days = data.reduce((acc: { [key: string]: SaleDay }, item) => {
    const day = item.data.split(" ")[0]; // Acessa a propriedade data do objeto item e divide a string quando encontrar um espaço, e pegando apenas o primeiro item do array.

    // Se o objeto acc não tiver a propriedade day, então executa o if.
    if (!acc[day]) {
      // Cria uma propriedade day inicial no objeto acc e atribui um objeto com as propriedades data, pago, processando e falha.
      acc[day] = {
        data: day,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }

    acc[day][item.status] += item.preco; // Acessa o day do objeto acc(item anterior) e a propriedade status do objeto item(item atual) e soma o valor da propriedade preco do objeto item(item atual).

    return acc; // Retorna o objeto acc transformado.
  }, {});

  // Retorna uma array com os valores do resultado/retorno da transformação do objeto days o map está passando por todos os itens do objeto days e retornando um objeto com todas as propriedades do objeto day e a propriedade data com o valor da propriedade data do objeto day com os 5 primeiros caracteres.
  return Object.values(days).map((day) => ({
    ...day, // Retorna todas as propriedades do objeto day.
    data: day.data.substring(5), // Retorna os 5 primeiros caracteres da propriedade data do objeto day.
  }));
}

// Criado um componente SalesChart que recebe como propriedade um array de objetos do tipo ISale que é uma array de objetos que tem as propriedades da API.
const SalesChart = ({ data }: { data: ISale[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      {/* O componente LineChart é responsável por criar o gráfico de linhas, recebe como propriedade o tamanho do gráfico e os dados que serão mostrados. */}
      <LineChart width={400} height={400} data={transformedData}>
        {/* O componente XAxis é responsável por mostrar os valores do eixo X do gráfico, recebe como propriedade o nome da propriedade do objeto que será mostrado. */}
        <XAxis dataKey="data" />
        {/* O componente YAxis é responsável por mostrar os valores do eixo Y do gráfico. */}
        <YAxis />
        {/* O componente Tooltip é responsável por mostrar o valor de cada ponto do gráfico. */}
        <Tooltip />
        {/* O componente Legend é responsável por mostrar a legenda do gráfico. */}
        <Legend />
        {/* O componente Line é responsável por criar as linhas do gráfico, recebe como propriedade o tipo do gráfico, o nome da propriedade do objeto que será mostrado, a cor da linha e a espessura da linha. */}
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
