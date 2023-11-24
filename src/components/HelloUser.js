function HelloUser(props) {
    return (
        <div className="HelloUser">
            <h1>Olá, {props.nome}</h1>
            <p>Seja muito bem vindo ao projeto React com props</p>
        </div>
    );
}

export default HelloUser;
