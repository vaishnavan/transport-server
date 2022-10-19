

const userAuth = async (req, res) => {
    const { username, password } = req.body
    if(username !== process.env.USERNAME && password !== process.env.PASSWORD){
        res.json({message: "Login Failed"})
    }else{
        res.json({
            message: "Login successfull",
            data: {
                username: process.env.USERNAME,
                isLogin: true
            }
        })
    }
}

module.exports = {
    userAuth
}