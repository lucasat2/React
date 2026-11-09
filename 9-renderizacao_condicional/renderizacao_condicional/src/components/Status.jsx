function Status({ online }) {
    if (online) {
        return <p>🟢 Usuário online</p>;
    }

    return <p>🔴 Usuário offline</p>;
}

export default Status;