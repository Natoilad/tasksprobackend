const { sendEmail } = require("../../helpers");

const needHelp = async (req, res) => {
    const { email, comment } = req.body;
    const helpEmail = {
        to: "shubinanri@gmail.com",
        subject: `New ticket from email ${email}`,
        html: `<h2> User comments</h2>
        <p style="font-size:18px"">${comment}</p>
        <p>Mail for reply ${email}</p>`,
    };

    await sendEmail(helpEmail);

    res.status(200).json({
        message: "Email send",
    });
};

module.exports = {
    needHelp,
}