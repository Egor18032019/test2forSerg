const onLoadForm = (data) => {
    //Получение данных для отображения реализовать
    // при помощи имитации получения данных по API.
    const {
        response
    } = data;
    response.map(
        (place) =>
        place["like"] = "false"
    )
    return data;
}

export {
    onLoadForm,
}

