'use client';
import React from 'react';
import ArticuloCenso from '@/components/ArticuloCenso';

export default function Censos({ params }: { params: { id_s: string } }) {
  const id = params.id_s;

  return (
    <>
      <ArticuloCenso option={id} />
    </>
  );
}
