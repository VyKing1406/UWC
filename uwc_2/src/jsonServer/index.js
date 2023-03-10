const accountData = require('./Account.json');
const employeeData = require('./Employee.json');
const MCP = require('./MCP.json');
const vehicle = require('./Vehicle.json');
// Something more

module.exports = () => ({
    accountData: accountData,
    employeeData: employeeData,
    MCP: MCP,
    vehicle: vehicle,
    // Something more
});
