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
    const bgIcons = await cloudinary.url(resource.public_id, {
      responsive: true,
      transformation: [{ dpr: "auto", width: "28", height: "28",  crop: "scale" }],
    });

    const isExisBackground = await Background.findOne({
      mobile,
      desktop,
      tablet,
      bgIcons,
    });
    
    if (isExisBackground) {
      
      return { mobile, desktop, tablet, bgIcons };

    } else {
      const background = new Background({ mobile, desktop, tablet, bgIcons });
      await background.save();
      return { mobile, desktop, tablet, bgIcons };
    }
    
    })
  );

  res.json(backgrounds);
};

module.exports = {
  listBackgrounds: ctrlWrapper(listBackgrounds),
};
