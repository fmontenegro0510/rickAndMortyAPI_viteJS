  const hRange = [0, 360];
  const sRange = [0, 100];
  const lRange = [0, 100];

  export const getHashOfString = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);
    return hash;
  };

  export const normalizeHash = (hash, min, max) => {
    return Math.floor((hash % (max - min)) + min);
  };
  
  export const generateHSL = (name) => {
    const hash = getHashOfString(name);
    const h = normalizeHash(hash, hRange[0], hRange[1]);
    const s = normalizeHash(hash, sRange[0], sRange[1]);
    const l = normalizeHash(hash, lRange[0], lRange[1]);
    return [h, s, l];
  };

  export const HSLtoString = (hsl) => {
    return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
  };

  export const randomHex = Math.floor(Math.random() * 16777215).toString(16);


 const generarNumero = (numero)=>{
	return (Math.random()*numero).toFixed(0);
}

export const colorRGB = ()=>{
	var coolor = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
	return coolor;
}


const generarLetra = ()=>{
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}
	
export const colorHEX = ()=>{
	var coolor = "";
	for(var i=0;i<6;i++){
		coolor = coolor + generarLetra() ;
	}
	return coolor;
}