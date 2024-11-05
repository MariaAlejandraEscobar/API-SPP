import { Favorito } from "../models/favoritos";
import * as favoritosDao from "../dao/favoritos.dao";

export const listarFavoritos = async (): Promise<Favorito[]> => {
    try {
        let favoritos: Favorito[] = await favoritosDao.Listar();
        // BUSSINESS
        return favoritos;
    } catch (error) {
        throw error;
    }
}

export const crearFavorito = async (favorito: Favorito): Promise<boolean> => {
    try {
        return await favoritosDao.Agregar(favorito);
    } catch (error) {
        throw error;
    }
}

export const eliminarFavorito = async (id: string): Promise<boolean> => {
    try {
        let obj = parseInt(id);
        return favoritosDao.Eliminar(obj);
    } catch (error) {
        throw error;
    }
}

export const actualizarFavorito = async (favorito: Favorito, id: string): Promise<boolean> => {
    try {
        return await favoritosDao.Editar(favorito, parseInt(id));
    } catch (error) {
        throw error;
    }
}
