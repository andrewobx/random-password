randomPassword = () => {
  const length = 8;
  let generatedPassword = '';
  const symbols = '~!@#^&*()_+{}:?;.,';
​
  for (let i = 0; i < length; i++) {
    generatedPassword += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    generatedPassword += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    generatedPassword += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    generatedPassword += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return generatedPassword
    .slice(0, length)
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};