import { lazy } from "react";

import pageTransitionsRoutes from "../components/pageTransitions/routes";

const ModalOpeningAnimation = lazy(() => import('../components/modalOpeningAnimation'));
const AnimationPlaceholder = lazy(() => import('../components/animationPlaceholder'));
const PageScrollNavbarHide = lazy(() => import('../components/pageScrollNavbarHide'));
const StaggeredAnimation = lazy(() => import('../components/staggeredAnimation'));
const MountingAnimation = lazy(() => import('../components/mountingAnimation'));
const AnimationEffects = lazy(() => import('../components/animationEffects'));
const BoxOpenDropDown = lazy(() => import('../components/boxOpenDropDown'));
const PageTransitions = lazy(() => import('../components/pageTransitions'));
const ExpandableCard = lazy(() => import('../components/expandableCard'));
const AnimatedNavbar = lazy(() => import('../components/animatedNavbar'));
const AnimatedBorder = lazy(() => import('../components/animatedBorder'));
const DateCalculator = lazy(() => import('../components/dateCalculator'));
const ToggleBtnContainer = lazy(() => import('../components/toggleBtn'));
const TextAnimation = lazy(() => import('../components/textAnimation'));
const TabListContainer = lazy(() => import('../components/tabHover'));
const AuroraEffect = lazy(() => import('../components/auroraEffect'));
const Example = lazy(() => import('../components/examples/Example'));
const PopUpEffect = lazy(() => import('../components/popUp'));
const ChatApp = lazy(() => import('../components/chat'));


// const CurvedSidebarMenu = lazy(() => import('../components/curvedSidebarMenu'));
// const MultilevelMenu = lazy(() => import('../components/multilevelMenu'));


export const routes = [
    {
        title: 'Example',
        path: '/example',
        component: Example,
        date: '22-May-24',
    },
    {
        title: 'Aurora Effect',
        path: '/aurora-effect',
        component: AuroraEffect,
        date: '23-May-24',
    },
    {
        title: 'Staggered Animation',
        path: '/staggered-animation',
        component: StaggeredAnimation,
        date: '24-May-24',
    },
    {
        title: 'Text Animation',
        path: '/text-animation',
        component: TextAnimation,
        date: '26-May-24',
    },
    {
        title: 'PopUp',
        path: '/popUp',
        component: PopUpEffect,
        date: '28-May-24',
    },
    {
        title: 'Animation Effects',
        path: '/animation-effects',
        component: AnimationEffects,
        date: '29-May-24',
    },
    {
        title: 'Modal Opening Animation',
        path: '/modal-opening-animation',
        component: ModalOpeningAnimation,
        date: '09-June-24',
    },
    {
        title: 'Mounting Animation',
        path: '/mounting-animation',
        component: MountingAnimation,
        date: '16-June-24',
    },
    {
        title: 'Page Scroll - Navbar Hide',
        path: '/page-Scroll-Navbar-Hide',
        component: PageScrollNavbarHide,
        date: '18-June-24',
    },
    {
        title: 'Tab Hover Animation',
        path: '/tab-hover-effect',
        component: TabListContainer,
        date: '19-June-24',
    },
    {
        title: 'Box Open DropDown',
        path: '/box-open-dropdown',
        component: BoxOpenDropDown,
        date: '23-September-24',
    },
    {
        title: 'Page Transitions',
        path: '/page-transitions',
        component: PageTransitions,
        date: '24-February-25',
        isChildren: true,
        childRoutes: pageTransitionsRoutes,
    },
    {
        title: 'Expandable Card',
        path: '/expandable-card',
        component: ExpandableCard,
        date: '25-February-25',
    },
    {
        title: 'Animated Navbar',
        path: '/animated-navbar',
        component: AnimatedNavbar,
        date: '01-March-25',
    },
    {
        title: 'Animation Placeholder',
        path: '/animated-placeholder',
        component: AnimationPlaceholder,
        date: '03-March-25',
    },
    {
        title: 'Chat App',
        path: '/chat-app',
        component: ChatApp,
        date: '10-March-25',
    },
    {
        title: 'Toggle Btn',
        path: '/toggle-btn',
        component: ToggleBtnContainer,
        date: '11-March-25',
    },
    {
        title: 'Animated Border',
        path: '/animated-border',
        component: AnimatedBorder,
        date: '12-March-25',
    },
    {
        title: 'Date Calculator',
        path: '/date-calculator',
        component: DateCalculator,
        date: '18-March-25',
    },
    // {
    //     title: 'Curved Sidebar Menu',
    //     path: '/curved-sidebar-menu',
    //     component: CurvedSidebarMenu,
    //     date: '21-June-24',
    // },
    // {
    //     title: 'Multilevel Menu by JSON',
    //     path: '/multilevelMenu',
    //     component: MultilevelMenu,
    //     date: '22-June-24',
    // },    
]