import GetConnection from "../config/connection";
import { Proveedor } from "../models/proveedor";

export const Listar = async (): Promise<Proveedor[]> => {
    try {
        let tsql = "SELECT * FROM Proveedor";
        const pool = await GetConnection();
        let rs = await pool.query<Proveedor>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Agregar = async (proveedor: Proveedor): Promise<boolean> => {
    try {
        let tsql = `INSERT INTO Proveedor(FechaVenta, Telefono, TotalVenta, Direccion) VALUES('${proveedor.fechaVenta.toISOString()}', ${proveedor.telefono}, ${proveedor.totalVenta}, '${proveedor.direccion}')`;
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
        let tsql = `DELETE FROM Proveedor WHERE IdProveedor=${id}`;
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

export const Editar = async (proveedor: Proveedor, id: number): Promise<boolean> => {
    try {
        let tsql = `UPDATE Proveedor SET FechaVenta='${proveedor.fechaVenta.toISOString()}', Telefono=${proveedor.telefono}, TotalVenta=${proveedor.totalVenta}, Direccion='${proveedor.direccion}' WHERE IdProveedor=${id}`;
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
