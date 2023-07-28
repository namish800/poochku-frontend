import React from 'react'

const UserAccount = () => {
  return (
    <div className='userForm'>
        <form>
            <div className='userFormRow'>
                <div>
                    <label>User Name</label>
                    <input type="text" placeholder='Enter User Name'/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default UserAccount