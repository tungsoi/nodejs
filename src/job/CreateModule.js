const fs = require('fs');
const path = require('path');

class CreateModule {
    async handle(req) {
        const key = req.key; // Test
        const route = req.route; // /api/test
        const table = req.table; // tests
        const tableName = req.tableName; // TEST
        this.addCommonRoute(tableName, route);
        this.addCommonTable(tableName, table);
        this.addModelImportLine(key);
        this.addApplication(key, tableName);
        this.createController(key);
        this.createManager(key);
        this.createModel(key, tableName);
        this.createRepository(key);
        this.createRoute(key, tableName);
        this.createService(key);
        this.createValidator(key);
    }

    addCommonRoute(key, value) {
        const routesFilePath = path.join(__dirname, '../common/Routes.js');
        let fileContent = fs.readFileSync(routesFilePath, 'utf-8');
        const insertIndex = fileContent.indexOf('const ROUTES = {') + 'const ROUTES = {'.length;
        const newRouteLine = `\n    ${key}: '${value}',`;
        fileContent = fileContent.slice(0, insertIndex) + newRouteLine + fileContent.slice(insertIndex);
        fs.writeFileSync(routesFilePath, fileContent);
    }

    addCommonTable(key, value) {
        const routesFilePath = path.join(__dirname, '../common/Tables.js');
        let fileContent = fs.readFileSync(routesFilePath, 'utf-8');
        const insertIndex = fileContent.indexOf('const TABLES = {') + 'const TABLES = {'.length;
        const newRouteLine = `\n    ${key}: '${value}',`;
        fileContent = fileContent.slice(0, insertIndex) + newRouteLine + fileContent.slice(insertIndex);
        fs.writeFileSync(routesFilePath, fileContent);
    }

    createController(key) {
        const className = `${key}Controller`;
        const managerName = `${key}Manager`;
        const destPath = path.join(__dirname, `../controller/${className}.js`);
        const templatePath = path.join(__dirname, '../templates', 'ExampleController.js');
        let content = fs.readFileSync(templatePath, 'utf8');
        content = content
            .replace(/ExampleManager/g, managerName)
            .replace(/ExampleController/g, className);
        fs.writeFileSync(destPath, content);
    }

    createManager(key) {
        const className = `${key}Manager`;
        const managerName = `${key}Service`;
        const destPath = path.join(__dirname, `../manager/${className}.js`);
        const templatePath = path.join(__dirname, '../templates', 'ExampleManager.js');
        let content = fs.readFileSync(templatePath, 'utf8');
        content = content
            .replace(/ExampleService/g, managerName)
            .replace(/ExampleManager/g, className);
        fs.writeFileSync(destPath, content);
    }

    createModel(key, tableName) {
        const className = `${key}Model`;
        const destPath = path.join(__dirname, `../models/${className}.js`);
        const templatePath = path.join(__dirname, '../templates', 'ExampleModel.js');
        let content = fs.readFileSync(templatePath, 'utf8');
        content = content
            .replace(/TABLE_NAME/g, tableName);
        fs.writeFileSync(destPath, content);
    }

    createRepository(key) {
        const className = `${key}Repository`;
        const destPath = path.join(__dirname, `../repository/${className}.js`);
        const templatePath = path.join(__dirname, '../templates', 'ExampleRepository.js');
        let content = fs.readFileSync(templatePath, 'utf8');
        content = content
            .replace(/ExampleRepository/g, className)
            .replace(/Example/g, key);
        fs.writeFileSync(destPath, content);
    }

    createRoute(key, tableName) {
        const className = `${key}Route`;
        const controllerName = `${key}Controller`;
        const destPath = path.join(__dirname, `../routes/${className}.js`);
        const templatePath = path.join(__dirname, '../templates', 'ExampleRoute.js');
        let content = fs.readFileSync(templatePath, 'utf8');
        content = content
            .replace(/ExampleController/g, controllerName)
            .replace(/ROUTE_NAME/g, tableName);
        fs.writeFileSync(destPath, content);
    }

    createService(key) {
        const className = `${key}Service`;
        const repoName = `${key}Repository`;
        const validatorName = `${key}Validator`;
        const destPath = path.join(__dirname, `../service/${className}.js`);
        const templatePath = path.join(__dirname, '../templates', 'ExampleService.js');
        let content = fs.readFileSync(templatePath, 'utf8');
        content = content
            .replace(/ExampleRepository/g, repoName)
            .replace(/ExampleService/g, className)
            .replace(/ExampleValidator/g, validatorName);
        fs.writeFileSync(destPath, content);
    }

    createValidator(key) {
        const className = `${key}Validator`;
        const destPath = path.join(__dirname, `../validator/${className}.js`);
        const templatePath = path.join(__dirname, '../templates', 'ExampleValidator.js');
        let content = fs.readFileSync(templatePath, 'utf8');
        content = content
            .replace(/ExampleValidator/g, className);
        fs.writeFileSync(destPath, content);
    }

    addModelImportLine(modelName) {
        const filePath = path.join(__dirname, '../client/database/PostgreSql.js');
        let content = fs.readFileSync(filePath, 'utf-8');
        const importLine = `const ${modelName} = require('../../models/${modelName}Model')(sequelize, DataTypes);`;
        const exportIndex = content.indexOf('module.exports');

        const newContent =
            content.slice(0, exportIndex) +
            `${importLine}\n` +
            content.slice(exportIndex);

        const exportLineRegex = /module\.exports\s*=\s*{([^}]*)}/;
        const match = newContent.match(exportLineRegex);
        if (match && !match[1].includes(modelName)) {
            const updatedExports = match[0].replace('}', `, ${modelName} }`);
            const finalContent = newContent.replace(exportLineRegex, updatedExports);
            fs.writeFileSync(filePath, finalContent);
        } else {
            fs.writeFileSync(filePath, newContent);
        }
    }

    addApplication(key) {
        const lowerKey = key.toLowerCase();
        const upperKey = key.toUpperCase();
        const routeVar = `${lowerKey}Routes`;
        const routePath = `./src/routes/${key}Route`;
        const appPath = path.join(__dirname, '../../app.js');
        let content = fs.readFileSync(appPath, 'utf-8');
        const requireLine = `const ${routeVar} = require('${routePath}')(routeList);`;
        if (!content.includes(requireLine)) {
            const afterLine = `const categoryRoutes = require('./src/routes/CategoryRoute')(routeList);`;
            content = content.replace(afterLine, `${afterLine}\n\nconst ${routeVar} = require('${routePath}')(routeList);`);
        }
        const appUseLine = `app.use(ROUTES.${upperKey}, ${routeVar});`;
        if (!content.includes(appUseLine)) {
            const afterAppUse = `app.use(ROUTES.CATEGORY, categoryRoutes);`;
            content = content.replace(afterAppUse, `${afterAppUse}\napp.use(ROUTES.${upperKey}, ${routeVar});`);
        }
        fs.writeFileSync(appPath, content, 'utf-8');
        console.log(`✅ Successfully added ${routeVar} to app.js`);
    }
}

module.exports = CreateModule;