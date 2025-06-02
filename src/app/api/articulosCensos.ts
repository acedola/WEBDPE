const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function loadArticulosCensos(Props: { cat_nombre: string }) {
  const { cat_nombre } = Props;
  console.log(`el nombre de la categoria es ${cat_nombre}`);
  const res = await fetch(
    
    `${BASE_URL}api/articulo-censos?filters[cat_nombre][cat_nombre][$eq]=${cat_nombre}&populate=*`
  );
  const data = await res.json();
  return data;
}
