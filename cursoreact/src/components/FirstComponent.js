import SecondComponent from "./SecondComponent";
function FirstComponent() {

  const name = "Isac";

    return (
      <div className = "FirstComponent">
        <p>Primeiro Componente</p>
        {2+2}
        <p>Nome: {name}</p>
        <SecondComponent/>;
      </div>
      )
    
    
  }
  export default FirstComponent;
  