import {IUser} from "../../../types";
import {AnimatePresence, motion} from "framer-motion";
import {Typography} from "../../atoms/Typography";
import {IconButton} from "../../atoms/Buttons/IconButton";
import {Plus} from "lucide-react";

export const PeopleCard = ({ user }: { user: IUser }) => {
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={'shadow-md bg-white rounded-md max-w-xl'}>
                <motion.div>
                    <img src={user.thumbnail} className={'rounded-t-md w-[100%] block'} alt="user-thumbnail"/>
                </motion.div>
                <motion.div className={'flex items-center justify-between p-6'}>
                    <div className="flex items-center space-x-2">
                        <img src={user.avatar} className={'w-10 h-10 rounded-full'} alt="avatar" />
                        <div className="flex flex-col items-start">
                            <Typography variant={'h5'}>{user.name}</Typography>
                            <Typography variant={'small'} className={'!text-neutral-500'}>{user.short_url}</Typography>
                        </div>
                    </div>
                    <IconButton Icon={Plus}>Follow</IconButton>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}