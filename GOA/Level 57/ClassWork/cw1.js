function printerError(s) {
    const errors = [...s].filter(char => char < 'a' || char > 'm').length;
  return `${errors}/${s.length}`;
}