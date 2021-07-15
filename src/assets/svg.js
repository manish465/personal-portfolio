export const Logosvg = () => (
    <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 137.28 102.96'>
        <path
            d='M195.43,277.84a51.48,51.48,0,0,0-102.86,0H75.36v4.32H92.57a51.48,51.48,0,0,0,102.86,0h17.21v-4.32ZM144,328.2A48.2,48.2,0,1,1,192.2,280,48.2,48.2,0,0,1,144,328.2Z'
            transform='translate(-75.36 -228.52)'
        />
        <circle cx='68.64' cy='51.48' r='46.28' />
    </svg>
);

export const Sunsvg = () => (
    <svg
        id='Icon_feather-sun'
        data-name='Icon feather-sun'
        xmlns='http://www.w3.org/2000/svg'
        width='36'
        height='36'
        viewBox='0 0 36 36'>
        <path
            id='Path_7'
            data-name='Path 7'
            d='M25.5,18A7.5,7.5,0,1,1,18,10.5,7.5,7.5,0,0,1,25.5,18Z'
            fill='none'
            stroke='#000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='3'
        />
        <path
            id='Path_8'
            data-name='Path 8'
            d='M18,1.5v3'
            fill='none'
            stroke='#000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='3'
        />
        <path
            id='Path_9'
            data-name='Path 9'
            d='M18,31.5v3'
            fill='none'
            stroke='#000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='3'
        />
        <path
            id='Path_10'
            data-name='Path 10'
            d='M6.33,6.33,8.46,8.46'
            fill='none'
            stroke='#000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='3'
        />
        <path
            id='Path_11'
            data-name='Path 11'
            d='M27.54,27.54l2.13,2.13'
            fill='none'
            stroke='#000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='3'
        />
        <path
            id='Path_12'
            data-name='Path 12'
            d='M1.5,18h3'
            fill='none'
            stroke='#000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='3'
        />
        <path
            id='Path_13'
            data-name='Path 13'
            d='M31.5,18h3'
            fill='none'
            stroke='#000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='3'
        />
        <path
            id='Path_14'
            data-name='Path 14'
            d='M6.33,29.67l2.13-2.13'
            fill='none'
            stroke='#000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='3'
        />
        <path
            id='Path_15'
            data-name='Path 15'
            d='M27.54,8.46l2.13-2.13'
            fill='none'
            stroke='#000'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='3'
        />
    </svg>
);

export const Moonsvg = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='29.246'
        height='29.247'
        viewBox='0 0 29.246 29.247'>
        <path
            id='Icon_metro-moon'
            data-name='Icon metro-moon'
            d='M36.128,34.7A15.024,15.024,0,1,1,20.5,9.952a1.881,1.881,0,0,1,2.4,2.4A11.2,11.2,0,0,0,37.233,26.688a1.878,1.878,0,0,1,2.394,2.4A14.833,14.833,0,0,1,36.128,34.7ZM17.538,16.107A11.266,11.266,0,1,0,34.323,31.084,14.953,14.953,0,0,1,18.5,15.261a10.569,10.569,0,0,0-.958.846Z'
            transform='translate(-10.489 -9.846)'
            fill='#000'
        />
    </svg>
);

export const Closesvg = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30.849'
        height='30.849'
        viewBox='0 0 30.849 30.849'>
        <path
            id='Icon_metro-cross'
            data-name='Icon metro-cross'
            d='M33.138,26.711h0l-9.358-9.358,9.358-9.358h0a.966.966,0,0,0,0-1.363L28.717,2.21a.967.967,0,0,0-1.363,0h0L18,11.568,8.637,2.21h0a.966.966,0,0,0-1.363,0L2.852,6.631a.966.966,0,0,0,0,1.363h0l9.358,9.358L2.852,26.711h0a.966.966,0,0,0,0,1.363l4.421,4.421a.966.966,0,0,0,1.363,0h0L18,23.136l9.358,9.358h0a.966.966,0,0,0,1.363,0l4.421-4.421a.966.966,0,0,0,0-1.363Z'
            transform='translate(-2.571 -1.928)'
            fill='#000'
        />
    </svg>
);

export const Opensvg = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24.123'
        height='21.146'
        viewBox='0 0 24.123 21.146'>
        <path
            id='Icon_open-menu'
            data-name='Icon open-menu'
            d='M0,0V2.89H23.123V0ZM0,8.584v2.89H23.123V8.584Zm0,8.671v2.89H23.123v-2.89Z'
            transform='translate(0.5 0.5)'
            fill='#000'
            stroke='#000'
            stroke-width='1'
        />
    </svg>
);

