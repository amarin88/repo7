import jwt from "jsonwebtoken";

//Crear un token
export const createToken = (user) => {
    const { _id, email } = user;//Desestructuramos y recibimos el _id y el email del usuario
    const token = jwt.sign({_id , email}, "codigoSecreto", {expiresIn: "1m"} );// Creamos el token recibiendo como primer parametro el _id y el email en un objeto, el segundo parametro es el codigo secreto y tercer parametro la duración, en este caso 1 minuto 
    return token;//Retornamos el token
};

//Verificación de token
export const verifyToken = (token) => {
    try {
      const verification = jwt.verify(token, "codigoSecreto");//Recibimos el token y el codigo secreto que debe coincidir con el asignado en el token
      return verification;//Devolvemos la verificación
    } catch (error) {
      return null;//Si el token expiró devolvemos "null" o vacío
    }
  };