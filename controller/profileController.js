import Profile from '../model/profile.js'

export const getProfile = async (req, res) => {
  try {
    const data = await Profile.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getProfileId = async (req, res) => {
  try {
    const data_id = await Profile.findById(req.params.id)
    res.json(data_id)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const saveProfile = async (req, res) => {
  const data_id = new Profile(req, body)

  try {
    const data_save = await data_id.save()
    res.status(201).json(data_save)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const updateProfile = async (req, res) => {
  const find_id = await Profile.findById(req.params.id)
  if (!find_id) {
    return res.ststus(404).json({ message: 'data tidak ditemukan' })
  }
  try {
    const data_update = await Profile.updateOne({ _id: req.params.id }, { $set: req.body })
    res.status(200).json(data_update)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const deleteProfile = async (req, res) => {
  const find_id = await Profile.findById(req.params.id)
  if (!find_id) {
    return res.ststus(404).json({ message: 'data tidak ditemukan' })
  }
  try {
    const data_delete = await Profile.deleteOne({ _id: req.params.id })
    res.status(200).json(data_delete)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}