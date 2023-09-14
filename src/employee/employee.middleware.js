const paramIdIsNum = async (req, res, next) => {
    const { id } = req.params;

    if (isNaN(+id)) {
        return res
            .status(400)
            .json({ mensagem: "informe um número como parâmetro." });
    }

    next();
};

const nameRoleAreNull = async (req, res, next) => {
    const { name, role } = req.body;

    if (!name || !role) {
        return res
            .status(400)
            .json({ mensagem: "nome e cargo devem ser informados" });
    }

    next();
};

module.exports = { paramIdIsNum, nameRoleAreNull };
