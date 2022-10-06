import homeBanner_1 from './images/home-banner-1.png'
import homeBanner_2 from './images/home-banner-2.png'
import home_title_image_1 from './images/home-title-img-1.png'
import slider_img from './images/SLIDER.png'
import payment_image_1 from './images/payment.png'
import footer_img1 from './images/footer_img1.png'
import footer_img2 from './images/footer_img2.png'
import footer_img3 from './images/footer_img3.png'
import footer_img4 from './images/footer_img4.png'
import { FaFacebookF, FaGoogle, FaJs, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const banners = [
    {
        image: slider_img,
        title: 'perfume',
        subtitle: 'Gelli'
    },
    {
        image: slider_img,
        title: 'perfume',
        subtitle: 'Gelli'
    },
    {
        image: slider_img,
        title: 'perfume',
        subtitle: 'Gelli'
    },
    
];

export const cateBanners = [
    {
        image: homeBanner_1,
        title: 'perfume <br> for <strong>man</strong>',
        description: 'over 268 products'
    },
    {
        image: homeBanner_2,
        title: 'perfume <br> for <strong>women</strong>',
        description: 'over 268 products'
    },
    {
        image: homeBanner_2,
        title: 'perfume <br> <strong>colection</strong>',
        description: 'over 268 products'
    },
    
]

export const footer_layout = [
    {
        image: {
            url: footer_img1
        },
        section: [
            {
                type: 0,
                title: '<p>Gelli</p> <span>premium template</span>',
                description: 'such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement',
                text_link: [
                ],
                logo: [
                ],
                input: null
            },
            {
                type: 1,
                title: '',
                text_link: [
                    {
                        text: '© 2022 Shopee. Tất cả các quyền được bảo lưu.',
                        link: ''
                    }
                ],
                logo: [
                    {
                        image: payment_image_1,
                        url: '',
                    }
                ],
                input: null
            }
        ]
    },
    {
        image: {
            url: footer_img2
        },
        section: [
            {
                type: 2,
                title: 'address',
                text_link: [
                    {
                        text: 'thai nguyen',
                        link: ''
                    }
                ],
                logo: [

                ],
                input: null
            },
            {
                type: 2,
                title: 'phone',
                text_link: [
                    {
                        text: '0398527047',
                        link: ''
                    }
                ],
                logo: [

                ],
                input: null
            },
            {
                type: 2,
                title: 'address',
                text_link: [
                    {
                        text: 'email@gmail.com',
                        link: ''
                    }
                ],
                logo: [

                ],
                input: null
            },
        ]
    },
    {
        image: {
            url: footer_img3
        },
        section: [
            {
                type: 3,
                title: 'useful link',
                text_link: [
                    {
                        text: 'home',
                        link: ''
                    },
                    {
                        text: 'home',
                        link: ''
                    },
                    {
                        text: 'home',
                        link: ''
                    },
                    {
                        text: 'home',
                        link: ''
                    },
                    {
                        text: 'home',
                        link: ''
                    },
                    {
                        text: 'home',
                        link: ''
                    },
                    {
                        text: 'home',
                        link: ''
                    },
                    {
                        text: 'home',
                        link: ''
                    },
                    {
                        text: 'home',
                        link: ''
                    },
                    {
                        text: 'home',
                        link: ''
                    },
                    {
                        text: 'home',
                        link: ''
                    },
                    {
                        text: 'home',
                        link: ''
                    }
                ],
                logo: [

                ],
                input: null
            },
        ]
    },
    {
        image: {
            url: footer_img4
        },
        section: [
            {
                type: 4,
                title: 'subscribe',
                description: 'such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement',
                text_link: [
                    {
                        text: '',
                        link: ''
                    }
                ],
                logo: [

                ],
                input: [],
                socialMedial: []
            },
            {
                type: 4,
                title: '',
                
                text_link: [
                    {
                        text: '',
                        link: ''
                    }
                ],
                logo: [

                ],
                input: [
                    {
                    placeholder: 'Email Address',
                    icon: ''
                    },
                ],
                socialMedial: []
            }
            ,
            {
                type: 4,
                title: 'contact us',
                
                text_link: [
                    {
                        text: '',
                        link: ''
                    }
                ],
                logo: [

                ],
                socialMedial: [
                    {
                        image: <FaFacebookF/>,
                        url: 'http://www.google.com'
                    },
                    {
                        image: <FaTwitter/>,
                        url: 'http://www.google.com'
                    },
                    {
                        image: <FaGoogle/>,
                        url: 'http://www.google.com'
                    },
                    {
                        image: <FaLinkedin/>,
                        url: 'http://www.google.com'
                    },
                    {
                        image: <FaJs/>,
                        url: 'http://www.google.com'
                    }
                ],
                input: [],
            }
        ]
    }
]
