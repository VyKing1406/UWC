const accountData = require('./Account.json');
const employeeData = require('./Employee.json');
const MCP = require('./MCP.json');
// Something more

module.exports = () => ({
    accountData: accountData,
    employeeData: employeeData,
    MCP: MCP,
    // Something more
});
