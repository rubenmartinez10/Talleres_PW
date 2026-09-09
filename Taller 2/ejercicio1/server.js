const express = require('express');
const app = express();
const PORT = 3000;

function calcularIVA(salario) {
  return salario * 0.13;
}

function calcularRenta(salario) {
    if (salario <= 550.00){
        return 0;
    } else if (salario <= 895.24) {
        return (salario - 550.00) * 0.10 + 17.67;
    } else if (salario <= 2038.10) {
        return (salario - 895.24) * 0.20 + 60.00;
    } else {
        return (salario - 2038.10) * 0.30 + 288.57;
    }
}

app.get('/api/calculo/:monto', (req, res) => {
  const { monto } = req.params;
  const salario = Number(monto);

  if (monto.trim() === '' || isNaN(salario) || salario === 0 || salario < 0) {
    return res.status(400).json({ error: 'El salario debe ser un número mayor a cero' });
  }

  const iva = calcularIVA(salario);
  const renta = calcularRenta(salario);

  res.json({
    monto: salario,
    iva: Number(iva.toFixed(2)),
    renta: Number(renta.toFixed(2))
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});