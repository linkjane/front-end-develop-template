function change2Async(func, params) {
    let args = params || {};
    return new Promise((resolve, reject) => {

        let composeOjbect = {
            ...args,
            onSuccess: result => {
                resolve(result);
            },
            onFail: result => {
                reject(result);
            }
        };
        func(composeOjbect);

    });
}

export { change2Async };