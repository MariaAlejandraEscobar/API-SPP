import GetConnection from "../config/connection";
import { Favorito } from "../models/favoritos";

export const Listar = async (): Promise<Favorito[]> => {
    try {
        let tsql = "SELECT * FROM Favoritos";
        const pool = await GetConnection();
        let rs = await pool.query<Favorito>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Agregar = async (favorito: Favorito): Promise<boolean> => {
    try {
        let tsql = `INSERT INTO Favoritos(IdUsuario, IdProducto) VALUES(${favorito.idUsuario}, ${favorito.idProducto})`;
        const pool = await GetConnection();
        let rs = await pool.query(tsql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

export const Eliminar = async (id: number): Promise<boolean> => {
    try {
        let tsql = `DELETE FROM Favoritos WHERE IdFavorito=${id}`;
        const pool = await GetConnection();
        let rs = await pool.query(tsql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

export const Editar = async (fv: Favorito, id: number): Promise<boolean> => {
    try {
        let tsql = `UPDATE Favoritos SET IdUsuario=${fv.idUsuario}, IdProducto=${fv.idProducto} WHERE IdFavorito=${id}`;
        const pool = await GetConnection();
        let rs = await pool.query(tsql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

