import React from "react";

// Criado um componente chamado Checkbox que recebe uma propriedade label do tipo string
const Checkbox = ({ label }: { label: string }) => {
  const [value, setValue] = React.useState(false); // Cria um estado chamado value e uma função para alterar o estado chamada setValue. O valor inicial do estado é false.

  //* > EventHandler.
  /*
    - É possível definir o elemento em que o EventHandler será usado. Assim o currentTarget será definido corretamente.
  */

  // Criado uma função chamada handleChange que recebe um evento do tipo ChangeEvent, na função genérica do ChangeEvent é passado o tipo do elemento que disparou o evento, no caso o input, e o tipo do evento, no caso o ChangeEvent.
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.checked); // Altera o estado value, acessando o evento e pegando o elemento que disparou o evento, no caso o input, e acessando a propriedade checked que retorna true ou false.
  };

  return (
    <>
      <label
        style={{
          padding: "1rem",
          // Se o valor do estado value for true, a borda do label será verde, caso contrário será laranja.
          border: value ? "2px solid #8D2" : "2px solid #F70",
        }}
      >
        <input
          type="checkbox"
          // O atributo checked é responsável por marcar ou não o checkbox, ele recebe o valor do estado value.
          checked={value}
          // O onChange é responsável por executar uma função quando o valor do input é alterado, nesse caso, quando o checkbox é marcado ou desmarcado.
          onChange={handleChange}
        />
        {label}
      </label>
      {/* O TypeScript infere o tipo do evento quando a função é passada diretamente no onChange, mas quando a função é passada por uma variável, é necessário informar o tipo do evento. */}
      <label
        style={{
          padding: "1rem",
          // Se o valor do estado value for true, a borda do label será verde, caso contrário será laranja.
          border: value ? "2px solid #8D2" : "2px solid #F70",
        }}
      >
        <input
          type="checkbox"
          // O atributo checked é responsável por marcar ou não o checkbox, ele recebe o valor do estado value.
          checked={value}
          //* > Função anônima.
          /*
            - Se definirmos uma função anônima diretamente no evento, o TypeScript conseguirá inferir o tipo de evento e o elemento do mesmo.
          */

          // A cada mudança no input executa a função onChange, que desestrutura o evento e pega o elemento que disparou o evento(currentTarget), no caso o input, e atualiza o estado value com o valor do atributo checked do input.
          onChange={({ currentTarget }) => setValue(currentTarget.checked)}
        />
        {label}
      </label>
    </>
  );
};

export default Checkbox;
