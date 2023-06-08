import {motion} from 'framer-motion'
function AnimatedPage ({children}) {


    return (
        <motion.div
        //variants={animations}
        initial={{width:0}}
        animate={{width:"100%", transition: {duration: 0.5}}}
        //transtion={{duration:4}}
        exit={{x: window.innerWidth, transition: {duration: 0.3}}}
        >
            {children}
        </motion.div>
    )

}

export default AnimatedPage