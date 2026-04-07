// Charge tous les modules d'images au build time
const imageModules = import.meta.glob<{ default: string }>(
  '/src/assets/**/*.{jpg,png,webp,jpeg}',
  { eager: true }
);

export interface ImageItem {
  id: number;
  url: string;
  title: string;
}

/**
 * Charge les images d'un dossier spécifique
 * @param folderPath - Le chemin du dossier contenant les images (ex: 'projects/atoum-ra')
 * @returns Tableau d'images avec id, url et title
 */
export function loadImages(folderPath: string): ImageItem[] {
  const images: ImageItem[] = [];
  let id = 1;

  // Filtrer les modules pour le dossier spécifié
  Object.entries(imageModules)
    .filter(([path]) => path.includes(folderPath))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB)) // Tri pour une ordre consistant
    .forEach(([path, module]) => {
      const fileName = path.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'Image';

      images.push({
        id,
        url: module.default,
        title: fileName.toUpperCase(),
      });

      id++;
    });

  return images;
}
