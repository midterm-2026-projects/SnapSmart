// Mock Database
export const photos = [];

// Upload Photo
export function uploadPhoto(data) {
  const photo = {
    id: photos.length + 1,
    ...data,
  };

  photos.push(photo);

  return photo;
}

// Get Photo By ID
export function getPhotoById(id) {
  return photos.find((photo) => photo.id === Number(id));
}

// Get Photos By Gallery
export function getPhotosByGallery(galleryId) {
  return photos.filter(
    (photo) => photo.galleryId === Number(galleryId)
  );
}

// Delete Photo
export function deletePhoto(id) {
  const index = photos.findIndex(
    (photo) => photo.id === Number(id)
  );

  if (index === -1) {
    return null;
  }

  return photos.splice(index, 1)[0];
}