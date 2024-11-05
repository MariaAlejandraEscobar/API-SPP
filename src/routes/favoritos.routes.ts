import express from 'express';
import * as favoritoController from '../controllers/favoritos.controller';

const router = express.Router();


router.get('/', (req, res) => {
    favoritoController.listarFavoritos()
        .then((data) => res.json(data))
        .catch((error) => {
            console.error(error);
            res.status(500).send();
        });
});


router.post('/add', (req, res) => {
    favoritoController.crearFavorito(req.body)
        .then((result) => result ? res.status(201).send() : res.status(500).send())
        .catch((error) => {
            console.error(error);
            res.status(500).send();
        });
});


router.delete('/:id', (req, res) => {
    favoritoController.eliminarFavorito(req.params.id)
        .then((result) => result ? res.status(202).send() : res.status(500).send())
        .catch((error) => {
            console.error(error);
            res.status(500).send();
        });
});


router.put('/:id', (req, res) => {
    if (req.params.id !== req.body.idFavorito.toString()) {
        res.status(400).send("ID in URL and body do not match");
    } else {
        favoritoController.actualizarFavorito(req.body, req.params.id)
            .then((result) => result ? res.status(202).send() : res.status(500).send())
            .catch((error) => {
                console.error(error);
                res.status(500).send();
            });
    }
});

export default router;
