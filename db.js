const users  = require('./users.json');
const providers  = require('./providers.json');
// const services  = require('./services.json');
const requests  = require('./requests.json');
const contracts  = require('./contracts.json');
const reviews  = require('./reviews.json');
const comments  = require('./comments.json');
const contract_statuses  = require('./contract_statuses.json');

module.exports = function() {

    return {
        users  : users,
        providers  : providers,
        // services  : services,
        requests  : requests,
        contracts  : contracts,
        reviews  : reviews,
        comments  : comments,
        contract_statuses  : contract_statuses,
    }
}