export const Githubsvg = ({ git }) => (
    <a href={git ? git : "https://github.com/manish465"} target='_blank'>
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='34.875'
            height='34.004'
            viewBox='0 0 34.875 34.004'>
            <path
                id='Icon_awesome-github'
                data-name='Icon awesome-github'
                d='M11.665,27.942c0,.141-.162.253-.366.253-.232.021-.394-.091-.394-.253,0-.141.162-.253.366-.253C11.482,27.668,11.665,27.78,11.665,27.942Zm-2.187-.316c-.049.141.091.3.3.345a.33.33,0,0,0,.436-.141c.042-.141-.091-.3-.3-.366A.361.361,0,0,0,9.478,27.626Zm3.108-.12c-.2.049-.345.183-.323.345.021.141.2.232.415.183s.345-.183.323-.323S12.79,27.485,12.586,27.506ZM17.212.563A16.86,16.86,0,0,0,0,17.719,17.628,17.628,0,0,0,11.918,34.537c.9.162,1.216-.394,1.216-.851,0-.436-.021-2.841-.021-4.317,0,0-4.922,1.055-5.955-2.1,0,0-.8-2.046-1.955-2.573,0,0-1.61-1.1.113-1.083A3.711,3.711,0,0,1,8.03,25.432a3.717,3.717,0,0,0,5.126,1.47,3.908,3.908,0,0,1,1.125-2.37c-3.93-.436-7.9-1.005-7.9-7.77a5.329,5.329,0,0,1,1.659-4.141,6.643,6.643,0,0,1,.183-4.774c1.47-.457,4.852,1.9,4.852,1.9a16.611,16.611,0,0,1,8.831,0s3.382-2.363,4.852-1.9a6.64,6.64,0,0,1,.183,4.774,5.466,5.466,0,0,1,1.814,4.141c0,6.785-4.141,7.327-8.072,7.77a4.158,4.158,0,0,1,1.2,3.263c0,2.37-.021,5.3-.021,5.878,0,.457.323,1.013,1.216.851a17.466,17.466,0,0,0,11.8-16.8C34.875,7.966,26.965.563,17.212.563ZM6.834,24.813c-.091.07-.07.232.049.366.113.112.274.162.366.07.091-.07.07-.232-.049-.366C7.087,24.771,6.926,24.722,6.834,24.813Zm-.759-.57c-.049.091.021.2.162.274a.209.209,0,0,0,.3-.049c.049-.091-.021-.2-.162-.274C6.237,24.152,6.124,24.173,6.075,24.244Zm2.278,2.5c-.113.091-.07.3.091.436.162.162.366.183.457.07.091-.091.049-.3-.091-.436C8.655,26.655,8.445,26.634,8.353,26.747Zm-.8-1.034c-.113.07-.113.253,0,.415s.3.232.394.162a.321.321,0,0,0,0-.436C7.847,25.692,7.664,25.622,7.552,25.713Z'
                transform='translate(0 -0.563)'
                fill='#2e383f'
            />
        </svg>
    </a>
);

export const LinkedInsvg = () => (
    <a href='https://www.linkedin.com/in/manish-sahu-a956a3209?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8ilRMS1iRIC1JWSt086p4g%3D%3D'>
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='31.5'
            height='31.5'
            viewBox='0 0 31.5 31.5'>
            <path
                id='Icon_awesome-linkedin'
                data-name='Icon awesome-linkedin'
                d='M29.25,2.25H2.243A2.26,2.26,0,0,0,0,4.521V31.479A2.26,2.26,0,0,0,2.243,33.75H29.25a2.266,2.266,0,0,0,2.25-2.271V4.521A2.266,2.266,0,0,0,29.25,2.25Zm-19.73,27H4.852V14.217H9.527V29.25ZM7.186,12.164A2.707,2.707,0,1,1,9.893,9.457a2.708,2.708,0,0,1-2.707,2.707ZM27.021,29.25H22.352V21.938c0-1.744-.035-3.987-2.426-3.987-2.433,0-2.805,1.9-2.805,3.86V29.25H12.452V14.217h4.479V16.27h.063a4.917,4.917,0,0,1,4.423-2.426c4.725,0,5.6,3.115,5.6,7.165Z'
                transform='translate(0 -2.25)'
                fill='#2e383f'
            />
        </svg>
    </a>
);

export const Mailsvg = () => (
    <a>
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='34.178'
            height='27'
            viewBox='0 0 34.178 27'>
            <g
                id='Icon_feather-mail'
                data-name='Icon feather-mail'
                transform='translate(2.089 1.5)'>
                <path
                    id='Path_5'
                    data-name='Path 5'
                    d='M6,6H30a3.009,3.009,0,0,1,3,3V27a3.009,3.009,0,0,1-3,3H6a3.009,3.009,0,0,1-3-3V9A3.009,3.009,0,0,1,6,6Z'
                    transform='translate(-3 -6)'
                    fill='none'
                    stroke='#ececeb'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='3'
                />
                <path
                    id='Path_6'
                    data-name='Path 6'
                    d='M33,9,18,19.5,3,9'
                    transform='translate(-3 -6)'
                    fill='none'
                    stroke='#ececeb'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='3'
                />
            </g>
        </svg>
    </a>
);

