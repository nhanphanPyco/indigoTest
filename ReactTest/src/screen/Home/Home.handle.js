
import constants from '../../constants'


const { TABS } = constants

const triggerTabs = (tab) => {
    console.log('TAB: ', tab);
    switch (tab.name) {
        case TABS.ACCOUNT:
            return {
                name: 'LOCATION',
                title: '',
                content: ''
            }

        case TABS.BIRTHDAY:
            return {
                name: 'BIRTHDAY',
                title: '',
                content: ''
            }

        case TABS.LOCATION:
            return {
                name: 'LOCATION',
                title: '',
                content: ''
            }

        case TABS.PHONE:
            return {
                name: 'PHONE',
                title: '',
                content: ''
            }

        case TABS.PASSWORD:
            return {
                name: 'PASSWORD',
                title: '',
                content: ''
            }
    }
}

export { triggerTabs }