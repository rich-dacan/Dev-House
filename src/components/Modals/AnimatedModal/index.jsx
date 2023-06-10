import {motion} from 'framer-motion'
function AnimatedModal ({children}) {

    return (
        <motion.div
        //variants={animations}
        initial={{transform: "scale(0)"}}
        animate={{transform: "scale(1)", transition: {duration: 0.5}}}
        //transtion={{duration:4}}
        exit={{transform: "scale(0)", transition: {duration: 0.3}}}
        >
            {children}
        </motion.div>
    )

}

export default AnimatedModal