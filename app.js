const express = require('express');
const app = express();

// Middleware para analisar JSON  
app.use(express.json());

// Porta onde a API irá escutar  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Movements array  
const movements = []; // Defina o array para armazenar os movimentos  

// CostCenters  
const costCenters = require('./api/ctb/v1/costcenters.json');
app.get('/api/ctb/v1/costcenters', (req, res) => {
    res.json(costCenters);
});

// EsocialBranches  
const eSocialBranches = require('./api/rh/esocial/v1/EsocialBranches.json');
app.get('/api/rh/esocial/v1/EsocialBranches', (req, res) => {
    res.json(eSocialBranches);
});

// EmployeeDataContent  
const employeeDataContent = require('./api/rh/v1/employeeDataContent.json');
app.get('/api/rh/v1/employeeDataContent', (req, res) => {
    res.json(employeeDataContent);
});

// Post CostCenters  
app.post('/api/ctb/v1/costcenters', (req, res) => {
    try {
        const newMovement = req.body;

        if (!newMovement.costCenter) {
            return res.status(400).json({ error: 'Cost Center are required.' });
        }

        movements.push(newMovement);
        res.status(201).json({ message: 'Movement added successfully', data: newMovement });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Post EsocialBranches  
app.post('/api/ctb/v1/EsocialBranches', (req, res) => {
    try {
        const newMovement = req.body;

        if (!newMovement.costCenter) {
            return res.status(400).json({ error: 'EsocialBranches are required.' });
        }

        movements.push(newMovement);
        res.status(201).json({ message: 'Movement added successfully', data: newMovement });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Post EmployeeDataContent  
app.post('/api/ctb/v1/EmployeeDataContent', (req, res) => {
    try {
        const newMovement = req.body;

        if (!newMovement.costCenter) {
            return res.status(400).json({ error: 'EmployeeDataContent are required.' });
        }

        movements.push(newMovement);
        res.status(201).json({ message: 'Movement added successfully', data: newMovement });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Tratamento de rotas não encontradas (404)  
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});