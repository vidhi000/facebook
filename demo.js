const User = [
    {
        _id: 1,
        firstName : "Vidhi",
        lastName : "Rana",
        DOB : new Date("2002-04-17"),
        email : "vidhi@gmail.com",
        password : "vidhi123",
        contact : 9157419206,
        about : "Node.js Intern",
        createdAt : new Date(),
        location : "Ahemdabad",
        address : "Palm medows",
        profile_image : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
        cover_image : "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"  

    },
    {
        _id: 2,
        firstName : "Dhruvil",
        lastName : "Rana",
        DOB : new Date("2005-02-06"),
        email : "dhruvil@gmail.com",
        password : "dhruvil123",
        contact : 9898455898,
        about : "Student",
        createdAt : new Date(),
        location : "Khambhat",
        address : "Chitari Bazar",
        profile_image : "https://st.depositphotos.com/1799092/4316/i/600/depositphotos_43160393-stock-photo-a-beautiful-landscape-of-the.jpg",
        cover_image : "https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg"  

    },
    {
        _id: 3,
        firstName : "Joy",
        lastName : "Rana",
        DOB : new Date("2015-12-14"),
        email : "joy@gmail.com",
        password : "joy123",
        contact : 7895412589,
        about : "Student",
        createdAt : new Date(),
        location : "Khambhat",
        address : "Chitari Bazar",
        profile_image : "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
        cover_image : "https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg"  

    },
    {
        _id: 4,
        firstName : "Unnati",
        lastName : "Bhalia",
        DOB : new Date("2002-01-24"),
        email : "unnati@gmail.com",
        password : "unnati123",
        contact : 7854125895,
        about : "Intern",
        createdAt : new Date(),
        location : "Rajkot",
        address : "Rajkot",
        profile_image : "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg",
        cover_image : "https://assets.hongkiat.com/uploads/100-absolutely-beautiful-nature-wallpapers-for-your-desktop/blue-sea-sunset.jpg"  

    },
    {
        _id: 5,
        firstName : "Heta",
        lastName : "Sharma",
        DOB : new Date("2001-12-05"),
        email : "heta@gmail.com",
        password : "heta123",
        contact : 9510577259,
        about : "Medical student",
        createdAt : new Date(),
        location : "Anand",
        address : "Anand",
        profile_image : "https://www.rd.com/wp-content/uploads/2020/04/GettyImages-1093840488-5-scaled.jpg",
        cover_image : "https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg"  

    },
        {
        _id: 6,
        firstName : "Ayushi",
        lastName : "Parikh",
        DOB : new Date("2002-04-15"),
        email : "ayushi@gmail.com",
        password : "ayushi123",
        contact : 7854125894,
        about : "Intern",
        createdAt : new Date(),
        location : "Ahemdabad",
        address : "Ahemdabad",
        profile_image : "https://img.freepik.com/premium-photo/beautiful-emerald-lake-yoho-national-park-british-columbia-canada_131985-177.jpg",
        cover_image : "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg"  

    }
]


const pages = [
{
_id : 1,
user_id :1,
pageName :"vidhi17",
pageCategory: 1,
bio : "this is personal page",
createdAt : new Date(),
profile_image : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
cover_image : "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"  

},
{
_id : 2,
user_id :2,
pageName :"Dhruvil6",
pageCategory: 2,
bio : "this is bussiness page",
createdAt : new Date(),
profile_image : "https://static.wixstatic.com/media/bb1bd6_9e43625c62264b1293fa4b86cccc05f3~mv2.png/v1/fill/w_640,h_430,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bb1bd6_9e43625c62264b1293fa4b86cccc05f3~mv2.png",
cover_image : "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg"  

},
{
    _id : 3,
    user_id :3,
    pageName :"joy14",
    pageCategory: 2,
    bio : "this is bussiness page",
    createdAt : new Date(),
    profile_image : "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    cover_image : "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg"  
    
},
 {  _id : 4,
    user_id :4,
    pageName :"unnati24",
    pageCategory: 1,
    bio : "this is personal page",
    createdAt : new Date(),
    profile_image : "https://static.wixstatic.com/media/bb1bd6_9e43625c62264b1293fa4b86cccc05f3~mv2.png/v1/fill/w_640,h_430,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bb1bd6_9e43625c62264b1293fa4b86cccc05f3~mv2.png",
    cover_image : "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg"  
    },
    {
    _id : 5,
    user_id :5,
    pageName :"heta05",
    pageCategory: 1,
    bio : "this is personal page",
    createdAt : new Date(),
    profile_image : "https://static.wixstatic.com/media/bb1bd6_9e43625c62264b1293fa4b86cccc05f3~mv2.png/v1/fill/w_640,h_430,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bb1bd6_9e43625c62264b1293fa4b86cccc05f3~mv2.png",
    cover_image : "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg"  
   
    },
    {
    _id : 6,
    user_id :6,
    pageName :"ayushi24",
    pageCategory: 2,
    bio : "this is bussiness page",
    createdAt : new Date(),
    profile_image : "https://static.wixstatic.com/media/bb1bd6_9e43625c62264b1293fa4b86cccc05f3~mv2.png/v1/fill/w_640,h_430,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bb1bd6_9e43625c62264b1293fa4b86cccc05f3~mv2.png",
    cover_image : "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg"  
   
    }


]

const posts = [
    {
    _id : 1,
    page_id : 1,
    //user_id
    media : {
        type : "img",
        url : "https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
    },
    content : "this is img",
    createdAt : new Date()
},
{
    _id : 2,
    page_id : 2,
    media : {
        type : "video",
        url : "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"

    },
    content : "this is video",
    createdAt : new Date()

},
{
    _id : 3,
    page_id : 3,
    media : {
        type : "video",
        url : "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    },
    content : "this is video",
    createdAt : new Date()

},
{
    _id : 4,
    page_id : 4,
    media : {
        type : "img",
        url : "https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
    },
    content : "this is img",
    createdAt : new Date()

},
{
    _id : 5,
    page_id : 5,
    media : {
        type : "img",
        url : "https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
    },
    content : "this is img",
    createdAt : new Date()

},
{
    _id : 6,
    page_id : 6,
    media : {
        type : "img",
        url : "https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
    },
    content : "this is img",
    createdAt : new Date()

}

]

const invitation = [
    {
    _id : 1,
    page_id : 1,          
    role : 1,
    status : 1,
    reciever_id : 2    

   },
{
    _id : 2,
    //user_id
    page_id : 2,          
    role : 2,
    status : 2,
    reciever_id : 4  

},
{
    _id : 3,
    page_id : 3,          
    role : 3,
    status : 3,
    reciever_id : 6  

},{
    _id : 4,
    page_id : 1,          
    role : 2,
    status : 2,
    reciever_id : 5  
},
{
    _id : 5,
    page_id : 3,          
    role : 1,
    status : 1,
    reciever_id : 2   

}
,{
    _id : 6,
    page_id : 1,          
    role : 1,
    status : 1,
    reciever_id : 3  

}]