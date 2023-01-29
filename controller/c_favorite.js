import m_favorite from "../models/m_favorite.js";

export const getFavorites = async (req, res) => {
    try {
        const favorites = await m_favorite.find();
        res.json(favorites)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const getFavoriteById = async (req, res) => {
    try {
        const favorite = await m_favorite.findById(req.params.id);
        res.json(favorite)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const saveFavorite = async (req, res) => {

    const favorite = new m_favorite(req.body)
    try {
        const insertFavorite = await favorite.save();
        res.status(201).json(insertFavorite)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const deleteFavorite = async (req, res) => {

    try {
        const deleteFavorite = await m_favorite.deleteOne({ bookid: req.params.id });
        res.status(200).json(deleteFavorite)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}