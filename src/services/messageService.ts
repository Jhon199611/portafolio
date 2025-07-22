// src/services/messageService.ts
import type { mensaje, mensajeParcial } from "../types/index";
import { supabase } from "../lib/supabase";

export const postMensaje = async (
  message: mensajeParcial
): Promise<mensaje> => {
  const { data, error } = await supabase
    .from("comentarios")
    .insert([message])
    .select()
    .single(); // Devuelve solo el nuevo comentario

  if (error) {
    console.error("❌ Error al agregar comentario:", error);
    throw error;
  }
  
  return data as mensaje;
};





