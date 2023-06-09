import express from 'express';
import homController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/about', homController.getAboutPage);
    router.get('/crud', homController.getCRUD);

    router.post('/post-crud', homController.postCRUD);
    router.get('/get-crud', homController.displayGetCRUD);
    router.get('/edit-crud', homController.getEditCRUD);

    router.post('/put-crud', homController.putCRUD);
    router.get('/delete-crud', homController.deleteCRUD);

    router.get('/', homController.getHomePage);
    return app.use('/', router);
};

module.exports = initWebRoutes;
