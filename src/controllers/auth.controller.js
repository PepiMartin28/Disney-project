import { User } from "../models/User.js";

export const register = async (req, res) => {
  const { name, password, mail } = req.body;
  try {
    let error = validateRegister(req.body);
    if (error) {
      throw Error(error);
    }
    error = await validateMail(mail);
    if (error) {
      throw Error(error);
    }
    await User.create({
      name,
      password,
      mail,
    });
    return res.status(200).send("This user has been registered");
  } catch (error) {
    res.status(400).send(`An error ocurred. ${error}`);
  }
};

const validateRegister = (body) => {
  const { name, password, mail } = body;
  if (!name || name.length <= 0) {
    return "You cannot leave the name empty";
  }
  if (!password) {
    return "You cannot leave the password empty";
  }
  if (password.length < 6) {
    return "You cannot have the password with less than 6 characters";
  }
  return null;
};

const validateMail = async (mail) => {
  if (!mail) {
    return "You cannot leave the mail empty";
  }
  if (mail.search("@") === -1) {
    return "Invalid mail";
  }
  let user = await User.findOne({ where: { mail: mail } });
  if (user) {
    return true;
  } else {
    return false;
  }
};

export const login = (req, res) => {
  res.send("login");
};
