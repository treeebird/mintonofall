import User from "../models/user";
export const getJoin = (req, res) => {
    return res.render("join");
}

export const postJoin = async (req, res) => {
    const { name, phoneNumber, gender, password, grade, age } = req.body;

    console.log(name, phoneNumber, password, grade, age);
    
    try {
        await User.create({
          name,
          phoneNumber,
          password,
          gender,
          grade,
          age,
        });
        return res.redirect("/");
    } catch (error) {
        return res.status(400).send(error);
        };
}


