const { User } = require("../models");
const dayjs = require("dayjs");

exports.cekSub = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });

    let date = dayjs();
    let now = date.format("YYYY-MM-DD");

    if (user.dueDate < now) {
      await User.update(
        {
          subscribe: false,
        },
        {
          where: {
            id: req.user.id,
          },
        }
      );
    }

    next();
  } catch (error) {
    res.status(400).send({ message: "Invalid token" });
  }
};
