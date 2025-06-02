const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function loadCensos(Props: { id: number }) {
  const { id } = Props;

  // Modifica la URL para incluir sort[0]=orden:asc
  const res = await fetch(
    `${BASE_URL}api/censos?populate=*&filters[id_categoria]=${id}&sort[0]=orden:desc`
  );

  if (!res.ok) {
    throw new Error(`Error al obtener los datos: ${res.statusText}`);
  }

  const data = await res.json();

  return data; // Retorna los datos ordenados
}
