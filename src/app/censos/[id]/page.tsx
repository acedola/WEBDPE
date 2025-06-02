'use client';
import React, { useState } from 'react';
import Censos from '@/components/Censos';

export default function Secciones({ params }: { params: { id: number } }) {
  const Id = params.id;
  console.log(`el id de page secciones es:${Id}`)
  return (
    <>
      <Censos option={Id} />
    </>
  );
}
