import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { loadMenu } from '@/app/api/menu';
import { loadCenso } from '@/app/api/menu';
import { useCatNombre } from '@/context/CatNombreContext';
import parse from 'html-react-parser';

interface Estadistica {
  id: number;
  nombre: string;
  cid_cat: {
    id: number;
    cat_nombre: string;
  }[];
}
interface Censos {
  id: number;
  nombre: string;
  cid_cat: {
    id: number;
    cat_nombre: string;
  }[];
}

// Objeto de mapeo de categori­as a URLs
const categoriasUrls = {
  25: 'https://mapas.estadistica.ec.gba.gov.ar/portal/apps/sites/#/mapas-estadisticos/pages/descargas-shapes',
  26: 'https://cartografiacensal-2022.estadistica.ec.gba.gov.ar/',
  27: 'https://mapas.estadistica.ec.gba.gov.ar/portal/apps/sites/#/mapas-estadisticos/pages/visualizadores',
  31: 'https://mapas.estadistica.ec.gba.gov.ar/portal/apps/sites/#/mapas-estadisticos/pages/geoservicios'
};

export const Main_Menu = () => {
  const [lists, setLists] = useState<Estadistica[]>([]);
  const [censosList, setCensosList] = useState<Censos[]>([]);
  const [activeMenu, setActiveMenu] = useState<
    'estadisticas' | 'censos' | null
  >(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const { setCatNombre } = useCatNombre();

  const cambiarEstilo = (menu: 'estadisticas' | 'censos') => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    async function fetchMenu() {
      const data = await loadMenu();
      console.log(data);
      setLists(data.result[0].obtener_estadisticas_con_categorias);
    }

    fetchMenu();
  }, []);

  useEffect(() => {
    async function fetchMenuC() {
      const dataC = await loadCenso();
      console.log(dataC);
      setCensosList(dataC.result[0].obtener_censos_con_categorias);
    }

    fetchMenuC();
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleCategoryClick(cat_nombre: string, id: number) {
    setCatNombre(cat_nombre); // Asumiendo que esta funcion se usa para actualizar el contexto
    setActiveMenu(null);
  }

  function obtenerUrlCategoria(id: number) {
    if (id === 35 || id === 36 || id === 37) {
      return `/censos/${id}`;
    }
    return categoriasUrls[id] || `/estadisticas/${id}`;
  }

  return (
    <>
      <nav className="bottom-nav">
        <ul>
          <li
            className="estadistica"
            onClick={() => cambiarEstilo('estadisticas')}
          >
            <Link href="">ESTADISTICAS</Link>
          </li>
          <li>
            <Link
              href="https://datos.estadistica.ec.gba.gov.ar/"
              target="blank"
            >
              DATOS ABIERTOS
            </Link>
          </li>
          <li>
            <Link
              href="https://mapas.estadistica.ec.gba.gov.ar/portal/apps/sites/#/mapas-estadisticos"
              target="blank"
            >
              PORTAL DE MAPAS
            </Link>
          </li>
          <li className="estadistica" onClick={() => cambiarEstilo('censos')}>
            <Link href="">CENSOS</Link>
          </li>
        </ul>
      </nav>

           {/* Lista de Estadisticas */}
      {activeMenu === 'estadisticas' && (
        <nav
          className=" flex flex-row nav-container position1"
          ref={menuRef}
          style={{ zIndex: 1000, opacity: 1, width: '90%' }}
        >
          <div className="flex flex-row w-full estilo">
            {lists &&
              lists.map((estadistica: Estadistica) => (
                <ul key={estadistica.id} className="dropdown">
                  <li>
                    <p>{estadistica.nombre}</p>
                    <ul className="dropdown">
                      {estadistica.cid_cat
                        .slice() // Clona el array para evitar modificar el original
                        .sort((a, b) =>
                          a.cat_nombre.localeCompare(b.cat_nombre)
                        ) // Ordena por cat_nombre
                        .map((categoria) => (
                          <li key={categoria.id}>
                            <Link
                              href={obtenerUrlCategoria(categoria.id)}
                              onClick={() =>
                                handleCategoryClick(
                                  categoria.cat_nombre,
                                  categoria.id
                                )
                              }
                              {...(categoria.id === 25 ||
                              categoria.id === 26 ||
                              categoria.id === 27 ||
                              categoria.id === 31
                                ? { target: '_blank' }
                                : {})}
                            >
                              {categoria.cat_nombre}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                </ul>
              ))}
          </div>
        </nav>
      )}

      {/* Lista de Censos */}
      {activeMenu === 'censos' && (
        <nav
          className="nav-container position2"
          ref={menuRef}
          style={{ zIndex: 1000, opacity: 1, width: '90%' }}
        >
          <div className="w-full estilo2">
            {censosList &&
              censosList.map((censos: Censos) => (
                <ul key={censos.id} className="dropdown">
                  <li>
                    <p>{censos.nombre}</p>
                    <ul className="dropdown">
                      {censos.cid_cat.map((categoria) => (
                        <li key={categoria.id}>
                          <Link
                            href={obtenerUrlCategoria(categoria.id)}
                            onClick={() =>
                              handleCategoryClick(
                                categoria.cat_nombre,
                                categoria.id
                              )
                            }
                          >
                            {categoria.cat_nombre}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              ))}
          </div>
        </nav>
      )}
    </>
  );
};
