import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getData } from './services';
import { FileData } from './types';

const transformFilesData = (data: FileData[]) => {
  const map: Record<string, string> = {};
  const result: FileData[] = [];

  data.forEach((item) => {
    if (!item.parent) {
      const index = result.push(item);
      map[item.id] = (index - 1).toString();
    } else {
      const index = map[item.parent];
      if (index) {
        const indexParts = index.split('.');
        let target = result[+indexParts[0]];
        indexParts.slice(1).forEach((idx) => {
          if (!!target.items && target.items.length > 0) {
            target = target?.items[+idx];
          }
        });
        if (target) {
          target.items = target.items || [];
          const newIndex = target.items.push(item);
          map[item.id] = `${index}.${(newIndex - 1)}`;
        }
      }
    }
  });
  return result;
};

export function useGetData(): UseQueryResult<FileData[], Error> {
  return useQuery(
    ['files'],
    getData,
    {
      select: transformFilesData,
    },
  );
}
