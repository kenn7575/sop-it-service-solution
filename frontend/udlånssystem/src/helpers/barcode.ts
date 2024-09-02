let pressedKeys: string[] = [];
var firstKeyPress = 0;

export async function handleBarcodeScan(
  e: KeyboardEvent,
  callback: (barcode: string) => void,
) {
  if (pressedKeys.length === 0) firstKeyPress = new Date().getTime();

  if (['Shift', 'Control', 'Alt'].includes(e.key)) return;

  if (e.key == 'Enter') {
    e.preventDefault();
    const barcode = pressedKeys.join('');
    if (new Date().getTime() - firstKeyPress > 100) return (pressedKeys = []);

    pressedKeys = [];

    return callback(barcode);
  } else pressedKeys.push(e.key);
}
