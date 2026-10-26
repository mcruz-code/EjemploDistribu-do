import { useState, useEffect } from 'react';
import { pedirJSON } from '../../lib/api';
import TarjetaTaller from '../../components/TarjetaTaller';
import estilos from '../../styles/Talleres.module.css';

export default function Talleres() {
  const [talleres, setTalleres] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [busqueda, setBusqueda] = useState(''); // <-- Tu estado del Paso 7

  useEffect(() => {
    cargarTalleres();
  }, []);

  async function cargarTalleres() {
    try {
      setTalleres(await pedirJSON('/talleres'));
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  // Tu filtro del Paso 7 (filtra por nombre o instructor en tiempo real)
  const texto = busqueda.trim().toLowerCase();
  const visibles = talleres.filter((t) =>
    `${t.nombre} ${t.instructor || ''}`.toLowerCase().includes(texto)
  );

  return (
    <main>
      <h1>Talleres</h1>

      {/* Tu input del buscador (Paso 7) */}
      <input
        type="text"
        placeholder="Buscar por nombre o instructor"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className={estilos.buscador}
      />

      {cargando && <p>Cargando talleres…</p>}
      {error && <p className="error">{error}</p>}

      {!cargando && !error && talleres.length === 0 && (
        <p>No hay talleres registrados.</p>
      )}

      {!cargando && !error && talleres.length > 0 && visibles.length === 0 && (
        <p>No hay talleres que coincidan con la búsqueda.</p>
      )}

      <div className={estilos.rejilla}>
        {visibles.map((t) => (
          <TarjetaTaller key={t.id} taller={t} />
        ))}
      </div>
    </main>
  );
}