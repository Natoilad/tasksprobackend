const { ctrlWrapper, cloudinary } = require("../helpers");

const listBackgrounds = async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:bg")
    .sort_by("public_id", "asc")
    .execute();

  const backgrounds = resources.map((resource) => ({
    desktop: cloudinary.url(resource.public_id, {
      responsive: true,
      transformation: [{ dpr: "auto", width: "auto", crop: "scale" }],
    }),
    tablet: cloudinary.url(resource.public_id, {
      responsive: true,
      transformation: [{ dpr: "auto", width: "auto", crop: "scale" }],
    }),
    mobile: cloudinary.url(resource.public_id, {
      responsive: true,
      transformation: [{ dpr: "auto", width: "auto", crop: "scale" }],
    }),
  }));

  res.json(backgrounds);
};

module.exports = {
  listBackgrounds: ctrlWrapper(listBackgrounds),
};
