import Link from "next/link";

export default function Institucional() {
  return (
    <>
       
        <div className="title-institucional">
        <h1>REVISTA POBLACIÓN</h1>
        <div className="container-botones">
          <Link href="/../pdf/Instrucciones.pdf" target='_blank'>Instruccion para autores</Link>
          <Link href="convocatoria">Convovatoria a autores Revista Nº6</Link>
          <Link href="revista">Revista Población Nº5</Link>
          <Link href="revistaAnteriores">Ediciones anteriores</Link>
        </div>
      </div>
      
      <section>
         

          <div className="main-info">
            <h1>Estudios de Población de la provincia de Buenos Aires N° 4</h1>
            <div className="revistaAnteriores">            
            <a className="one"   href="/../pdf/revista4.pdf" target='_blank'>
            <img src="/../images/Poblacion4.png" alt="" />
            </a>            
            <p className="two revP">
            Esta edición de la Revista: “Estudios de Población de la provincia de Buenos Aires”, presenta un informe técnico donde se trabaja la metodología oficial de estimación de la pobreza por ingreso, brindando datos para el año 2016; un segundo informe exhibe los principales resultados de la Tercer Encuesta Nacional de Factores de Riesgo que se desarrolló durante el año 2013. El tercero muestra un panorama del empleo público en base a la Encuesta Permanente de Hogares. Todos ellos son trabajos referidos a la provincia de Buenos Aires. Y, por último, se presentan datos sobre la evolución de la población por partido y entidades o barrios de los Partidos del Gran Buenos Aires, durante el período intercensal 2001-2010.

            </p>
            </div>
          </div>

          <div className="main-info">
            <h1>Estudios de Población de la provincia de Buenos Aires N° 3</h1>
            <div className="revistaAnteriores">            
            <a className="one"   href="/../pdf/revista4.pdf" target='_blank'>
            <img src="/../images/Revista_3.jpg" alt="" />
            </a>            
            <p className="two revP">
            Este número de la Revista: “Estudios de Población de la provincia de Buenos Aires”, presenta dos informes con técnicas de proyección, en el primer caso para proyectar hogares a nivel provincial y de dominios (áreas); y en el segundo, para ajustes de proyecciones de población en los municipios de la provincia. El tercero, trabaja una serie de indicadores sintéticos de las principales tasas del mercado laboral a partir de los resultados de la EPH, para los aglomerados urbanos provinciales. Como cierre a esta edición se publica la evolución de la población por partido y localidad censal. 


            </p>
            </div>
          </div>

          <div className="main-info">
            <h1>Estudios de Población de la provincia de Buenos Aires N° 2</h1>
            <div className="revistaAnteriores">            
            <a className="one"   href="/../pdf/revista4.pdf" target='_blank'>
            <img src="/../images/POBLACION_NRO2.png" alt="" />
            </a>            
            <p className="two revP">
            Este ejemplar de la Revista: “Estudios de Población de la provincia de Buenos Aires”, presenta informes técnicos de índole demográfica: el primero desarrolla la dinámica y características de los inmigrantes internacionales durante el período intercensal de 1947 a 2010. El segundo, la situación demográfica de las mujeres; y el último, estudia el envejecimiento poblacional a lo largo de los 9 Censos Nacionales de Población comprendidos entre los años 1869 y 2010. Todos ellos circunscriptos a la jurisdicción provincial.
            </p>
            </div>
          </div>

          <div className="main-info">
            <h1>Estudios de Población de la provincia de Buenos Aires N° 1</h1>
            <div className="revistaAnteriores">            
            <a className="one"   href="/../pdf/revista4.pdf" target='_blank'>
            <img src="/../images/estudios_pobl02_phixr.jpg" alt="" />
            </a>            
            <p className="two revP">
            Esta publicación de la Revista “Estudios de Población de la provincia de Buenos Aires” se compone de 5 trabajos, con estudios sobre la provincia de Buenos Aires. El primer artículo, desarrolla la metodología de conformación de los 16 dominios (áreas) de estimación, creados durante el año 2013 por la Dirección Provincial de Estadística de la provincia.  Los restantes informes estudian diferentes dimensiones durante el período intercensal 1947-2010: el segundo, analiza los cambios en el volumen poblacional y las tendencias de crecimiento provincial. El tercero, presenta la estructura demográfica o composición por sexo y edad de la población provincial y sus áreas. Los últimos dos informes estudian la distribución territorial provincial y su dinámica, en el Gran Buenos Aires y en el Interior provincial.



            </p>
            </div>
          </div>

          
        </section>

    </>
  );
}