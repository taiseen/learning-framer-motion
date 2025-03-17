// Animation variants for different components
export const tooltipVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 25
        }
    }
};

export const resultVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: {
        opacity: 1,
        height: "auto",
        marginTop: "1.5rem",
        transition: {
            height: {
                type: "spring",
                stiffness: 500,
                damping: 30
            },
            opacity: {
                duration: 0.2
            }
        }
    },
    exit: {
        opacity: 0,
        height: 0,
        marginTop: 0,
        transition: {
            height: {
                type: "spring",
                stiffness: 500,
                damping: 30
            },
            opacity: {
                duration: 0.2
            }
        }
    }
};

export const backgroundBlobVariants = {
    animate: {
        scale: [1, 1.1, 0.9, 1],
        translate: [
            '0px 0px',
            '30px -50px',
            '-20px 20px',
            '0px 0px'
        ],
        transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};
