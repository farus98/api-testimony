"use strict";
module.exports = function makeExpressCallabck(controller, camelcaseKeys, sendToSlack, ErrorHandler) {
    return (req, res) => {
        const httpRequest = {
            body: camelcaseKeys(req.body, { deep: true }),
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: {
                'Content-Type': req.get('Content-Type'),
                Referer: req.get('referer'),
                'User-Agent': req.get('User-Agent')
            }
        };
        controller(httpRequest, sendToSlack, ErrorHandler)
            .then(httpResponse => {
            if (httpResponse.headers) {
                res.set(httpResponse.headers);
            }
            res.type('json');
            res.status(httpResponse.statusCode).send(httpResponse.body);
        })
            .catch(e => {
            sendToSlack.alert({
                text: `An unkown error occurred Payment Entity => ${controller}`,
            });
            res.status(500).send({ error: 'An unkown error occurred.' });
        });
    };
};
