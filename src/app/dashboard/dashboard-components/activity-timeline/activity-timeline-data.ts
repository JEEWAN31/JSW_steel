export interface Activity{
    name:string;
    image:string;
    commentTime:string;
    comment:string;

    bottomImage:string;
    buttonColor:string;

}

export const activities:Activity[]=[
    {
        name:'Allipera',
        image:'assets/images/users/Allipera.jpeg',
        commentTime:'5 minute ago',
        comment:'FE 500-D should be kept at LOT no 16',

        bottomImage:'',
        buttonColor:'accent'
    
    },
    {
        name:'Vikas (Logistic)',
        image:'assets/images/users/Vishal_Logistics.jpeg',
        commentTime:'3 minute ago',
        comment:'Loading of FE 550-D is completed',
    
        bottomImage:'',
        buttonColor:'primary'
    
    },
    {
        name:'Akkidasu Kiran Prasad',
        image:'/assets/images/users/Kiran_Sir.jpeg',
        commentTime:'1 minute ago',
        comment:'Todays Production Plan',
    
        bottomImage:'assets/images/big/img1.jpg',
        buttonColor:''
    
    },

]