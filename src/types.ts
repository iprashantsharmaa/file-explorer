export type FileMetaData = {
  id: number;
  name: string;
  parent?: number;
  isDir?: boolean;
};

export type FileData = FileMetaData & {
  items?: FileMetaData[];
}
