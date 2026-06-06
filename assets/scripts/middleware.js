import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = new URL(request.url);
  
  // Captura el sitio web desde donde se intenta usar tu archivo
  const referer = request.headers.get('referer');

  // Si se está intentando cargar un archivo/imagen directamente en una web
  if (referer) {
    try {
      const refererUrl = new URL(referer);
      const originDomain = refererUrl.hostname;

      // DEFINE AQUÍ TUS DOS DOMINIOS AUTORIZADOS (sin http ni www)
      const misDominiosPermitidos = [
        'tu-dominio-actual.com', 
        'el-dominio-x.com'
      ];

      // Si el dominio de origen NO está en tu lista, bloquéalo de inmediato
      if (!misDominiosPermitidos.includes(originDomain)) {
        return new NextResponse('Acceso denegado: Hotlinking no permitido', { status: 403 });
      }
    } catch (e) {
      // Si el referer no es válido, se procesa normalmente
    }
  }

  return NextResponse.next();
}
