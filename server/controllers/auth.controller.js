export const signIner = async (req, res) => {
  try {
    const { fullName, username, gender, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password don't match" });
    }
    const user = await user.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = (req, res) => {
  console.log("login user");
};

export const logOutUser = (req, res) => {
  console.log("logout user");
};

export const signUpUser = (req, res) => {
  console.log("signUp user");
};

// sKqgAEZdmQumWLjB
