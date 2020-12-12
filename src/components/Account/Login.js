import React, { useState } from 'react'
import '../../App.css'
import '../../Styles/Login.css'

export default function Login(props) {

    const [tab, setTab] = useState(0)

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
                    <form className="flex-col">
                        <label>Email</label>
                        <input></input>
                        <label>Password</label>
                        <input></input>
                        <button>Sign in</button>
                    </form>
                    <div className="login-forgot">Forgot password?</div>
                    <div className="login-register" onClick={()=>{setTab(1)}}> New user? Create account</div>
                </div>
            }
            { tab === 1 &&
                <div className="login-box flex-col">
                    <div className="login-box-title"><strong>Create</strong> acount</div>
                    <form className="flex-col">
                        <label>Name *</label>
                        <input></input> 
                        <label>Email *</label>
                        <input></input>
                        <label>Password *</label>
                        <input></input>
                        <button>Create account</button>
                    </form> 
                    <div className="login-register" onClick={()=>{setTab(0)}}>Already have an account?</div>
                </div>
            }
        </div>
    )
}