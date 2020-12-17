import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import '../../App.css'
import { UserContext } from '../../contexts/User';
import '../../Styles/Login.css'

function Login(props) {

    const { 
        setUserInfoFunc 
    } = useContext(UserContext);

    const [tab, setTab] = useState(0)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [arrSuccess, setArrSuccess] = useState()
    const [arrErr, setArrErr] = useState() 

    useEffect(()=> {
        Axios.get(`http://pe.heromc.net:4000/users/${localStorage.getItem('user-id')}`, { 
            headers: {"authorization" : `Bearer ${localStorage.getItem('token')}`}
        })
        .then(res => { 
            setUserInfoFunc(res.data.user);
            props.history.push("/account")
        })
        .catch(err => {
            console.log(err);
        })
    },[]) 

    const sendAccount = (event) => {
        event.preventDefault()
        if (tab === 0) {
            Axios.post('http://localhost:4000/users/login', {
                loginEmail: email,
                loginPassword: password
            }) 
            .then(res => {
                setArrSuccess("Đăng nhập thành công!") 
                setArrErr("");
                setTimeout(()=> {
                    window.location.reload(false);
                    document.body.style.overflow = 'unset';
                }, 1000)
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user-id', res.data.user._id);
            })
            .catch(err => {
                setArrSuccess("");
                setArrErr(err.response.data);
            })
        } else {
            Axios.post('http://localhost:4000/users/register', {
                userName: name,
                userEmail: email,
                userPassword: password,
                userRole: "user"
            })
            .then(res => { 
                setArrSuccess(res.data)
                setArrErr("");
                setTimeout(()=> {
                    window.location.reload(false);
                    document.body.style.overflow = 'unset';
                }, 1000)
            })
            .catch(err => { 
                setArrSuccess("");
                setArrErr(err.response.data);
            })
        }
    }

    return (
        <div className="login flex-col">
            <div className="login-title">
                <strong>Thiết bị định vị</strong> cho chó và mèo
            </div>
            <div className="login-banner"> 
            </div>
            { tab === 0 &&
                <div className="login-box flex-col">
                    <div className="login-box-title"><strong>Sign</strong> in</div>
                    <div className="login-status">
                        { arrErr && <div className="login-err">{arrErr}</div>}
                        { arrSuccess && <div className="login-success">{arrSuccess}</div>}
                    </div>
                    <form className="flex-col" onSubmit={sendAccount}>
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={(event)=>{
                                setEmail(event.target.value)
                            }}
                        ></input>
                        <label>Password</label>
                        <input
                            value={password}
                            onChange={(event)=>{
                                setPassword(event.target.value)
                            }}
                        ></input>
                        <button>Sign in</button>
                    </form>
                    <div className="login-forgot">Forgot password?</div>
                    <div className="login-register" onClick={()=>{setTab(1)}}> New user? Create account</div>
                </div>
            }
            { tab === 1 &&
                <div className="login-box flex-col">
                    <div className="login-box-title"><strong>Create</strong> acount</div>
                    <div className="login-status">
                        { arrErr && <div className="login-err">{arrErr}</div>}
                        { arrSuccess && <div className="login-success">{arrSuccess}</div>}
                    </div>
                    <form className="flex-col" onSubmit={sendAccount}>
                        <label>Name *</label>
                        <input
                            value={name}
                            onChange={(event)=>{
                                setName(event.target.value)
                            }}
                        ></input>
                        <label>Email *</label>
                        <input
                            value={email}
                            onChange={(event)=>{
                                setEmail(event.target.value)
                            }}
                        ></input>
                        <label>Password *</label>
                        <input
                            value={password}
                            onChange={(event)=>{
                                setPassword(event.target.value)
                            }}
                        ></input>
                        <button>Create account</button>
                    </form> 
                    <div className="login-register" onClick={()=>{setTab(0)}}>Already have an account?</div>
                </div>
            }
        </div>
    )
}
export default withRouter(Login)