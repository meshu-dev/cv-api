const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fields = {
  id: {
    type: String,
    required: true,
    unique: true
  },
  profile: {
    type: Object,
    required: true
  },
  skills: {
    type: Array,
    required: true
  },
  workExperience: {
    type: Array,
    required: true
  }
}

const actions = {
  toJSON: {
    transform: function (doc, ret) {
      console.log('RET', ret);
      let idObj = { id: ret.id };

      delete ret._id;
      delete ret.__v;
    
      return Object.assign({}, idObj, ret);
    }
  }
}

const cvSchema = new Schema(
  fields,
  actions
)

module.exports = mongoose.model('cv', cvSchema);
