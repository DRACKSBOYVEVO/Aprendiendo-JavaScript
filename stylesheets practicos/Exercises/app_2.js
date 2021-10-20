/*Compruebe si una URL es absoluta en JavaScript*/
const UnaUrlAdsoluta = (url) => /^[a-z][a-z0-9+.-]:/.test(url);

UnaUrlAdsoluta('https://1loc.dev'); //true
UnaUrlAdsoluta('https://1loc.dev/foo/bar'); //true
UnaUrlAdsoluta('1loc.dev'); //false
UnaUrlAdsoluta('//1loc.dev'); //false