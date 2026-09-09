const express = require('express');
const app = express();
const PUERTO_SERVER = 3001;

app.use(express.json());

const TABLA_IMPUESTOS = {
    "elsalvador": { pais: "El Salvador", tasaIva: 0.13, tasaRenta: 0.10 },
    "guatemala":  { pais: "Guatemala",   tasaIva: 0.12, tasaRenta: 0.05 },
    "costarica":  { pais: "Costa Rica",  tasaIva: 0.13, tasaRenta: 0.15 },
    "honduras":   { pais: "Honduras",    tasaIva: 0.15, tasaRenta: 0.10 },
    "panama":     { pais: "Panamá",      tasaIva: 0.07, tasaRenta: 0.15 },
    "nicaragua":  { pais: "Nicaragua",   tasaIva: 0.15, tasaRenta: 0.10 }
};

function depurarNombrePais(cadena) {
    if (typeof cadena !== 'string') return '';
    return cadena
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '');
}

function generarDesgloseFiscal(montoBase, configuracion) {
    const deduccionIva = Number((montoBase * configuracion.tasaIva).toFixed(2));
    const deduccionRenta = Number((montoBase * configuracion.tasaRenta).toFixed(2));
    const ingresoNeto = Number((montoBase - deduccionIva - deduccionRenta).toFixed(2));

    return {
        region: configuracion.pais,
        montoBruto: montoBase,
        porcentajeIvaAplicado: `${Math.round(configuracion.tasaIva * 100)}%`,
        porcentajeRentaAplicado: `${Math.round(configuracion.tasaRenta * 100)}%`,
        montoIva: deduccionIva,
        montoRenta: deduccionRenta,
        ingresoNetoFinal: ingresoNeto
    };
}

app.post('/api/impuestos', (req, res) => {
    try {
        const { pais, salario } = req.body;

        if (salario === undefined || salario === null || salario === "") {
            return res.status(400).json({ error: "El campo 'salario' es requerido." });
        }

        const montoNumerico = Number(salario);
        if (isNaN(montoNumerico) || montoNumerico <= 0) {
            return res.status(400).json({ error: "El monto ingresado debe ser mayor a cero." });
        }

        if (!pais) {
            return res.status(400).json({ error: "El campo 'pais' es requerido." });
        }

        const identificador = depurarNombrePais(pais);
        const datosTasa = TABLA_IMPUESTOS[identificador];

        if (!datosTasa) {
            return res.status(400).json({
                error: `La región '${pais}' no forma parte de la lista disponible.`,
                regionesAdmitidas: ["El Salvador", "Guatemala", "Costa Rica", "Honduras", "Panamá", "Nicaragua"]
            });
        }

        const reporte = generarDesgloseFiscal(montoNumerico, datosTasa);
        return res.status(200).json(reporte);

    } catch (err) {
        return res.status(500).json({
            error: "Excepción interna durante el cálculo de retenciones.",
            mensajeTecnico: err.message
        });
    }
});

app.listen(PUERTO_SERVER, () => {
    console.log(`Aplicación iniciada correctamente en http://localhost:${PUERTO_SERVER}`);
});