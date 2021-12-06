////////////////////////////////////
//Create schema for collection
/////////////////////////////////

const mongoose = require("mongoose");
// const marked = require("marked");
// const slugify = require("slugify");
const courseSchema = new mongoose.Schema({
  kurskod: {
    type: String,
    required: true,
  },
  kursnamn: {
    type: String,
    required: true,
  },
  progression: {
    type: String,
    required: true,
  },
  kursplan: {
    type: String,
    required: true,
  },
  termin: {
    type: String,
    required: true
  }
});


/* Slug work just with new sorted data not the old ones
,
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  ,
  // Can be used by create new doc
  createdAt: {
    type: Date,
    default: Date.now,
  }
// Convert title to uniqe sluq
courseSchema.pre("validate", function (next) {
  if (this.kurskod) {
    this.slug = slugify(this.kurskod, { lower: true, strict: true });
  }
  next();
});
*/
// modelname Course and exported. import in router
module.exports = mongoose.model("Courses", courseSchema);
