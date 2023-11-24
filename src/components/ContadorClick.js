import { useState } from "react";   

const ContadorClick = () => {
    const [contador, setContador] = useState(10);
    const [cor, setCor] = useState("cor-rosa");

    const contar = () => {
        setContador(contador + 1);
    }

    const definirCor = () => {
        contar();
        const novaCor = (contador % 2 === 0) ? "cor-rosa" : "cor-azul";
        setCor(novaCor);
    }

    return(
        <section>
            <h2 classname={cor}>Meu valor atual é: {contador}</h2>
            <button onClick={definirCor}>Clique aqui para somar 1!</button>
        </section>
        
    );

}

export default ContadorClick;