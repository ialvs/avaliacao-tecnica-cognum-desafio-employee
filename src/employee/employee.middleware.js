const paramIdIsNum = async (req, res, next) => {
    const { id } = req.params;

    if (isNaN(+id)) {
        return res
            .status(400)
            .json({ mensagem: "informe um número como parâmetro." });
    }

    next();
};

module.exports = { paramIdIsNum };
