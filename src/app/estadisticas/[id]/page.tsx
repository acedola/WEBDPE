/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import parse from 'html-react-parser';
import { loadArticulos } from '@/app/api/secc';
import Link from 'next/link';

interface ArticuloProps {
  id_s: number | null;
}
interface ArticuloData {
  id: number;
  attributes: {
    Titulo: string;
    parrafo: string;
    TituloInforme: string;
    TituloCuadro: string;
    TituloMetodologia: string;
    Informes: string;
    Cuadros: string;
    Metodologia: string;
    contenido: {
      data: {
        id: number;
        attributes: {
          formats: {
            large?: {
              url: string;
            };
            medium?: {
              url: string;
            };
            small?: {
              url: string;
            };
          };
        };
      }[];
    };
  };
}

const findBestImage = (
  imageData: ArticuloData['attributes']['contenido']['data']
): string | null => {
  const availableFormats: Array<
    keyof ArticuloData['attributes']['contenido']['data'][0]['attributes']['formats']
  > = ['large', 'medium', 'small'];

  for (const format of availableFormats) {
    const image = imageData.find(
      (item) => item.attributes.formats && item.attributes.formats[format]
    );
    if (image) {
      return image.attributes.formats[format]!.url;
    }
  }

  return null;
};
const Articulo: React.FC<ArticuloProps> = ({ id_s }) => {
  const [lists, setLists] = useState<ArticuloData[] | null>(null);

  useEffect(() => {
    async function fetchSecc() {
      if (id_s !== null) {
        const data = await loadArticulos({ id: id_s });

        if (data) {
          setLists(data.data);
        }
      }
    }
    fetchSecc();
  }, [id_s]);

  return (
    <>
      {lists && lists.length > 0 && (
        <div className="flex flex-col items-center py-8">
          <h1 className="w-3/5 py-8 mb-4 border-b-4 text-2xl font-sans leading-none tracking-tight text-gray-900 dark:text-white">
            {lists[0].attributes.Titulo}
          </h1>

          <div className="mb-3 py-8 w-3/5 text-gray-500 dark:text-gray-400">
            {parse(lists[0].attributes.parrafo)}
          </div>

          {lists[0].attributes.contenido.data && (
            <img
              src={`http://www-backend.desa.estadistica.ec.gba.gov.ar/${findBestImage(
                lists[0].attributes.contenido.data
              )}`}
              className="py-8 w-3/5 mb-20 rounded-lg shadow-xl dark:shadow-gray-800"
              alt="imagen"
            />
          )}

          {lists[0].attributes.TituloCuadro && (
            <>
              <div className="w-full bg-cyan-400 px-2 py-2 mb-4 font-sans leading-none tracking-tight text-gray-900">
                <h4 className="ml-36 font-bold">
                  {lists[0].attributes.TituloCuadro}
                </h4>
              </div>
              <div className="mb-3 w-3/5 text-gray-500 dark:text-gray-400 informesContent  ">
                {parse(lists[0].attributes.Cuadros)}
              </div>
            </>
          )}

          {lists[0].attributes.TituloInforme && (
            <>
              <div className="w-full bg-cyan-400 px-2 py-2 mb-4 font-sans leading-none tracking-tight text-gray-900 dark:text-white ">
                <h4 className="ml-36 font-bold">
                  {lists[0].attributes.TituloInforme}
                </h4>
              </div>
              <div className="mb-3 w-3/5 text-black-500 dark:text-gray-400 informesContent text-sm">
                {parse(lists[0].attributes.Informes)}
              </div>
              <Link
                className="text-lg -mt-10 hover:text-blue-500"
                href={`/informes/${id_s}`}
              ><br />
                <h1>Ver informes anteriores</h1>
              </Link>
            </>
          )}

              {lists[0].attributes.TituloMetodologia && (
                <>
                  <div className="w-full bg-cyan-400 px-2 py-2 mb-4 font-sans leading-none tracking-tight text-gray-900">
                    <h4 className="ml-36 font-bold">
                      {lists[0].attributes.TituloMetodologia}
                    </h4>
                  </div>
                  <div className="mb-3 w-3/5 text-black-500 dark:text-gray-400 text-sm ">
                    {parse(lists[0].attributes.Metodologia)}
                  </div>
                </>
              )}
          
        </div>
      )}
    </>
  );
};

export default Articulo;
