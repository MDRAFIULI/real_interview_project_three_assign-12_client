import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    console.log(token);
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            const url = `https://powerful-meadow-41010.herokuapp.com/user/${email}`;
            console.log(url);
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data?.token;
                    console.log(accessToken);
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }

    }, [user]);
    return [token];
}

export default useToken;