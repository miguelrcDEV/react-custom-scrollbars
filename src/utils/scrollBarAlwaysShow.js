import { actualBarWidth } from './getScrollbarWidth';

function scrollBarAlwaysShow() {
    return !!actualBarWidth();
}

export default scrollBarAlwaysShow;
