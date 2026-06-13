const cntSchema = require("../model/cntSchema");

exports.createContact = async (req, res) => {
  try {
    console.log(req.body)
    const { name, email, phone, loc } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    // Prevent duplicate (email OR phone)
    const existingContact = await cntSchema.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingContact) {
      return res.status(400).json({
        success: false,
        message: "Contact already exists with this email or phone ❌",
      });
    }

    const newInfo = await cntSchema.create({ name, email, phone, loc });

    return res.status(201).json({
      success: true,
      message: "Contact saved successfully ✅",
      data: newInfo,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
//? Fetch Contact

exports.getAllContacts = async (req, res) => {
  try {
    const payload = await cntSchema.find({}).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "All contacts fetched",
      payload,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getSingleContacts = async (req, res) => {
  try {
    const payload = await cntSchema.findById(req.params.id);

    if (!payload) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact fetched successfully",
      payload,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
//? Update Contact

exports.updateContacts = async (req, res) =>{
    try {
        let payload = await cntSchema.findOne({_id: req.params.id});  
        if(!payload){
            return res.status(404).json({Success: false, message: "Contact Not Found"})
        }else{
            await cntSchema.updateOne({_id: req.params.id}, {$set: req.body})
        return res
                .status(200)
                .json({success: true, message: "Single contact fetched successfully", payload})
        }
    } catch (error) {
        return res.status(400).json({Success: false, message: error.message})
    }
};

//? Delete Contact

exports.deleteContacts = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("Deleting ID:", id); // DEBUG

    const deletedContact = await cntSchema.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.status(200).json({
        success: true,
        message: "Contact deleted successfully",
        data: deletedContact,
    });
  } catch (error) {
    console.log("DELETE ERROR:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};


