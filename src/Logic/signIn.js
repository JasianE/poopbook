async function signIn(username, password){
    try{
        const signedIn = await fetch(`https://poopoo123123.herokuapp.com/${username}/${password}/log-in`, {
            mode: 'cors'
        })
        const signedInData = await signedIn.json()
        return signedInData
    } catch(err){
        return('Heroku Error')
    }
}

export default signIn