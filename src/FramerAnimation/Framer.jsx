export const textVariants = {
    hidden: { 
        opacity: 0, 
        y: 20 
    },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.7, 
            delay: 0.2 
        }},
};

export const footeerImgVariants = {
    hidden: { 
        opacity: 0, 
        y: 10 
    },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 1, 
            delay: 0.3 
        }},
};

export const fadeInAnimationCompanies = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.03 * index,
        },
    })
};