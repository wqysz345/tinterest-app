import  {ITeam} from "../../../types";
import {AnimatePresence, motion} from "framer-motion";
import {Typography} from "../../atoms/Typography";
import {IconButton} from "../../atoms/Buttons/IconButton";
import {Plus} from "lucide-react";

export const TeamCard = ({ team }: { team: ITeam }) => {
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={'shadow-md bg-white rounded-md max-w-xl'}>
                <motion.div className={'flex items-center justify-between p-6'}>
                    <Typography variant={'h5'} >{team.name}</Typography>
                    <IconButton Icon={Plus}>Send Request</IconButton>
                </motion.div>
                <motion.div className={'px-6 pb-2'}>
                    <Typography variant={'paragraph'}>{team.description}</Typography>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}