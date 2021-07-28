import mongoose from 'mongoose'

const Profile = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: true
  }
})
export default mongoose.model('Profiles', Profile)