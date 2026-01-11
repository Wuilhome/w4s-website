/**
 * Utilitaire pour gérer les URLs avec le base path
 */

/**
 * Ajoute le base path à une URL relative
 * @param {string} path - Le chemin relatif (ex: '/services/bricolage')
 * @returns {string} - Le chemin avec le base path
 */
export function url(path) {
  let base = import.meta.env.BASE_URL;
  // S'assurer que base se termine par /
  if (!base.endsWith('/')) {
    base = base + '/';
  }
  // Si le chemin commence par /, on le retire pour éviter les doubles slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
