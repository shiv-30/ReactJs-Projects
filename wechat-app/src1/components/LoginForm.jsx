import {useState} from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const authObject = {'Project-Id':'4f365a39-4107-449c-bbf2-1', 'User-Name':username, 'User-Secret':password}
        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.Location.reload();
        } catch (error) {
            setError('Oops, wrong credentials')
        }
    }
    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>
                    WeChat Community
                </h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='username' value={username} className='input' required placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                    <input type='password' required placeholder='Password'  name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input'/>
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;