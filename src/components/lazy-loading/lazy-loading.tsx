import { lazy, RefObject, useEffect, useRef, useState } from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

type ImageProps = {
  height: number;
  rootElemRef?: RefObject<HTMLElement>;
  src: string;
  width: number;
} & Record<string, any>;

const ioOptions: IntersectionObserverInit = {
  threshold: 0,
};

const lazyEnabled =
  typeof HTMLImageElement !== 'undefined' &&
  'loading' in HTMLImageElement.prototype;

const BuiltinImage = ({ rootElemRef, ...props }: ImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleLoaded = () => {
      imgRef.current?.classList.remove('lazy');
    };
    if (imgRef.current) {
      imgRef.current.addEventListener('load', handleLoaded, { once: true });
    }
  }, []);

  return (
    <img ref={imgRef} {...props} className={cx('lazy')} loading="lazy" alt="" />
  );
};

export const LazyLoadImage = ({
  height,
  rootElemRef,
  src,
  width,
  ...otherProps
}: ImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  ioOptions.root = rootElemRef?.current ?? null;
  const { entries, observerRef } = useIntersectionObserver(imgRef, ioOptions);

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    const isVisible = entries[0]?.isIntersecting;
    if (isVisible) {
      imgRef.current!.setAttribute('src', src);
      observerRef.current?.disconnect();
    }
  }, [src, entries]);

  return (
    <img
      ref={imgRef}
      width={width}
      height={height}
      onLoad={onLoad}
      alt=""
      {...otherProps}
    />
  );
};

const LazyImage = lazyEnabled ? BuiltinImage : LazyLoadImage;

export default LazyImage;
