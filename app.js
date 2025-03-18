import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import employeeRoutes from './src/pkg/employee/route.js';
import blamesRoutes from './src/pkg/blame/route.js';
import absencesRoutes from './src/pkg/absence/route.js';
import permisRoutes from './src/pkg/permis/route.js';

import employeePermisRoutes from './src/pkg/employeePermis/route.js';
//import employeeGradeRoutes from './src/pkg/employeeGarde/route.js';


const swaggerDocument = YAML.load('./swagger.yaml');
const app = express();
const port = 3005;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/employees', employeeRoutes);
app.use('/blames', blamesRoutes);
app.use('/absences', absencesRoutes);
app.use('/permis', permisRoutes);
app.use('/employee/permis', employeePermisRoutes);
//app.use('/employee/:employeeId/grades', employeeGradeRoutes);

app.listen(port, () => {
  console.log(`EN LISTE AU PORT : ${port}`);
});
