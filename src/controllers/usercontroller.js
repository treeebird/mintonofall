export const getJoin = (req, res) => {
    return res.render("join");
}

export const postJoin = (req, res) => {
    const { name, phoneNumber, password, grade, age } = req.body;

    console.log(name, phoneNumber, password, grade, age);
    return res.redirect('/')
}
