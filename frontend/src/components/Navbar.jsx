
import React from 'react'
import {PlusIcon} from 'lucide-react'
import {Link} from 'react-router'
import { LogOut } from 'lucide-react'


const Navbar = ({loggedInUser=null, logout}) => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className='flex item-center justify-between'>
                <h1 className='text-3xl font-bold text-primary font-mono tracking-tighter'>
                    Mind-Flow
                </h1>
                <div className='flex items-center gap-4'>
                    <Link to={"/create"} className="btn btn-primary">
                        <PlusIcon className='size-5' /> <span>Add note</span>
                    </Link>
                </div>
                <div className=''>
                    {loggedInUser && <button className='btn btn-outline btn-dark' onClick={logout}>Logout<LogOut /></button>}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
