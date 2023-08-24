import React, {
  FunctionComponent,
  MouseEvent,
  useMemo,
  useState,
} from 'react';
import clsx from 'clsx';
import { Directory } from '../../assets';
import RightChevron from '../../assets/icons/rightChevron';
import { getExtension, iconsMap } from '../../utils/helper';
import { FileData } from '../../types';

type Props = {
  file: FileData;
  className?: string;
};

export default function File({
  file,
  className,
}: Props) {
  const {
    name,
    items = [],
  } = file ?? {};
  const [isOpen, setIsOpen] = useState(false);
  const chevronClasses = clsx('!mt-0', { 'rotate-90': isOpen });
  const classes = clsx(
    'flex items-center space-x-2 hover:bg-hover cursor-auto py-0.5 px-1 rounded-md',
    className,
  );

  const extension = useMemo(() => getExtension(name), [name]);

  const Icon: FunctionComponent = useMemo(
    () => iconsMap[extension] ?? Directory,
    [iconsMap, extension],
  );

  const hasItems = useMemo(() => items.length > 0, [items]);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setIsOpen((open: boolean) => !open);
    event.stopPropagation();
  };

  return (
    <div
      role="button"
      tabIndex={-1}
      onClick={handleClick}
      onKeyDown={() => {}}
      className="flex flex-col space-y-1 [&:not(:first-child)]:px-6"
    >
      <div className={classes}>
        {hasItems && (
          <RightChevron className={chevronClasses} />
        )}
        <Icon />
        <span className="text-sm text-white !cursor-auto">{name}</span>
      </div>
      {isOpen && hasItems && items?.map((item) => (
        <File key={item.id} file={item} />
      ))}
    </div>
  );
}
