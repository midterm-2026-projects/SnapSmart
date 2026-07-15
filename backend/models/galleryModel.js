export const galleries = [];

export function createGallery(data) {
  const gallery = {
    id: galleries.length + 1,
    ...data,
  };

  galleries.push(gallery);

  return gallery;
}

export function getGalleryById(id) {
  return galleries.find((gallery) => gallery.id === Number(id));
}

export function deleteGallery(id) {
  const index = galleries.findIndex(
    (gallery) => gallery.id === Number(id)
  );

  if (index === -1) {
    return null;
  }

  return galleries.splice(index, 1)[0];
}