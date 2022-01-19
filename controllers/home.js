module.exports = {
    getHome: async (req, res) => {
        try {
            res.render("home.ejs");
        } catch (err) {
            res.send(err);
        }
    }
}