export const TopRightArrow = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='13.678'
        height='13.678'
        viewBox='0 0 13.678 13.678'>
        <g
            id='Icon_feather-arrow-up-right'
            data-name='Icon feather-arrow-up-right'
            transform='translate(1.414 1.414)'>
            <path
                id='Path_3'
                data-name='Path 3'
                d='M10.5,21.35,21.35,10.5'
                transform='translate(-10.5 -10.5)'
                fill='none'
                stroke='#fff'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
            />
            <path
                id='Path_4'
                data-name='Path 4'
                d='M10.5,10.5H21.35V21.35'
                transform='translate(-10.5 -10.5)'
                fill='none'
                stroke='#fff'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
            />
        </g>
    </svg>
);

export const DesignSvg = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='139.345'
        height='139.345'
        viewBox='0 0 139.345 139.345'>
        <path
            id='Icon_awesome-pencil-ruler'
            data-name='Icon awesome-pencil-ruler'
            d='M29.791,66.418,66.417,29.8,54.41,17.79,37.624,34.576a2.155,2.155,0,0,1-3.051,0l-3.051-3.051a2.155,2.155,0,0,1,0-3.051L48.308,11.688,39.153,2.53a8.632,8.632,0,0,0-12.209,0L2.529,26.945a8.634,8.634,0,0,0,0,12.209ZM135.515,34.631a13.074,13.074,0,0,0,0-18.487L123.2,3.828a13.078,13.078,0,0,0-18.493,0L92.182,16.35,122.99,47.158ZM86.023,22.512,5.194,103.331.088,132.571a5.778,5.778,0,0,0,6.692,6.684l29.243-5.127,80.808-80.811Zm50.792,77.681-9.155-9.155-16.786,16.786a2.155,2.155,0,0,1-3.051,0l-3.051-3.051a2.16,2.16,0,0,1,0-3.051l16.786-16.786L109.546,72.923,72.919,109.544l27.273,27.27a8.632,8.632,0,0,0,12.209,0L136.816,112.4a8.632,8.632,0,0,0,0-12.209Z'
            transform='translate(0 0.001)'
            fill='#07617d'
        />
    </svg>
);

export const DevelopSvg = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='174.192'
        height='139.332'
        viewBox='0 0 174.192 139.332'>
        <path
            id='Icon_awesome-code'
            data-name='Icon awesome-code'
            d='M75.909,139.2l-16.6-4.817a3.271,3.271,0,0,1-2.232-4.055L94.225,2.36A3.271,3.271,0,0,1,98.28.129l16.6,4.817A3.271,3.271,0,0,1,117.113,9L79.964,136.967A3.261,3.261,0,0,1,75.909,139.2ZM44.883,108.663,56.722,96.036a3.266,3.266,0,0,0-.218-4.681L31.847,69.664,56.5,47.973a3.243,3.243,0,0,0,.218-4.681L44.883,30.664a3.269,3.269,0,0,0-4.627-.136L1.039,67.269a3.244,3.244,0,0,0,0,4.763L40.257,108.8a3.245,3.245,0,0,0,4.627-.136Zm89.049.163,39.217-36.768a3.244,3.244,0,0,0,0-4.763L133.932,30.5a3.3,3.3,0,0,0-4.627.136L117.467,43.265a3.266,3.266,0,0,0,.218,4.681l24.657,21.718L117.684,91.354a3.243,3.243,0,0,0-.218,4.681l11.839,12.628A3.27,3.27,0,0,0,133.932,108.827Z'
            transform='translate(0.002 -0.003)'
            fill='#07617d'
        />
    </svg>
);

export const BackDevelopSvg = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='121.925'
        height='139.343'
        viewBox='0 0 121.925 139.343'>
        <path
            id='Icon_awesome-database'
            data-name='Icon awesome-database'
            d='M121.925,19.906V32.347c0,10.964-27.306,19.906-60.962,19.906S0,43.311,0,32.347V19.906C0,8.942,27.306,0,60.962,0S121.925,8.942,121.925,19.906Zm0,27.993V75.892c0,10.964-27.306,19.906-60.962,19.906S0,86.856,0,75.892V47.9c13.1,9.02,37.07,13.219,60.962,13.219S108.827,56.919,121.925,47.9Zm0,43.545v27.993c0,10.964-27.306,19.906-60.962,19.906S0,130.4,0,119.437V91.444c13.1,9.02,37.07,13.219,60.962,13.219S108.827,100.464,121.925,91.444Z'
            fill='#07617d'
        />
    </svg>
);
