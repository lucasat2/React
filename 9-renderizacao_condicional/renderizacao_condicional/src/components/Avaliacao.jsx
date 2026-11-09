function Avaliacao({ nota }) {
    let classificacao;

    if (nota >= 9) {
        classificacao = "Excelente";
    } else if (nota >= 7) {
        classificacao = "Bom";
    } else if (nota >= 5) {
        classificacao = "Regular";
    } else {
        classificacao = "Ruim";
    }

    return (
        <div>
            <p>Nota: {nota}</p>
            <p>{classificacao}</p>
        </div>
    );
}

export default Avaliacao;