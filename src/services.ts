import data from './utils/data.json';
import { FileData } from './types';

export const getData = (): Promise<FileData[]> => (
  new Promise((res) => {
    res(data);
  })
);
