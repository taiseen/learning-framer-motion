import StaggeredAnimation from "../components/staggeredAnimation";
// import AnimationEffects from "../components/animationEffects";
import TextAnimation from "../components/textAnimation"
import AuroraEffect from "../components/auroraEffect";
import Example from "../components/examples/Example";
import PopUpEffect from "../components/popUp"

export const routes = [
    {
        title: 'Example',
        path: '/example',
        component: Example,
    },
    {
        title: 'PopUp',
        path: '/popUp',
        component: PopUpEffect,
    },
    {
        title: 'Aurora Effect',
        path: '/auroraEffect',
        component: AuroraEffect,
    },
    {
        title: 'Text Animation',
        path: '/textAnimation',
        component: TextAnimation,
    },
    {
        title: 'Staggered Animation',
        path: '/staggeredAnimation',
        component: StaggeredAnimation,
    },
    // {
    //     title: 'Animation Effects',
    //     path: '/animationEffects',
    //     component: AnimationEffects,
    // },
]