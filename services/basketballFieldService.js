const basketballFieldService = () => {

    const webAPIBaseURL = "https://basketball-fields.herokuapp.com/api/basketball-fields"

    const getAllBasketballFields = status => {
        const route = status === undefined ? webAPIBaseURL : `${webAPIBaseURL}?status=${status}`;
        return new Promise((res, err) => {
            request(requestRoute, (error, response, body) => {
                if (error || (response && response.statusCode !== 200)) {
                    err(500, 'Thats an error');
                } else {
                    res(JSON.parse(body));
                }
            });
        });
    }

    const getBasketballFieldById = id => {
        const route = `${webAPIBaseURL}/${id}`;
        return new Promise((res, err) => {
            if (id === "" || id === undefined || id === null) err(new BadRequest(`id is required to find a basketball field`));
            request(requestRoute, (error, response, body) => {
                if (error || response && response.statusCode !== 200 || body === null) {
                    if (response && response.statusCode === 404 || body === null) {
                        err(404(`System did not find a basketball field with id ${id}`));
                    } else {
                        err(500, 'Thats an error');
                    }
                } else res(JSON.parse(body));
            });
        });
    }

    return {
        getAllBasketballFields,
        getBasketballFieldById
    }
}

module.exports = basketballFieldService();