const measureLines = (element: HTMLElement, value: string) => {
  if (!element || !value) return 0;
  const canvas = document.createElement('canvas');
  const canvasContext: CanvasRenderingContext2D = canvas.getContext('2d')!;
  const style = window.getComputedStyle(element);
  canvasContext.font = `${style.getPropertyValue('font-size')} ${style.getPropertyValue('font-family')}`;
  const measuredLines = value.split('\n').reduce((r, c) => {
    const res = Math.max(
      Math.ceil(canvasContext.measureText(c).width / element!.offsetWidth),
      1,
    );
    return r + res;
  }, 0);
  return measuredLines;
};

export default measureLines;
