import express from 'express'
import {
  getProfile,
  getProfileId, saveProfile,
  updateProfile,
  deleteProfile
} from '../controller/profileController.js'


const router = express.Router()

router.get('/', getProfile)
router.get('/:id', getProfileId)
router.post('/', saveProfile)
router.patch('/:id', updateProfile)
router.delete('/:id', deleteProfile)


export default router