import {adjs, nouns} from "./words";

export const generateSecret = () => {
    const randomNumber = Math.floor(Math.random() * adjs.length);
    return `${adjs[randomNumber]} ${nouns[randomNumber]}`;
  };
  
 