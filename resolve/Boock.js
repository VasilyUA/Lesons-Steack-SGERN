const { boock } = require("../models/index");

const getAllBooks = async () => {
  try {
    const allBook = await boock.findAll({ raw: true });
    return allBook;
  } catch (error) {
    console.error(error);
  }
};
const getBook = async (params) => {
  try {
    const oneBook = await boock.findByPk(params.id);
    if (!oneBook) return "undefined boock";
    return oneBook;
  } catch (error) {
    console.error(error);
  }
};

const addBook = async (params) => {
  const { title, description } = params.book;
  if (!title || !description) return "Всі поля мають бути заповниними";
  try {
    const CreateBoock = await boock.create({
      title,
      description,
    });
    return CreateBoock;
  } catch (error) {
    console.error(error);
  }
};
const updateBoock = async (params) => {
  const { id, title, description } = params.book;
  if (!id || !title || !description) return "Всі поля мають бути заповниними";
  try {
    await boock.update(params.book, {
      where: {
        id: id,
      },
      returning: true,
      plain: true,
    });
    return await boock.findByPk(params.book.id);
  } catch (error) {
    console.error(error);
  }
};

const removeBoock = async (params) => {
  try {
    await boock.destroy({ where: { id: params.id } });
    return "Книга удалена";
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllBooks,
  getBook,
  addBook,
  updateBoock,
  removeBoock,
};
