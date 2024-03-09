import { ReactNode } from "react";
import { CiLogout } from "react-icons/ci";
import { IoIosPerson } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";


type TProfilePopIconLien = {
    icon: ReactNode,
    route: string,
    text: string,
    isSubmenu: boolean
}[]

const ProfilePopIconLienMock : TProfilePopIconLien = [
    {
        icon: <IoIosPerson />,
        route: '/profil',
        text: 'Profil',
        isSubmenu: false
    },
    {
        icon: <IoSettingsSharp />,
        route: '/profil/parametre',
        text: 'Parametre',
        isSubmenu: false
    },
    {
        icon: <CiLogout />,
        route: '/loginOut',
        text: 'Login Out',
        isSubmenu: false
    },

]

export default ProfilePopIconLienMock