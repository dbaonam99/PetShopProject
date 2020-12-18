import React, { useContext, useEffect, useState } from 'react';
import '../../App.css';
import '../../Styles/Account.css'
import {
    withRouter
} from 'react-router-dom'
import { UserContext } from '../../contexts/User'
import axios from 'axios' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faHome, faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';

function AccountInfo(props) {

    const [tinh, setTinh] = useState([])
    const [huyen, setHuyen] = useState([])

    const { 
        userInfo,
        setUserInfoFunc
    } = useContext(UserContext); 

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userAvt, setUserAvt] = useState("")
    const [file, setFile] = useState("")
    const [provinceId, setProvinceId] = useState("")
    const [userTinh, setUserTinh] = useState(null)
    const [userHuyen, setUserHuyen] = useState(null)
    const [userAddress, setUserAddress] = useState(null) 
    const [orderList, setOrderList] = useState([])
    const [tab, setTab] = useState(0)
    
    useEffect(()=>{  
        if (userInfo) {
            setUserName(userInfo.userName)
            setUserEmail(userInfo.userEmail)
            setUserPhone(userInfo.userPhone)
            setUserAvt(userInfo.userAvt)
            setUserAddress(userInfo.userAddress) 
            if (userInfo.userTinh !== "") {
                axios.get(`http://localhost:4000/vietnam`)
                .then(res => {
                    setTinh(res.data[0].tinh)
                    setHuyen(res.data[0].huyen)
                    res.data[0].tinh.filter((item)=>{ 
                        if (userInfo.userTinh === item.name) {
                            setProvinceId(item.id)
                        }
                        return null
                    })
                }
                ) 
                setUserTinh(userInfo.userTinh)
            }
            if (userInfo.userHuyen !== "") {
                setUserHuyen(userInfo.userHuyen)
            }
            axios.get(`http://localhost:4000/order`)
                .then(res => {
                const orderList2 = []
                for (let i in res.data) {
                    if (res.data[i].orderEmail === userInfo.userEmail) {
                        orderList2.push(res.data[i])
                    }
                }
                setOrderList(orderList2)
                }
            )
        } else {
            props.history.push("/login")
        }
    },[userInfo])

    useEffect(()=> {
        axios.get(`http://pe.heromc.net:4000/users/${localStorage.getItem('user-id')}`, { 
            headers: {"authorization" : `Bearer ${localStorage.getItem('token')}`}
        })
        .then(res => { 
            setUserInfoFunc(res.data.user);
        })
        .catch(err => {
            console.log(err);
        })
    },[]) 

    const submitInfo = (event) => {
        event.preventDefault()
        const config = {
                headers: {
                'content-type': 'multipart/form-data'
                }
        }
        const formData = new FormData();
        const imageArr = Array.from(file);
        imageArr.forEach(image => {
            formData.append('userAvt', image);
        })
        formData.append("userName", userName);
        formData.append("userEmail", userEmail);
        formData.append("userPassword", userPassword);
        formData.append("userPhone", userPhone);
        formData.append("userTinh", userTinh);
        formData.append("userHuyen", userHuyen);
        formData.append("userAddress", userAddress);
        localStorage.removeItem('token')
        axios.post(`http://localhost:4000/users/update/${userInfo._id}`, formData, config)
        .then(res => {
            alert("Sửa thành công!")
            setUserInfoFunc(res.data.user);
            localStorage.setItem('token', res.data.token);
            window.location.reload(false);
        })
        .catch(err => {
            alert("Lỗi!")
            console.log(err.response.data);
        }) 
    }  

    return(
        <div className='Account flex'>
            <div className="account-menu flex-col">
                <div 
                    className="account-menu-home"
                    onClick={()=>{props.history.push("/")}}
                >
                    <FontAwesomeIcon icon={faHome} className="icon"/>
                </div>
                <div className="account-avt flex-center">
                    <img src={userAvt} alt=""></img>
                    <div className="account-name">{userName}</div>
                </div>
                <div className="account-menu-list">
                    <div className={tab === 0 ? "account-menu-item menu-item-active flex" : "account-menu-item flex"} onClick={()=>{setTab(0)}}>
                        <FontAwesomeIcon icon={faUserAlt} className="icon"/>
                        Tài khoản
                    </div>
                    <div className={tab === 1 ? "account-menu-item menu-item-active flex" : "account-menu-item flex"} onClick={()=>{setTab(1)}}>
                        <FontAwesomeIcon icon={faFileAlt} className="icon"/>
                        Đơn hàng
                    </div>
                    <div className={tab === 2 ? "account-menu-item menu-item-active flex" : "account-menu-item flex"} onClick={()=>{
                        localStorage.removeItem('user-id')
                        localStorage.removeItem('token');
                        sessionStorage.removeItem('chat-id')
                        window.location.reload(false);}}>
                        <FontAwesomeIcon icon={faSignOutAlt} className="icon"/>
                        Đăng xuất
                    </div>
                </div>
            </div>
            { tab === 0 &&
                <div className="account-main flex-col">
                    <div className="account-title">
                        <h1>Thông tin tài khoản</h1>
                        <p>Quản lý thông tin tài khoản</p>
                    </div>
                    <div className="account-body">
                        <form onSubmit={submitInfo} encType="multipart/form-data" >
                            <div className="account-body-row flex">
                                <div className="account-body-left flex">Tên</div>
                                <div className="account-body-right">
                                    <input 
                                    className="input"
                                    type="text" name="title"  
                                    value={userName}
                                    onChange={(event)=>{
                                        setUserName(event.target.value)
                                    }} 
                                    ></input>
                                </div>
                            </div>
                            <div className="account-body-row flex">
                                <div className="account-body-left flex">Ảnh đại diện </div>
                                <div className="account-body-right"> 
                                    <input 
                                        className="input"
                                        onChange={(event) => {
                                        const files = event.target.files;
                                        setUserAvt(URL.createObjectURL(files[0]))
                                        const fileArr = Array.prototype.slice.call(files)
                                        fileArr.forEach(item=>{
                                            setFile(file=>[...file, item])
                                        })
                                        }}
                                        type="file"
                                        name="newsImg"
                                        className="noborder"
                                        multiple="multiple"
                                        style={{height: '30px'}}
                                    ></input>
                                    <div className="flex" style={{ overflowY: 'hidden', flexWrap:'wrap'}}> 
                                        <img  
                                        className="accountinfo-editavt-img"
                                        src={userAvt} 
                                        alt=""
                                        width="80px"
                                        height="80px"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                            <div className="account-body-row flex">
                                <div className="account-body-left flex">Email</div>
                                <div className="account-body-right">
                                    <input 
                                        className="input"
                                        type="text" 
                                        value={userEmail}
                                        onChange={(event)=>{
                                        setUserEmail(event.target.value)
                                        }}
                                    ></input>
                                </div>
                            </div> 
                            <div className="account-body-row flex">
                                <div className="account-body-left flex">SĐT</div>
                                <div className="account-body-right">
                                    <input 
                                        className="input"
                                        type="text" 
                                        value={userPhone}
                                        onChange={(event)=>{
                                        setUserPhone(event.target.value)
                                        }}
                                    ></input>
                                </div>
                            </div> 
                            <div className="account-body-row flex">
                                <div className="account-body-left flex">Tỉnh</div>
                                <div className="account-body-right"> 
                                    <select 
                                        className="input"
                                        value={userTinh || ''}
                                        onChange={(event)=>{
                                        setProvinceId(event.target.selectedIndex)
                                        setUserTinh(event.target.value)
                                        }}
                                    >
                                        <option defaultValue disabled>select a province</option>
                                        {tinh.map((item, index) => {
                                        return (
                                            <option 
                                                    key={index}
                                                    value={item.name}
                                            >{item.name}</option>
                                        )
                                        })}
                                    </select>
                                </div>
                            </div> 
                            <div className="account-body-row flex">
                                <div className="account-body-left flex">Huyện</div>
                                <div className="account-body-right"> 
                                    <select 
                                        className="input"
                                        value={userHuyen || ''}
                                        onChange={(event)=>{
                                            setUserHuyen(event.target.value)
                                        }}
                                    >
                                        <option defaultValue disabled>select a district</option>
                                        {huyen.map((item, index) => { 
                                            if (item.tinh_id === provinceId) { 
                                                return (
                                                    <option
                                                        key={index}
                                                        value={item.name}
                                                        >{item.name}</option>
                                                )
                                            }
                                            return null
                                        })}
                                    </select>
                                </div>
                            </div> 
                            <div className="account-body-row flex">
                                <div className="account-body-left flex">Địa chỉ</div>
                                <div className="account-body-right"> 
                                    <input 
                                        type="text"
                                        className="input"
                                        name="phone" 
                                        value={userAddress || ''}
                                        onChange={(event)=>{
                                        setUserAddress(event.target.value)
                                        }} 
                                    ></input>
                                </div>
                            </div> 
                            <div className="account-body-row flex">
                                <div className="account-body-left flex">Mật khẩu mới</div>
                                <div className="account-body-right"> 
                                    <input 
                                        type="password"
                                        className="input"
                                        name="email" 
                                        value={userPassword}
                                        onChange={(event)=>{
                                            setUserPassword(event.target.value)
                                        }} 
                                    ></input>
                                </div>
                            </div> 
                            <div className="aaccount-body-row flex-center">
                                <button className="account-btn">Cập nhật tài khoản</button>
                            </div>
                     </form>
                    </div>
                </div>
            }
            {
                tab === 1 && 
                <div className="account-main flex-col">
                    <div className="account-title">
                        <h1>Thông tin đơn đặt hàng</h1>
                        <p>Danh sách các đơn hàng đã đặt</p>
                    </div>
                    <div className="account-body">
                        <table className="dashboard-table">
                           <tbody>
                              <tr className="dashboard-order"> 
                                 <th className="table-new-title table-order-title"> 
                                    Thông tin ship
                                 </th> 
                                 <th className="table-new-title table-order-title"> 
                                    Ngày
                                 </th> 
                                 <th className="table-new-title table-order-title"> 
                                    Thanh toán
                                 </th> 
                                 <th className="table-new-title table-order-title"> 
                                    Số món hàng
                                 </th> 
                                 <th className="table-new-title table-order-title"> 
                                    Tổng đơn hàng
                                 </th> 
                              </tr>
                              {
                                 orderList.reverse().map((item, index) => {
                                    const date = new Date(item.orderDate)
                                    const day = date.getDate()
                                    const month = date.getMonth() + 1
                                    const year = date.getFullYear()
                                    var totalItem = 0;
                                    for (let i in item.orderList) {
                                          totalItem += item.orderList[i].amount
                                    }
                                    return (
                                          <tr key={index} className="mobile-table"> 
                                             <td> 
                                                <div className="flex" style={{alignItems: 'center',margin: '10px 0'}}>
                                                      <p 
                                                         style={{wordWrap: 'break-word', WebkitLineClamp: '3'}}
                                                      >{item.orderAddress}, {item.orderHuyen}, {item.orderTinh}</p>
                                                </div> 
                                             </td>
                                             <td>
                                                <p>{day}-{month}-{year}</p>
                                             </td>
                                             <td>
                                                <p style={{textTransform: 'capitalize'}}>{item.orderPaymentMethod}</p>
                                             </td>
                                             <td>
                                                {   typeof(totalItem) === 'number' &&
                                                         <div key={index} className="flex" style={{justifyContent: 'space-between'}}>
                                                            {/* <p style={{margin: '10px 0', width: '100%', WebkitLineClamp: '2'}}>{virtualArr.productName}</p> */}
                                                            <p style={{margin: '10px 0', width: '50px', marginLeft: '20px'}}>{totalItem}</p>
                                                         </div>
                                                }
                                             </td>
                                             <td>
                                                <p>{item.orderTotal} đ</p>
                                             </td> 
                                          </tr>
                                    )
                                 })
                              }
                           </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    )
}

export default withRouter(AccountInfo);