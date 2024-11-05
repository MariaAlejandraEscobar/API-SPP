// src/dao/compra.dao.ts

import GetConnection from "../config/connection";
import { Compra } from "../models/compra";

export const listar = async (): Promise<Compra[]> => {
    try {
        const tsql = "SELECT * FROM Compra";
        const pool = await GetConnection();
        const rs = await pool.query<Compra>(tsql);
        return rs ? rs.recordset : [];
    } catch (error) {
        throw error;
    }
}

export const agregar = async (compra: Compra): Promise<boolean> => {
    try {
        const fecha = typeof compra.fecha === 'string' ? new Date(compra.fecha).toISOString() : compra.fecha.toISOString();
        const tsql = `INSERT INTO Compra(idUsuario, fecha) VALUES (${compra.idUsuario}, '${fecha}')`;
        const pool = await GetConnection();
        const rs = await pool.query(tsql);
        return rs.rowsAffected.length === 1;
    } catch (error) {
        throw error;
    }
}

export const eliminar = async (id: number): Promise<boolean> => {
    try {
        const tsql = `DELETE FROM Compra WHERE idCompra = ${id}`;
        const pool = await GetConnection();
        const rs = await pool.query(tsql);
        return rs.rowsAffected.length === 1;
    } catch (error) {
        throw error;
    }
}

export const editar = async (compra: Compra, id: number): Promise<boolean> => {
    try {
        const fecha = typeof compra.fecha === 'string' ? new Date(compra.fecha).toISOString() : compra.fecha.toISOString();
        const tsql = `UPDATE Compra SET idUsuario = ${compra.idUsuario}, fecha = '${fecha}' WHERE idCompra = ${id}`;
        const pool = await GetConnection();
        const rs = await pool.query(tsql);
        return rs.rowsAffected.length === 1;
    } catch (error) {
        throw error;
    }
}
