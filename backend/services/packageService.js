import packageDatabaseModel from "../models/packageDatabaseModel.js";


function normalizeDeliverables(deliverables) {
  if (Array.isArray(deliverables)) {
    return deliverables;
  }

  if (typeof deliverables === "string" && deliverables.trim()) {
    return deliverables
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}


export async function getAllPackages() {
  return packageDatabaseModel.getAllPackages();
}


export async function getPackageById(id) {
  return packageDatabaseModel.getPackageById(id);
}


export async function createPackage(data) {
  if (!data.package_name?.trim()) {
    throw new Error("Package name is required");
  }

  if (!data.price && data.price !== 0) {
    throw new Error("Price is required");
  }

  return packageDatabaseModel.createPackage({
    package_name: data.package_name.trim(),
    subtitle: data.subtitle?.trim() ?? "",
    price: Number(data.price),
    theme: data.theme?.trim() ?? "",
    accent: data.accent?.trim() ?? "#2563eb",
    image_url: data.image_url?.trim() ?? "",
    description: data.description?.trim() ?? "",
    deliverables: normalizeDeliverables(data.deliverables),
    badge: data.badge?.trim() ?? null,
  });
}


export async function updatePackage(id, data) {
  return packageDatabaseModel.updatePackage(id, {
    package_name: data.package_name?.trim() ?? "",
    subtitle: data.subtitle?.trim() ?? "",
    price: Number(data.price),
    theme: data.theme?.trim() ?? "",
    accent: data.accent?.trim() ?? "#2563eb",
    image_url: data.image_url?.trim() ?? "",
    description: data.description?.trim() ?? "",
    deliverables: normalizeDeliverables(data.deliverables),
    badge: data.badge?.trim() ?? null,
  });
}


export async function deletePackage(id) {
  return packageDatabaseModel.deletePackage(id);
}