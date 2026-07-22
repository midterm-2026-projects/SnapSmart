import {
  createPackage,
  deletePackage,
  getAllPackages,
  getPackageById,
  updatePackage,
} from "../services/packageService.js";


export async function listPackages(req, res) {
  try {
    const packages = await getAllPackages();

    return res.status(200).json({
      success: true,
      data: packages,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}


export async function fetchPackageById(req, res) {
  try {
    const packageItem = await getPackageById(req.params.id);

    return res.status(200).json({
      success: true,
      data: packageItem,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}


export async function addPackage(req, res) {
  try {
    const packageItem = await createPackage(req.body);

    return res.status(201).json({
      success: true,
      data: packageItem,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}


export async function editPackage(req, res) {
  try {
    const packageItem = await updatePackage(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      data: packageItem,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}


export async function removePackage(req, res) {
  try {
    const packageItem = await deletePackage(req.params.id);

    return res.status(200).json({
      success: true,
      data: packageItem,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}