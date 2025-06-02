import Link from "next/link";
import Image from "next/image";

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
            <h1>Estudios de Población de la provincia de Buenos Aires N° 5</h1>
            <div className="revista6">
              <img src="/../images/POBLACION 5.jpg" alt="" />
            </div>
            <div>
              
              <p className="revistaP">
              En esta reedición de la revista “Estudios de Población de la provincia de Buenos Aires”, se presenta un artículo donde plantea estimar el efecto que el cierre de la brecha de género en la participación e ingresos laborales tendría en la pobreza y en la desigualdad de ingresos de los hogares; un segundo informe técnico que analiza la evolución y composición del trabajo registrado asalariado en la provincia de Buenos Aires en comparación al total de puestos registrados en el país; un tercer informe técnico que estudia el descenso de la tasa de fecundidad adolescente, niñas y adolescentes de entre 10 y 19 años en la última década; un cuarto informe técnico que estima la carga de mortalidad atribuible al consumo de tabaco; un ensayo donde se expone la importancia y trascendencia de la creación del Área de Trabajadores y Trabajadoras Rurales bajo la órbita del Ministerio de Desarrollo Agrario de la PBA; un resumen de investigación que analiza la metodología para caracterizar a los hogares unipersonales; y por último una reseña del libro “La terminalidad de la escuela secundaria pública y los programas de mejoras: políticas de inclusión en los partidos de Luján, San Miguel y Moreno”.
              <br />
              <br />
              
              <br /> 
              </p>
            </div>

          </div>
        </section>
    </>
  );
}