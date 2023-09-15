const paramIdIsNum = async (req, res, next) => {
    const { id } = req.params;

    if (isNaN(+id)) {
        return res.status(400).json({ mensagem: "params must be a number." });
    }

    next();
};

const nameRoleAreNull = async (req, res, next) => {
    const { name, role } = req.body;

    if (!name || !role) {
        return res
            .status(400)
            .json({ mensagem: "name and role must be informed." });
    }

    next();
};

module.exports = { paramIdIsNum, nameRoleAreNull };
