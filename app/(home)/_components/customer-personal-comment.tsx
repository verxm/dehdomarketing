'use client'

import ScrollDownIndicator from "@/components/scroll-down-indicator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface CustomerPersonalCommentParameters {
    comment: string,
}

const CustomerPersonalComment = ({ comment }: CustomerPersonalCommentParameters) => {
    const dehProfileImagePath = "/perfil-deh.jpeg";

    return (
        <Alert className="px-2">
            <div className="flex flex-row gap-3 items-center py-2">
                <Avatar>
                    <AvatarImage className="object-cover" src={dehProfileImagePath} />
                    <AvatarFallback>D</AvatarFallback>
                </Avatar>
                <AlertTitle className="italic text-gray-600">~ Deh</AlertTitle>
            </div>

            <AlertDescription className="italic h-[150px] overflow-y-auto whitespace-pre-line">
                <motion.div
                    whileInView={{y: [150, 0], opacity: [0, 1], transition: {duration: 1}}}
                    viewport={{once: true}} >
                    "{comment}"
                </motion.div>
            </AlertDescription>
            <ScrollDownIndicator />
        </Alert>
    );
}

export default CustomerPersonalComment;