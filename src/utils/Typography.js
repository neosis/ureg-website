import styled from "styled-components";

export const colors = {
    primaryColor: "#217FED",
    hoverPrimaryColor: "#4faded",
    secondaryColor: "",
    surfaceColor: "#f5f5f5",
    backgroundColor: "#FFFFFF",
    errorColor: "#B00020",

    onPrimary: "#FFFFFF",
    onSecondary: "#323232",
    onSurface: "#4a4a4a",
    onBackground: "#323232",
    onError: "#ffffff"
};


// Extra small devices (portrait phones, less than 576px)
//@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, less than 768px)
//@media (max-width: 767.98px) { ... }

// Medium devices (tablets, less than 992px)
//@media (max-width: 991.98px) { ... }

// Large devices (desktops, less than 1200px)
//@media (max-width: 1199.98px) { ... }

// .btn{
//     font-size: 15px;
//     font-weight: 700;
//     text-transform: uppercase;
//     line-height: 1.6;
//     letter-spacing: 0.9px;
//     padding: 16px 0;
//     display: inline-block;
//     border-radius: 5px;
//     box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
//     border: 2px solid;
//     transition: 0.3s all ease-in-out;
//     min-width: 200px;
// &-light{
//         color: $clr-blue;
//         border-color: white;
//         background-color: white;
//     &:hover{
//             color: $clr-blue-hover;
//             border-color: white;
//             background-color: $clr-white-hover;
//         }
//     &:active{
//             color: $clr-blue-hover !important;
//             border-color: white !important;
//             background-color: $clr-white-hover !important;
//         }
//     }
// &-outline-light{
//         color: white;
//         border-color: white;
//         background-color: transparent;
//     &:hover{
//             color: white;
//             border-color: white;
//             background-color: fade_out(white,0.7);
//         }
//     &:active{
//             color: white !important;
//             border-color: white !important;
//             background-color: fade_out(white,0.7) !important;
//         }
//     }
// &-dark{
//         color: white;
//         border-color: $clr-blue;
//         background-color: $clr-blue;
//     &:hover {
//             color: $clr-white-hover;
//             border-color: $clr-blue-hover;
//             background-color: $clr-blue-hover;
//         }
//     &:active{
//             color: $clr-white-hover !important;
//             border-color: $clr-blue-hover !important;
//             background-color: $clr-blue-hover !important;
//         }
//     }
// &-outline-dark{
//         color: $clr-blue;
//         border-color: $clr-blue;
//         background-color: white;
//     &:hover{
//             color: $clr-blue-hover;
//             border-color: $clr-blue-hover;
//             background-color: $clr-white-hover;
//         }
//     &:active{
//             color: $clr-blue-hover !important;
//             border-color: $clr-blue-hover !important;
//             background-color: $clr-white-hover !important;
//         }
//     }
// }
// //wpb buttons
//
// .wpb-btn a{
//     font-size: 15px !important;
//     font-weight: 700 !important;
//     text-transform: uppercase !important;
//     line-height: 1.6 !important;
//     letter-spacing: 0.9px !important;
//     padding: 16px 0 !important;
//     display: inline-block !important;
//     border-radius: 5px !important;
//     box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05) !important;
//     border: 2px solid !important;
//     transition: 0.3s all ease-in-out !important;
//     min-width: 200px !important;
//     background-image: none !important;
// }
// .wpb-btn-light a{
//     color: $clr-blue !important;
//     border-color: white !important;
//     background-color: white !important;
// &:hover, &:active{
//         color: $clr-blue-hover !important;
//         border-color: $clr-white-hover !important;
//         background-color: $clr-white-hover !important;
//     }
// }
// .wpb-btn-outline-light a{
//     color: white !important;
//     border-color: white !important;
//     background-color: transparent !important;
// &:hover, &:active{
//         color: white !important;
//         border-color: white !important;
//         background-color: fade_out(white,0.7) !important;
//     }
// }
// .wpb-btn-outline-dark a{
//     color: $clr-blue !important;
//     border-color: $clr-blue !important;
//     background-color: white !important;
// &:hover, &:active{
//         color: $clr-blue-hover !important;
//         border-color: $clr-blue-hover !important;
//         background-color: $clr-white-hover !important;
//     }
// }
// .wpb-btn-dark a{
//     color: white !important;
//     border-color: $clr-blue !important;
//     background-color: $clr-blue !important;
// &:hover, &:active{
//         color: $clr-white-hover !important;
//         border-color: $clr-blue-hover !important;
//         background-color: $clr-blue-hover !important;
//     }
// }
//
//
// //LINKS
//
// .link-arrow{
//     a{
//         font-size: 16px !important;
//         line-height: normal !important;
//         letter-spacing: 1px !important;
//         color: $clr-blue !important;
//         font-weight: 700 !important;
//         transition: 0.3s all ease-in-out;
//         border: none !important;
//         background: none !important;
//         padding-left: 0 !important;
//     &:hover{
//             color: $clr-blue-hover !important;
//             text-decoration: none !important;
//         }
//         i{
//             font-size: 26px !important;
//             font-weight: 700 !important;
//             height: 12px !important;
//         }
//     }
// }

//TYPOGRAPHY

export const H1 = styled.h1`
    font-size: 3.5rem;
    line-height: normal;
    font-weight: 600;
    color: ${colors.onBackground};
    margin: 0;
@media (max-width: 576px) {
        font-size: 2.5rem;
    }
`;
export const H2 = styled.h2`
    font-size: 2.25rem;
    line-height: 1.4;
    font-weight: 600;
    color: ${colors.onBackground};
    margin: 0;
@media (max-width: 768px) {
        font-size: 1.75rem;
    }
`;

export const H3 = styled.h3`
    font-size: 2rem;
    line-height: 1.56;
    font-weight: 600;
    color: ${colors.onBackground};
    margin: 0;
@media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;
export const H4 = styled.h4`
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${colors.onBackground};
    margin: 0;
    @media (max-width: 768px) {
        font-size: 0.75rem;
    }
`;

export const Text = styled.p`
    font-size: 1.25rem;
    line-height: 1.8;
    font-weight: normal;
    color: ${colors.onSurface};
    margin: 0;
`;

export const P = styled.p`
    font-size: 1.25rem;
    line-height: 1.8;
    font-weight: normal;
    color: ${colors.onSurface};
    margin: 0;
`;
