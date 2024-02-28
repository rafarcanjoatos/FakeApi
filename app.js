const express = require('express');
const app = express();

// Porta onde a API irá escutar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// CostCenters
// Read fake api file and define route
const costCenters = require('./api/ctb/v1/costcenters.json');
app.get('/api/ctb/v1/costcenters', (req, res) => {
    res.json(costCenters);
});

// EsocialBranches
// Read fake api file and define route
const eSocialBranches = require('./api/rh/esocial/v1/EsocialBranches.json');
app.get('/api/rh/esocial/v1/EsocialBranches', (req, res) => {
    res.json(eSocialBranches);
});


// EmployeeDataContent
// Read fake api file and define route
const employeeDataContent = require('./api/rh/v1/employeeDataContent.json');
app.get('/api/rh/v1/employeeDataContent', (req, res) => {
    res.json(employeeDataContent);
});


/*
// Movements
// Read fake api file and define route
const movements = require('./api/mov/v1/movements.json');
app.get('/api/mov/v1/movements', (req, res) => {
    res.json(movements);
});*/
