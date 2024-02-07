
export const sizeUnits = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export function formatBytes(bytes, decimals = 2, k = 1024) {
  if (bytes === 0) return [0, 'MB']

  const i = Math.floor(Math.log(bytes) / Math.log(k));  
  const size = parseFloat((bytes / Math.pow(k, i)).toFixed(decimals));

  return [size, sizeUnits[i]]
}

export function unformatBytes(size, unit, k = 1024) {
  const i = sizeUnits.indexOf(unit);
  if (i === -1) return 0;

  return Math.floor(size * Math.pow(k, i));
}