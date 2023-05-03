function SecondComponent (){
    const handleCick = () => {console.log("Teste")}
    return (
        <div className = "SecondComponent">
            <p>Segundo Componente</p>
            <button onClick={handleCick}>Clique Teste</button>
            <hr />
            <button onClick={() => {console.log("Olá,Mundo")}}>Clique Aqui</button>
        </div>
    )
}

export default SecondComponent