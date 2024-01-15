import React from 'react'
import './style.scss'
import userApi from '../../../services/userApi'
import { useNavigate } from 'react-router-dom'

const SellerRegister = () => {
    const userId = localStorage.getItem("userId")
    const userRole = localStorage.getItem("role")
    const navigate = useNavigate()

    const registerSeller = async () => {
        const data = userApi.updateUser({
            userId,
            role: "seller"
        });
        
        localStorage.setItem('role', data?.user.role);
        navigate("/sellerdashboard")
    }


  return (
    <div className='sellerRegisterWrapper'>
        <section>
            <p>Are you a breeder?</p>
            <p>Register with us to list your pooches!</p>
        </section>
        <section>
            {userId && userRole === "user" ?
                <div className='userForm'>
                    <div>
                        <input type='checkbox' name="register" />
                        <label>I accept the terms and conditions</label>
                    </div>
                    <button onClick={registerSeller}>
                        Register me!
                    </button>
                </div>
                : !userId &&  <div className='notLoggedInForm'>
                    <button>Log In</button>
                </div>
            }
        </section>
    </div>
  )
}

export default SellerRegister