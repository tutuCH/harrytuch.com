import { PersonalInfo, NavBarTabs, TabsDef } from "./dataDef";

export const landingInfo = {
    subtitle: "Nice to meet you, I'm",
    title: 'Harry Tu'
}
export const navBarInfos: NavBarTabs = {
    title: 'Hi there',
}

export const basicInfo: PersonalInfo = {
    name: 'Tu Chen Hsien',
    description: 'Software Engineer',
    age: 24,    
}

export const pastExp: TabsDef = {
    alignment: 'vertical',
    items: [
        {
            tabsHeader: 'GienTech',
            title: 'Developer',
            period: '2021 - 2022',
            content: ['experience 1', 'experience 2', 'experience 3'],
        }, 
        {
            tabsHeader: 'Jarvix',
            title: 'Software Engineer Intern',
            period: '2021 - 2022',
            content: ['experience 1', 'experience 2', 'experience 3'],
        }
    ]
  }