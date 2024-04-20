import User from "../models/userModel.js"

const add = async (req, res) => {
    const {firstName, lastName, email, password} =req.body
    if(!firstName ||!lastName ||!email||!password){
        return res.status(400).json({message: "please fill in"})
    }
    try {
        const user = await User.find0ne({email})
        if (user) {
            return res.status(401).send("User already exist")
        }

    User.create ({
        firstName:"",
        lastName: "",
        email:"",
        password:""
    })
    res.send('i was successful')

} catch (error) {
    res.status(500).send(error)
    console.log(error)
}

}

export { add }

