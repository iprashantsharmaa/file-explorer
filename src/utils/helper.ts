import { FunctionComponent } from 'react';
import {
  Typescript,
  CSS,
  File,
  HTML,
  Image,
} from '../assets';

export const iconsMap: Record<string, FunctionComponent> = {
  ts: Typescript,
  tsx: Typescript,
  css: CSS,
  scss: CSS,
  html: HTML,
  png: Image,
  ico: Image,
  txt: File,
};

export const getExtension = (fileName: string) => fileName.split('.')[1];
