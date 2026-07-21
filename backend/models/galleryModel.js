export const galleries = [];

// Create Gallery
export function createGallery(data) {
  const gallery = {
    id: galleries.length + 1,
    photos: [],
    ...data,
  };

  galleries.push(gallery);

  return gallery;
}


// Get Gallery by ID
export function getGalleryById(id) {
  return galleries.find(
    (gallery) => gallery.id === Number(id)
  );
}

// Upload Photo
export function uploadPhoto(galleryId, data) {
  const gallery = getGalleryById(galleryId);

  if (!gallery) {
    return null;
  }

  const photo = {
    id: gallery.photos.length + 1,
    galleryId: Number(galleryId),
    photoName: data.photoName,
    fileSize: data.fileSize,
    uploadedAt: new Date().toISOString(),
  };

  gallery.photos.push(photo);

  return photo;
}

// Get Photos by Gallery
export function getPhotosByGallery(galleryId) {
  const gallery = getGalleryById(galleryId);

  if (!gallery) {
    return [];
  }

  return gallery.photos;
}

// Delete Photo
export function deletePhoto(id) {
  for (const gallery of galleries) {

    const index = gallery.photos.findIndex(
      (photo) => photo.id === Number(id)
    );

    if (index !== -1) {
      return gallery.photos.splice(index, 1)[0];
    }

  }

  return null;
}

// Delete Gallery
export function deleteGallery(id) {
  const index = galleries.findIndex(
    (gallery) => gallery.id === Number(id)
  );

  if (index === -1) {
    return null;
  }

  return galleries.splice(index, 1)[0];
}