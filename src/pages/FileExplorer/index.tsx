import React from 'react';
import File from '../../components/File';
import { useGetData } from '../../hooks';

export default function FileExplorer() {
  const { data: files = [] } = useGetData();

  return (
    <div className="h-full bg-primary flex flex-col space-y-1 w-1/5">
      <p className="p-2 text-white text-base font-semibold my-1">File Explorer</p>
      {files?.map((file) => (
        <File key={file.id} file={file} />
      ))}
    </div>
  );
}
