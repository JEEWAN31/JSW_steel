export interface Contact {
    image: string;
    class: string;
    name: string;
    email: string;
}

export const contacts: Contact[] = [
    {
        image: 'assets/images/users/Allipera.jpeg',
        class: 'online',
        name: 'Allipera',
        email: 'allipera@jsw.in'
    },
    {
        image: 'assets/images/users/Visahl_Logistics.jpeg',
        class: 'busy',
        name: 'Visahl',
        email: 'Vishal@jsw.in'
    },
    {
        image: 'assets/images/users/Kiran_Sir.jpeg',
        class: 'offline',
        name: 'Kiran Sir',
        email: 'akkidasu.kiran@jsw.in'
    },
]