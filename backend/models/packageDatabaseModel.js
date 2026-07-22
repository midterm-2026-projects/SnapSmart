import supabase from "../config/supabaseClient.js";


const packageDatabaseModel = {
  async getAllPackages() {
    const { data, error } = await supabase
      .from("packages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async getPackageById(id) {
    const { data, error } = await supabase
      .from("packages")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async createPackage(packageData) {
    const { data, error } = await supabase
      .from("packages")
      .insert([
        {
          package_name: packageData.package_name,
          subtitle: packageData.subtitle,
          price: packageData.price,
          theme: packageData.theme,
          accent: packageData.accent,
          image_url: packageData.image_url,
          description: packageData.description,
          deliverables: packageData.deliverables,
          badge: packageData.badge,
        },
      ])
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async updatePackage(id, packageData) {
    const { data, error } = await supabase
      .from("packages")
      .update({
        package_name: packageData.package_name,
        subtitle: packageData.subtitle,
        price: packageData.price,
        theme: packageData.theme,
        accent: packageData.accent,
        image_url: packageData.image_url,
        description: packageData.description,
        deliverables: packageData.deliverables,
        badge: packageData.badge,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async deletePackage(id) {
    const { data, error } = await supabase
      .from("packages")
      .delete()
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },
};

export default packageDatabaseModel;