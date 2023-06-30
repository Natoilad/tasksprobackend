const { ctrlWrapper, cloudinary } = require("../helpers");
const { Background } = require("../models");

const listBackgrounds = async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:bg")
    .sort_by("public_id", "asc")
    .execute();

  const backgrounds = await Promise.all(
  resources.map(async (resource) => {
    const desktop = await cloudinary.url(resource.public_id, {
      responsive: true,
      transformation: [{ dpr: "auto", width: "auto", crop: "scale" }],
    });
    const tablet = await cloudinary.url(resource.public_id, {
      responsive: true,
      transformation: [{ dpr: "auto", width: "auto", crop: "scale" }],
    });
    const mobile = await cloudinary.url(resource.public_id, {
      responsive: true,
      transformation: [{ dpr: "auto", width: "auto", crop: "scale" }],
    });

    const isExisBackground = await Background.findOne({
      mobile,
      desktop,
      tablet,
    });
    
    if (isExisBackground) {
      
      return { mobile, desktop, tablet };

    } else {
      const background = new Background({ mobile, desktop, tablet });
      await background.save();
      return { mobile, desktop, tablet };
    }
    
    })
  );

  res.json(backgrounds);
};

module.exports = {
  listBackgrounds: ctrlWrapper(listBackgrounds),
};
