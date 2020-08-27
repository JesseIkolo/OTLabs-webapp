import PropTypes from "prop-types"
import React from "react"
// import { Link} from "gatsby"
// import Img from 'gatsby-image'

function CosmoIcon(props){
   if(props.alt){
      if (props.icon ==="loop"){
         return(
            <svg width="74" height="82" viewBox="0 0 74 82" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M40.5702 37.0133L27.8182 51.2531C18.409 61.76 0.999969 55.1043 0.999969 41.0001V41.0001C0.999969 
               26.8959 18.409 20.2401 27.8182 30.7471L46.1818 51.2531C55.591 61.76 73 55.1043 73 41.0001V41.0001V41.0001C73 
               26.8618 55.565 20.1711 46.1067 30.6797L45.3744 31.4933" stroke="#3f53d9" stroke-width="2" stroke-linecap="round" 
               stroke-linejoin="round"/>
               <path d="M39.6 35.3925H42.2144V37.7775" stroke="#FF2D3C" stroke-width="2" stroke-linecap="round"/>
            </svg>
         )
      }
      else if(props.icon === "africa"){
         return(
         <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clip-path="url(#clip0)">
         <path d="M47.2115 37.2307C48.0358 35.3351 47.4339 34.0643 46.3179 33.5461C44.0726 32.5037 43.0669 34.9363 42.3429 35.6604C41.3239 36.6792 41.2875 39.224 40.8497 39.6616C40.181 40.3304 40.1758 41.0439 40.2891 41.5248C40.4975 42.4085 41.2195 43.1305 41.7936 43.7134C42.433 44.3628 43.0369 44.9761 43.9255 44.9797C44.9427 44.9797 45.9762 44.0888 46.6628 43.3377C46.9308 43.0453 46.9109 42.5911 46.6185 42.3233C46.3262 42.0555 45.872 42.0752 45.6041 42.3676C45.5732 42.4013 45.5415 42.435 45.5079 42.4685C44.3427 43.6338 43.9213 43.5464 43.9311 43.5437C43.5848 43.5423 43.1172 43.0039 42.5818 42.4686C41.3278 41.2145 41.6907 40.8515 41.8653 40.6772C42.7365 39.8057 42.71 37.324 43.3583 36.6758C43.6127 36.4215 43.8349 36.1141 44.0497 35.8167C44.7907 34.7911 45.0811 34.5551 45.7133 34.8487C46.3791 35.1578 46.1795 36.0034 45.8948 36.6582C45.4367 37.7117 46.0438 38.9323 46.209 40.1731C46.2614 40.5661 46.6225 40.8425 47.0156 40.79C47.4086 40.7377 47.6848 40.3767 47.6325 39.9835C47.4833 38.8655 47.0108 37.6927 47.2115 37.2307Z" fill="#3f53d9"  className="inv"/>
         <path d="M40.3436 29.3602C40.3436 27.8216 43.9004 24.3545 46.0256 22.2831C47.1003 21.2354 48.6466 19.9962 48.1622 18.6247C47.7465 17.4468 46.1161 17.2146 45.7935 17.1801C45.7216 17.1724 45.828 17.1774 43.4078 17.176C42.6785 17.176 42.4456 16.6526 42.4083 16.5531L40.8317 12.238C40.6956 11.8655 40.2833 11.6738 39.9109 11.8099C39.5384 11.946 39.3468 12.3583 39.4828 12.7307C39.7757 13.5322 38.6971 10.5802 41.0615 17.051C41.331 17.771 42.1073 18.6119 43.4078 18.6119H45.6757C46.1363 18.6696 46.737 18.9009 46.8081 19.1026C47.1025 19.9366 38.9076 26.031 38.9076 29.3601C38.9076 31.4966 39.3546 34.9459 37.0873 37.2132C34.5612 39.7395 32.3449 45.4366 29.9035 46.4981C28.4712 47.1207 27.6688 47.6037 27.2123 47.5673C26.1494 47.4842 22.0693 42.5909 22.0693 39.1541C22.0693 38.119 22.2132 36.2229 22.2604 34.5905C22.2719 34.194 21.9598 33.8635 21.5634 33.852C21.1667 33.8409 20.8364 34.1526 20.825 34.5489C20.7756 36.2613 20.6335 38.006 20.6335 39.1541C20.6335 42.2641 23.1878 45.9473 24.9047 47.6643C26.6367 49.3961 27.3704 49.2532 29.3767 48.3153C31.4534 47.3448 32.0599 47.4198 35.2455 42.2589C36.1756 40.7522 37.1372 39.1943 38.103 38.2285C40.7467 35.5849 40.3436 31.9524 40.3436 29.3602Z" fill="#3f53d9"  className="inv"/>
         <circle r="2" transform="matrix(1 0 0 -1 23 21)" fill="#FF2D3C"/>
         <path d="M21.5558 32.4069C21.9511 32.3759 22.2465 32.0301 22.2153 31.635C22.074 29.8384 21.6951 28.6887 21.023 28.0164C19.4649 26.4584 19.4201 24.5025 17.9175 23C16.2972 21.3797 14.9802 20.8357 11.8783 22.1283C9.31967 23.1944 7.17239 22.885 5.49582 21.2084C3.56001 19.2726 0.898262 13.8024 2.86815 11.8326C5.43321 9.2673 7.85602 7.88722 7.85602 5.47217C7.85602 3.88502 10.2075 2.60699 12.1544 2.60699C14.3162 2.60699 18.2001 1.14085 18.9515 1.46059C19.7193 2.26302 21.0645 5.35404 23.7401 5.35404C25.0422 5.35404 25.9325 5.20384 26.7181 5.07134C29.2761 4.63978 28.5098 4.91252 35.9321 6.07558C36.2221 6.11875 37.1404 6.32037 37.447 7.15908L38.4934 10.0231C38.6296 10.3956 39.0416 10.5874 39.4143 10.4511C39.7868 10.3151 39.9783 9.90278 39.8423 9.53038L38.7958 6.66625C38.3574 5.46672 37.2052 4.78137 36.1087 4.6505C28.7121 3.48965 29.323 3.17583 26.4794 3.65536C25.7137 3.7845 24.9219 3.91805 23.7401 3.91805C21.9161 3.91805 20.8479 1.32551 19.9479 0.425722C18.6644 -0.858053 14.7245 1.1709 12.1544 1.1709C9.52186 1.1709 6.42003 2.90041 6.42003 5.47208C6.42003 7.10805 4.26499 8.40466 1.85272 10.8169C-0.99265 13.6623 2.29596 20.039 4.48039 22.2235C6.57808 24.3213 9.32714 24.7465 12.4306 23.4535C15.0677 22.3546 15.7773 22.8904 16.9021 24.0151C18.1286 25.2417 18.2382 27.2624 20.0075 29.0315C20.286 29.3101 20.6469 30.0074 20.7837 31.7472C20.8148 32.1421 21.1595 32.438 21.5558 32.4069Z" fill="#3f53d9"  className="inv"/>
         </g>
         <defs>
         <clipPath id="clip0">
         <rect width="49" height="49" fill="white"/>
         </clipPath>
         </defs>
         </svg>
         ) 
   }
      else if(props.icon === "computer"){
         return(
         <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.8594 33.7891C30.3204 33.7891 29.8828 34.2266 29.8828 34.7656C29.8828 35.3046 30.3204 35.7422 30.8594 35.7422C31.3984 35.7422 31.8359 35.3046 31.8359 34.7656C31.8359 34.2266 31.3984 33.7891 30.8594 33.7891Z" fill="#3f53d9"  className="inv"/>
            <path d="M45.1172 0H4.88281C2.1904 0 0 2.1904 0 4.88281V34.7656C0 37.458 2.1904 39.6484 4.88281 39.6484H20.1172V44.1406H19.1406C17.8368 44.1406 16.6111 44.6487 15.6883 45.5711C14.7659 46.4939 14.2578 47.7196 14.2578 49.0234C14.2578 49.5628 14.695 50 15.2344 50H34.7656C35.305 50 35.7422 49.5628 35.7422 49.0234C35.7422 46.331 33.5518 44.1406 30.8594 44.1406H29.8828V39.6484H45.1172C47.8096 39.6484 50 37.458 50 34.7656V4.88281C50 2.1904 47.8096 0 45.1172 0ZM4.88281 1.95312H45.1172C46.7327 1.95312 48.0469 3.26729 48.0469 4.88281V29.8828H43.5547V7.42188C43.5547 6.88248 43.1175 6.44531 42.5781 6.44531H34.7656C34.2262 6.44531 33.7891 6.88248 33.7891 7.42188V29.8828H28.9009H21.0991H16.2109V15.2344C16.2109 15.0795 16.1743 14.9384 16.1144 14.8129C16.1118 14.8079 16.1102 14.8026 16.1079 14.7976L12.2017 6.98509C12.0361 6.65436 11.6982 6.44531 11.3281 6.44531C10.9581 6.44531 10.6201 6.65436 10.4546 6.98509L6.54831 14.7976C6.54602 14.8026 6.54449 14.8079 6.54221 14.8129C6.48117 14.9395 6.44531 15.0829 6.44531 15.2344V29.8828H1.95312V4.88281C1.95312 3.26729 3.26729 1.95312 4.88281 1.95312ZM35.7422 29.8828V8.39844H41.6016V10.3516H40.625C40.0856 10.3516 39.6484 10.7887 39.6484 11.3281C39.6484 11.8675 40.0856 12.3047 40.625 12.3047H41.6016V15.2344H40.625C40.0856 15.2344 39.6484 15.6715 39.6484 16.2109C39.6484 16.7503 40.0856 17.1875 40.625 17.1875H41.6016V20.1172H40.625C40.0856 20.1172 39.6484 20.5544 39.6484 21.0938C39.6484 21.6331 40.0856 22.0703 40.625 22.0703H41.6016V25.9766H40.625C40.0856 25.9766 39.6484 26.4137 39.6484 26.9531C39.6484 27.4925 40.0856 27.9297 40.625 27.9297H41.6016V29.8828H35.7422ZM12.3047 29.8828V16.2109H14.2578V29.8828H12.3047ZM8.39844 29.8828V16.2109H10.3516V29.8828H8.39844ZM9.00192 14.2578L11.3281 9.60541L13.6543 14.2578H9.00192ZM33.6216 48.0469H16.3773C16.5207 47.6398 16.7549 47.2668 17.0692 46.9521C17.6231 46.3985 18.3586 46.0938 19.1406 46.0938H30.8594C32.1327 46.0938 33.2188 46.9101 33.6216 48.0469ZM27.9297 44.1406H22.0703V39.6484H27.9297V44.1406ZM45.1172 37.6953H4.88281C3.26729 37.6953 1.95312 36.3811 1.95312 34.7656V31.8359H48.0469V34.7656C48.0469 36.3811 46.7327 37.6953 45.1172 37.6953Z" fill="#3f53d9"  className="inv"/>
            <path d="M26.9531 33.7891H21.0938C20.5544 33.7891 20.1172 34.2262 20.1172 34.7656C20.1172 35.305 20.5544 35.7422 21.0938 35.7422H26.9531C27.4925 35.7422 27.9297 35.305 27.9297 34.7656C27.9297 34.2262 27.4925 33.7891 26.9531 33.7891Z" fill="#3f53d9"  className="inv"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9009 29.8827C28.8906 28.8726 28.8643 27.8769 28.8223 26.9111C28.6514 22.9339 28.262 20.2697 28.0594 19.0978C30.0743 17.6143 30.6244 14.8646 29.3926 12.7284L26.0079 6.86597C25.8331 6.56384 25.5108 6.37769 25.1621 6.37769C24.8131 6.37769 24.4908 6.56384 24.3164 6.86597L20.9301 12.7288C19.7689 14.7429 20.1805 17.3518 22.0047 18.8914C21.7934 20.0599 21.3669 22.8194 21.1815 26.9091C21.1376 27.8853 21.1098 28.8817 21.0991 29.8827H23.0522C23.0595 29.2281 23.0743 28.5754 23.0961 27.9296H26.9066C26.9272 28.5712 26.9413 29.2239 26.9482 29.8827H28.9009ZM22.6219 13.705C21.4909 15.6672 22.9302 18.0964 25.1621 18.0964C27.4082 18.0964 28.8277 15.6588 27.7008 13.7046L25.1621 9.30737L22.6219 13.705ZM26.2157 19.9324C25.8701 20.0087 25.5169 20.0496 25.1621 20.0496C24.7055 20.0496 24.255 19.9862 23.8224 19.863C23.6298 21.0639 23.3509 23.1513 23.1857 25.9765H26.8208C26.8208 23 26.2157 19.9324 26.2157 19.9324Z" fill="#F9352A"/>
         </svg>
         )      
      }
      else if(props.icon === "focus"){
         return(
         <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="27" cy="27" r="14" stroke="#3f53d9" stroke-width="2"/>
            <circle r="4" transform="matrix(1 0 0 -1 27 27)" fill="#FF2D3C"/>
            <path d="M1 7.5V1.5H7" stroke="#FF2D3C" stroke-width="2"/>
            <path d="M7.00031 53.4995H1.00031L1.00031 47.4995" stroke="#FF2D3C" stroke-width="2"/>
            <path d="M47.5 1L53.5 1L53.5 7" stroke="#FF2D3C" stroke-width="2"/>
            <path d="M53.4999 47.0005V53.0005H47.4999" stroke="#FF2D3C" stroke-width="2"/>
         </svg>
         )
   }
      else if(props.icon === "partner"){
         return(
         <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 35.6836C22.4115 35.6836 20.3125 33.5849 20.3125 30.9961C20.3125 28.4076 22.4115 26.3086 25 26.3086C27.5885 26.3086 29.6875 28.4076 29.6875 30.9961C29.6848 33.584 27.5879 35.6808 25 35.6836ZM25 27.8711C23.2742 27.8711 21.875 29.2703 21.875 30.9961C21.875 32.7219 23.2742 34.1211 25 34.1211C26.7258 34.1211 28.125 32.7219 28.125 30.9961C28.125 29.2703 26.7258 27.8711 25 27.8711Z" fill="#3f53d9"  className="inv"/>
            <path d="M10.9375 12.2461C8.349 12.2461 6.25 10.1474 6.25 7.55859C6.25 4.97009 8.349 2.87109 10.9375 2.87109C13.526 2.87109 15.625 4.97009 15.625 7.55859C15.6223 10.1465 13.5254 12.2433 10.9375 12.2461ZM10.9375 4.43359C9.21173 4.43359 7.8125 5.83282 7.8125 7.55859C7.8125 9.28436 9.21173 10.6836 10.9375 10.6836C12.6633 10.6836 14.0625 9.28436 14.0625 7.55859C14.0625 5.83282 12.6633 4.43359 10.9375 4.43359Z" fill="#3f53d9"  className="inv"/>
            <path d="M39.0625 12.2461C36.474 12.2461 34.375 10.1474 34.375 7.55859C34.375 4.97009 36.474 2.87109 39.0625 2.87109C41.651 2.87109 43.75 4.97009 43.75 7.55859C43.7473 10.1465 41.6504 12.2433 39.0625 12.2461ZM39.0625 4.43359C37.3367 4.43359 35.9375 5.83282 35.9375 7.55859C35.9375 9.28436 37.3367 10.6836 39.0625 10.6836C40.7883 10.6836 42.1875 9.28436 42.1875 7.55859C42.1875 5.83282 40.7883 4.43359 39.0625 4.43359Z" fill="#3f53d9"  className="inv"/>
            <path d="M13.642 40.0265C8.51196 36.5856 5.23743 30.9872 4.75311 24.8287L6.31104 24.7036C6.75842 30.3881 9.78088 35.5551 14.5166 38.7304L13.642 40.0265Z" fill="#FF2D3C"/>
            <path d="M35.9985 40.2631L35.1517 38.9508C40.0354 35.7858 43.1842 30.5441 43.6853 24.7461L45.2429 24.8752C44.7003 31.156 41.2888 36.8344 35.9985 40.2631Z" fill="#FF2D3C"/>
            <path d="M17.5073 5.99093L16.882 4.55874C21.9873 2.34041 27.7777 2.30776 32.9077 4.4681L32.2992 5.90731C27.5641 3.91359 22.2198 3.94411 17.5079 5.99093H17.5073Z" fill="#FF2D3C"/>
            <path d="M14.8438 12.2461H7.03125C4.01245 12.2495 1.56586 14.696 1.5625 17.7148V21.387L3.72803 22.175C8.38593 23.8657 13.4891 23.8657 18.147 22.175L20.3125 21.387V17.7148C20.3091 14.696 17.8625 12.2495 14.8438 12.2461ZM18.75 20.293L17.6123 20.7065C17.215 20.8508 16.8103 20.968 16.4062 21.0858V16.1523H14.8438V21.4703C12.2662 21.9958 9.60876 21.9958 7.03125 21.4703V16.1523H5.46875V21.0858C5.0647 20.968 4.66003 20.8517 4.2627 20.7065L3.125 20.293V17.7148C3.12775 15.5585 4.87488 13.8113 7.03125 13.8086H14.8438C17.0001 13.8113 18.7473 15.5585 18.75 17.7148V20.293Z" fill="#3f53d9"  className="inv"/>
            <path d="M42.9688 12.2461H35.1562C32.1375 12.2495 29.6909 14.696 29.6875 17.7148V21.387L31.853 22.175C36.5109 23.8657 41.6141 23.8657 46.272 22.175L48.4375 21.387V17.7148C48.4341 14.696 45.9875 12.2495 42.9688 12.2461ZM46.875 20.293L45.7373 20.7065C45.34 20.8508 44.9353 20.968 44.5312 21.0858V16.1523H42.9688V21.4703C40.3912 21.9958 37.7338 21.9958 35.1562 21.4703V16.1523H33.5938V21.0858C33.1897 20.968 32.785 20.8517 32.3877 20.7065L31.25 20.293V17.7148C31.2527 15.5585 32.9999 13.8113 35.1562 13.8086H42.9688C45.1251 13.8113 46.8723 15.5585 46.875 17.7148V20.293Z" fill="#3f53d9"  className="inv"/>
            <path d="M28.9062 35.6836H21.0938C18.075 35.687 15.6284 38.1335 15.625 41.1523V44.8245L17.7905 45.6125C22.4484 47.3032 27.5516 47.3032 32.2095 45.6125L34.375 44.8245V41.1523C34.3716 38.1335 31.925 35.687 28.9062 35.6836ZM32.8125 43.7305L31.6748 44.144C31.2775 44.2883 30.8728 44.4055 30.4688 44.5233V39.5898H28.9062V44.9078C26.3287 45.4333 23.6713 45.4333 21.0938 44.9078V39.5898H19.5312V44.5233C19.1272 44.4055 18.7225 44.2892 18.3252 44.144L17.1875 43.7305V41.1523C17.1902 38.996 18.9374 37.2488 21.0938 37.2461H28.9062C31.0626 37.2488 32.8098 38.996 32.8125 41.1523V43.7305Z" fill="#3f53d9"  className="inv"/>
         </svg>
         )
      }
   }
   else{
      if (props.icon ==="loop"){
         return(
            <svg width="74" height="82" viewBox="0 0 74 82" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M40.5702 37.0133L27.8182 51.2531C18.409 61.76 0.999969 55.1043 0.999969 41.0001V41.0001C0.999969 
               26.8959 18.409 20.2401 27.8182 30.7471L46.1818 51.2531C55.591 61.76 73 55.1043 73 41.0001V41.0001V41.0001C73 
               26.8618 55.565 20.1711 46.1067 30.6797L45.3744 31.4933" stroke="#FEECB3" stroke-width="2" stroke-linecap="round" 
               stroke-linejoin="round"/>
               <path d="M39.6 35.3925H42.2144V37.7775" stroke="#FF2D3C" stroke-width="2" stroke-linecap="round"/>
            </svg>
         )
      }
      else if(props.icon === "africa"){
         return(
         <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clip-path="url(#clip0)">
         <path d="M47.2115 37.2307C48.0358 35.3351 47.4339 34.0643 46.3179 33.5461C44.0726 32.5037 43.0669 34.9363 42.3429 35.6604C41.3239 36.6792 41.2875 39.224 40.8497 39.6616C40.181 40.3304 40.1758 41.0439 40.2891 41.5248C40.4975 42.4085 41.2195 43.1305 41.7936 43.7134C42.433 44.3628 43.0369 44.9761 43.9255 44.9797C44.9427 44.9797 45.9762 44.0888 46.6628 43.3377C46.9308 43.0453 46.9109 42.5911 46.6185 42.3233C46.3262 42.0555 45.872 42.0752 45.6041 42.3676C45.5732 42.4013 45.5415 42.435 45.5079 42.4685C44.3427 43.6338 43.9213 43.5464 43.9311 43.5437C43.5848 43.5423 43.1172 43.0039 42.5818 42.4686C41.3278 41.2145 41.6907 40.8515 41.8653 40.6772C42.7365 39.8057 42.71 37.324 43.3583 36.6758C43.6127 36.4215 43.8349 36.1141 44.0497 35.8167C44.7907 34.7911 45.0811 34.5551 45.7133 34.8487C46.3791 35.1578 46.1795 36.0034 45.8948 36.6582C45.4367 37.7117 46.0438 38.9323 46.209 40.1731C46.2614 40.5661 46.6225 40.8425 47.0156 40.79C47.4086 40.7377 47.6848 40.3767 47.6325 39.9835C47.4833 38.8655 47.0108 37.6927 47.2115 37.2307Z" fill="#FEECB3"  className="inv"/>
         <path d="M40.3436 29.3602C40.3436 27.8216 43.9004 24.3545 46.0256 22.2831C47.1003 21.2354 48.6466 19.9962 48.1622 18.6247C47.7465 17.4468 46.1161 17.2146 45.7935 17.1801C45.7216 17.1724 45.828 17.1774 43.4078 17.176C42.6785 17.176 42.4456 16.6526 42.4083 16.5531L40.8317 12.238C40.6956 11.8655 40.2833 11.6738 39.9109 11.8099C39.5384 11.946 39.3468 12.3583 39.4828 12.7307C39.7757 13.5322 38.6971 10.5802 41.0615 17.051C41.331 17.771 42.1073 18.6119 43.4078 18.6119H45.6757C46.1363 18.6696 46.737 18.9009 46.8081 19.1026C47.1025 19.9366 38.9076 26.031 38.9076 29.3601C38.9076 31.4966 39.3546 34.9459 37.0873 37.2132C34.5612 39.7395 32.3449 45.4366 29.9035 46.4981C28.4712 47.1207 27.6688 47.6037 27.2123 47.5673C26.1494 47.4842 22.0693 42.5909 22.0693 39.1541C22.0693 38.119 22.2132 36.2229 22.2604 34.5905C22.2719 34.194 21.9598 33.8635 21.5634 33.852C21.1667 33.8409 20.8364 34.1526 20.825 34.5489C20.7756 36.2613 20.6335 38.006 20.6335 39.1541C20.6335 42.2641 23.1878 45.9473 24.9047 47.6643C26.6367 49.3961 27.3704 49.2532 29.3767 48.3153C31.4534 47.3448 32.0599 47.4198 35.2455 42.2589C36.1756 40.7522 37.1372 39.1943 38.103 38.2285C40.7467 35.5849 40.3436 31.9524 40.3436 29.3602Z" fill="#FEECB3"  className="inv"/>
         <circle r="2" transform="matrix(1 0 0 -1 23 21)" fill="#FF2D3C"/>
         <path d="M21.5558 32.4069C21.9511 32.3759 22.2465 32.0301 22.2153 31.635C22.074 29.8384 21.6951 28.6887 21.023 28.0164C19.4649 26.4584 19.4201 24.5025 17.9175 23C16.2972 21.3797 14.9802 20.8357 11.8783 22.1283C9.31967 23.1944 7.17239 22.885 5.49582 21.2084C3.56001 19.2726 0.898262 13.8024 2.86815 11.8326C5.43321 9.2673 7.85602 7.88722 7.85602 5.47217C7.85602 3.88502 10.2075 2.60699 12.1544 2.60699C14.3162 2.60699 18.2001 1.14085 18.9515 1.46059C19.7193 2.26302 21.0645 5.35404 23.7401 5.35404C25.0422 5.35404 25.9325 5.20384 26.7181 5.07134C29.2761 4.63978 28.5098 4.91252 35.9321 6.07558C36.2221 6.11875 37.1404 6.32037 37.447 7.15908L38.4934 10.0231C38.6296 10.3956 39.0416 10.5874 39.4143 10.4511C39.7868 10.3151 39.9783 9.90278 39.8423 9.53038L38.7958 6.66625C38.3574 5.46672 37.2052 4.78137 36.1087 4.6505C28.7121 3.48965 29.323 3.17583 26.4794 3.65536C25.7137 3.7845 24.9219 3.91805 23.7401 3.91805C21.9161 3.91805 20.8479 1.32551 19.9479 0.425722C18.6644 -0.858053 14.7245 1.1709 12.1544 1.1709C9.52186 1.1709 6.42003 2.90041 6.42003 5.47208C6.42003 7.10805 4.26499 8.40466 1.85272 10.8169C-0.99265 13.6623 2.29596 20.039 4.48039 22.2235C6.57808 24.3213 9.32714 24.7465 12.4306 23.4535C15.0677 22.3546 15.7773 22.8904 16.9021 24.0151C18.1286 25.2417 18.2382 27.2624 20.0075 29.0315C20.286 29.3101 20.6469 30.0074 20.7837 31.7472C20.8148 32.1421 21.1595 32.438 21.5558 32.4069Z" fill="#FEECB3"  className="inv"/>
         </g>
         <defs>
         <clipPath id="clip0">
         <rect width="49" height="49" fill="white"/>
         </clipPath>
         </defs>
         </svg>
         ) 
   }
      else if(props.icon === "computer"){
         return(
         <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.8594 33.7891C30.3204 33.7891 29.8828 34.2266 29.8828 34.7656C29.8828 35.3046 30.3204 35.7422 30.8594 35.7422C31.3984 35.7422 31.8359 35.3046 31.8359 34.7656C31.8359 34.2266 31.3984 33.7891 30.8594 33.7891Z" fill="#FEECB3"  className="inv"/>
            <path d="M45.1172 0H4.88281C2.1904 0 0 2.1904 0 4.88281V34.7656C0 37.458 2.1904 39.6484 4.88281 39.6484H20.1172V44.1406H19.1406C17.8368 44.1406 16.6111 44.6487 15.6883 45.5711C14.7659 46.4939 14.2578 47.7196 14.2578 49.0234C14.2578 49.5628 14.695 50 15.2344 50H34.7656C35.305 50 35.7422 49.5628 35.7422 49.0234C35.7422 46.331 33.5518 44.1406 30.8594 44.1406H29.8828V39.6484H45.1172C47.8096 39.6484 50 37.458 50 34.7656V4.88281C50 2.1904 47.8096 0 45.1172 0ZM4.88281 1.95312H45.1172C46.7327 1.95312 48.0469 3.26729 48.0469 4.88281V29.8828H43.5547V7.42188C43.5547 6.88248 43.1175 6.44531 42.5781 6.44531H34.7656C34.2262 6.44531 33.7891 6.88248 33.7891 7.42188V29.8828H28.9009H21.0991H16.2109V15.2344C16.2109 15.0795 16.1743 14.9384 16.1144 14.8129C16.1118 14.8079 16.1102 14.8026 16.1079 14.7976L12.2017 6.98509C12.0361 6.65436 11.6982 6.44531 11.3281 6.44531C10.9581 6.44531 10.6201 6.65436 10.4546 6.98509L6.54831 14.7976C6.54602 14.8026 6.54449 14.8079 6.54221 14.8129C6.48117 14.9395 6.44531 15.0829 6.44531 15.2344V29.8828H1.95312V4.88281C1.95312 3.26729 3.26729 1.95312 4.88281 1.95312ZM35.7422 29.8828V8.39844H41.6016V10.3516H40.625C40.0856 10.3516 39.6484 10.7887 39.6484 11.3281C39.6484 11.8675 40.0856 12.3047 40.625 12.3047H41.6016V15.2344H40.625C40.0856 15.2344 39.6484 15.6715 39.6484 16.2109C39.6484 16.7503 40.0856 17.1875 40.625 17.1875H41.6016V20.1172H40.625C40.0856 20.1172 39.6484 20.5544 39.6484 21.0938C39.6484 21.6331 40.0856 22.0703 40.625 22.0703H41.6016V25.9766H40.625C40.0856 25.9766 39.6484 26.4137 39.6484 26.9531C39.6484 27.4925 40.0856 27.9297 40.625 27.9297H41.6016V29.8828H35.7422ZM12.3047 29.8828V16.2109H14.2578V29.8828H12.3047ZM8.39844 29.8828V16.2109H10.3516V29.8828H8.39844ZM9.00192 14.2578L11.3281 9.60541L13.6543 14.2578H9.00192ZM33.6216 48.0469H16.3773C16.5207 47.6398 16.7549 47.2668 17.0692 46.9521C17.6231 46.3985 18.3586 46.0938 19.1406 46.0938H30.8594C32.1327 46.0938 33.2188 46.9101 33.6216 48.0469ZM27.9297 44.1406H22.0703V39.6484H27.9297V44.1406ZM45.1172 37.6953H4.88281C3.26729 37.6953 1.95312 36.3811 1.95312 34.7656V31.8359H48.0469V34.7656C48.0469 36.3811 46.7327 37.6953 45.1172 37.6953Z" fill="#FEECB3"  className="inv"/>
            <path d="M26.9531 33.7891H21.0938C20.5544 33.7891 20.1172 34.2262 20.1172 34.7656C20.1172 35.305 20.5544 35.7422 21.0938 35.7422H26.9531C27.4925 35.7422 27.9297 35.305 27.9297 34.7656C27.9297 34.2262 27.4925 33.7891 26.9531 33.7891Z" fill="#FEECB3"  className="inv"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9009 29.8827C28.8906 28.8726 28.8643 27.8769 28.8223 26.9111C28.6514 22.9339 28.262 20.2697 28.0594 19.0978C30.0743 17.6143 30.6244 14.8646 29.3926 12.7284L26.0079 6.86597C25.8331 6.56384 25.5108 6.37769 25.1621 6.37769C24.8131 6.37769 24.4908 6.56384 24.3164 6.86597L20.9301 12.7288C19.7689 14.7429 20.1805 17.3518 22.0047 18.8914C21.7934 20.0599 21.3669 22.8194 21.1815 26.9091C21.1376 27.8853 21.1098 28.8817 21.0991 29.8827H23.0522C23.0595 29.2281 23.0743 28.5754 23.0961 27.9296H26.9066C26.9272 28.5712 26.9413 29.2239 26.9482 29.8827H28.9009ZM22.6219 13.705C21.4909 15.6672 22.9302 18.0964 25.1621 18.0964C27.4082 18.0964 28.8277 15.6588 27.7008 13.7046L25.1621 9.30737L22.6219 13.705ZM26.2157 19.9324C25.8701 20.0087 25.5169 20.0496 25.1621 20.0496C24.7055 20.0496 24.255 19.9862 23.8224 19.863C23.6298 21.0639 23.3509 23.1513 23.1857 25.9765H26.8208C26.8208 23 26.2157 19.9324 26.2157 19.9324Z" fill="#F9352A"/>
         </svg>
         )      
      }
      else if(props.icon === "focus"){
         return(
         <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="27" cy="27" r="14" stroke="#FEECB3" stroke-width="2"/>
            <circle r="4" transform="matrix(1 0 0 -1 27 27)" fill="#FF2D3C"/>
            <path d="M1 7.5V1.5H7" stroke="#FF2D3C" stroke-width="2"/>
            <path d="M7.00031 53.4995H1.00031L1.00031 47.4995" stroke="#FF2D3C" stroke-width="2"/>
            <path d="M47.5 1L53.5 1L53.5 7" stroke="#FF2D3C" stroke-width="2"/>
            <path d="M53.4999 47.0005V53.0005H47.4999" stroke="#FF2D3C" stroke-width="2"/>
         </svg>
         )
   }
      else if(props.icon === "partner"){
         return(
         <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 35.6836C22.4115 35.6836 20.3125 33.5849 20.3125 30.9961C20.3125 28.4076 22.4115 26.3086 25 26.3086C27.5885 26.3086 29.6875 28.4076 29.6875 30.9961C29.6848 33.584 27.5879 35.6808 25 35.6836ZM25 27.8711C23.2742 27.8711 21.875 29.2703 21.875 30.9961C21.875 32.7219 23.2742 34.1211 25 34.1211C26.7258 34.1211 28.125 32.7219 28.125 30.9961C28.125 29.2703 26.7258 27.8711 25 27.8711Z" fill="#FEECB3"  className="inv"/>
            <path d="M10.9375 12.2461C8.349 12.2461 6.25 10.1474 6.25 7.55859C6.25 4.97009 8.349 2.87109 10.9375 2.87109C13.526 2.87109 15.625 4.97009 15.625 7.55859C15.6223 10.1465 13.5254 12.2433 10.9375 12.2461ZM10.9375 4.43359C9.21173 4.43359 7.8125 5.83282 7.8125 7.55859C7.8125 9.28436 9.21173 10.6836 10.9375 10.6836C12.6633 10.6836 14.0625 9.28436 14.0625 7.55859C14.0625 5.83282 12.6633 4.43359 10.9375 4.43359Z" fill="#FEECB3"  className="inv"/>
            <path d="M39.0625 12.2461C36.474 12.2461 34.375 10.1474 34.375 7.55859C34.375 4.97009 36.474 2.87109 39.0625 2.87109C41.651 2.87109 43.75 4.97009 43.75 7.55859C43.7473 10.1465 41.6504 12.2433 39.0625 12.2461ZM39.0625 4.43359C37.3367 4.43359 35.9375 5.83282 35.9375 7.55859C35.9375 9.28436 37.3367 10.6836 39.0625 10.6836C40.7883 10.6836 42.1875 9.28436 42.1875 7.55859C42.1875 5.83282 40.7883 4.43359 39.0625 4.43359Z" fill="#FEECB3"  className="inv"/>
            <path d="M13.642 40.0265C8.51196 36.5856 5.23743 30.9872 4.75311 24.8287L6.31104 24.7036C6.75842 30.3881 9.78088 35.5551 14.5166 38.7304L13.642 40.0265Z" fill="#FF2D3C"/>
            <path d="M35.9985 40.2631L35.1517 38.9508C40.0354 35.7858 43.1842 30.5441 43.6853 24.7461L45.2429 24.8752C44.7003 31.156 41.2888 36.8344 35.9985 40.2631Z" fill="#FF2D3C"/>
            <path d="M17.5073 5.99093L16.882 4.55874C21.9873 2.34041 27.7777 2.30776 32.9077 4.4681L32.2992 5.90731C27.5641 3.91359 22.2198 3.94411 17.5079 5.99093H17.5073Z" fill="#FF2D3C"/>
            <path d="M14.8438 12.2461H7.03125C4.01245 12.2495 1.56586 14.696 1.5625 17.7148V21.387L3.72803 22.175C8.38593 23.8657 13.4891 23.8657 18.147 22.175L20.3125 21.387V17.7148C20.3091 14.696 17.8625 12.2495 14.8438 12.2461ZM18.75 20.293L17.6123 20.7065C17.215 20.8508 16.8103 20.968 16.4062 21.0858V16.1523H14.8438V21.4703C12.2662 21.9958 9.60876 21.9958 7.03125 21.4703V16.1523H5.46875V21.0858C5.0647 20.968 4.66003 20.8517 4.2627 20.7065L3.125 20.293V17.7148C3.12775 15.5585 4.87488 13.8113 7.03125 13.8086H14.8438C17.0001 13.8113 18.7473 15.5585 18.75 17.7148V20.293Z" fill="#FEECB3"  className="inv"/>
            <path d="M42.9688 12.2461H35.1562C32.1375 12.2495 29.6909 14.696 29.6875 17.7148V21.387L31.853 22.175C36.5109 23.8657 41.6141 23.8657 46.272 22.175L48.4375 21.387V17.7148C48.4341 14.696 45.9875 12.2495 42.9688 12.2461ZM46.875 20.293L45.7373 20.7065C45.34 20.8508 44.9353 20.968 44.5312 21.0858V16.1523H42.9688V21.4703C40.3912 21.9958 37.7338 21.9958 35.1562 21.4703V16.1523H33.5938V21.0858C33.1897 20.968 32.785 20.8517 32.3877 20.7065L31.25 20.293V17.7148C31.2527 15.5585 32.9999 13.8113 35.1562 13.8086H42.9688C45.1251 13.8113 46.8723 15.5585 46.875 17.7148V20.293Z" fill="#FEECB3"  className="inv"/>
            <path d="M28.9062 35.6836H21.0938C18.075 35.687 15.6284 38.1335 15.625 41.1523V44.8245L17.7905 45.6125C22.4484 47.3032 27.5516 47.3032 32.2095 45.6125L34.375 44.8245V41.1523C34.3716 38.1335 31.925 35.687 28.9062 35.6836ZM32.8125 43.7305L31.6748 44.144C31.2775 44.2883 30.8728 44.4055 30.4688 44.5233V39.5898H28.9062V44.9078C26.3287 45.4333 23.6713 45.4333 21.0938 44.9078V39.5898H19.5312V44.5233C19.1272 44.4055 18.7225 44.2892 18.3252 44.144L17.1875 43.7305V41.1523C17.1902 38.996 18.9374 37.2488 21.0938 37.2461H28.9062C31.0626 37.2488 32.8098 38.996 32.8125 41.1523V43.7305Z" fill="#FEECB3"  className="inv"/>
         </svg>
         )
      }
      else if(props.icon === "arrow-right"){
         return(
            <svg version="1.1"  width={props.w} height={props.h} viewBox="0 0 20 20">
               <path fill="#000000" d="M19.354 10.146l-6-6c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.146 5.146h-16.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h16.293l-5.146 5.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l6-6c0.195-0.195 0.195-0.512 0-0.707z"></path>
            </svg>
         )
      }
      else if(props.icon === "otla"){
         return(
            <svg width="58" height="35" viewBox="0 0 58 35" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2852 24.2945C5.50025 24.2945 0 18.856 0 12.1472C0 5.4385 5.50025 0 12.2852 0H20.928H46.4563V29.5673H57.4V35H40.6982V5.49373H35.3083V24.2946H29.9374V5.49373H20.928H12.2852C8.5688 5.49373 5.5561 8.4726 5.5561 12.1472C5.5561 15.8219 8.5688 18.8007 12.2852 18.8007L12.385 18.8004C16.1493 18.8004 19.2009 15.7831 19.2009 12.061H24.6037C24.6037 18.7335 19.1332 24.2946 12.385 24.2946L12.2852 24.2945ZM0 29.4V35H35V29.4H0Z" fill="white"/>
         </svg>
         )
      }
      else if(props.icon === "calendar"){
         return(
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M9.00008 15.8334C9.1649 15.8334 9.32602 15.7845 9.46306 15.6929C9.6001 15.6014 9.70691 15.4712 9.76998 15.3189C9.83306 15.1667 9.84956 14.9991 9.8174 14.8375C9.78525 14.6758 9.70588 14.5273 9.58934 14.4108C9.47279 14.2942 9.32431 14.2149 9.16266 14.1827C9.00101 14.1506 8.83345 14.1671 8.68118 14.2301C8.52891 14.2932 8.39876 14.4 8.30719 14.5371C8.21562 14.6741 8.16675 14.8352 8.16675 15C8.16675 15.2211 8.25455 15.433 8.41083 15.5893C8.56711 15.7456 8.77907 15.8334 9.00008 15.8334ZM13.1667 15.8334C13.3316 15.8334 13.4927 15.7845 13.6297 15.6929C13.7668 15.6014 13.8736 15.4712 13.9367 15.3189C13.9997 15.1667 14.0162 14.9991 13.9841 14.8375C13.9519 14.6758 13.8726 14.5273 13.756 14.4108C13.6395 14.2942 13.491 14.2149 13.3293 14.1827C13.1677 14.1506 13.0001 14.1671 12.8478 14.2301C12.6956 14.2932 12.5654 14.4 12.4739 14.5371C12.3823 14.6741 12.3334 14.8352 12.3334 15C12.3334 15.2211 12.4212 15.433 12.5775 15.5893C12.7338 15.7456 12.9457 15.8334 13.1667 15.8334ZM13.1667 12.5C13.3316 12.5 13.4927 12.4512 13.6297 12.3596C13.7668 12.268 13.8736 12.1379 13.9367 11.9856C13.9997 11.8333 14.0162 11.6658 13.9841 11.5041C13.9519 11.3425 13.8726 11.194 13.756 11.0774C13.6395 10.9609 13.491 10.8815 13.3293 10.8494C13.1677 10.8172 13.0001 10.8337 12.8478 10.8968C12.6956 10.9599 12.5654 11.0667 12.4739 11.2037C12.3823 11.3408 12.3334 11.5019 12.3334 11.6667C12.3334 11.8877 12.4212 12.0997 12.5775 12.256C12.7338 12.4122 12.9457 12.5 13.1667 12.5ZM9.00008 12.5C9.1649 12.5 9.32602 12.4512 9.46306 12.3596C9.6001 12.268 9.70691 12.1379 9.76998 11.9856C9.83306 11.8333 9.84956 11.6658 9.8174 11.5041C9.78525 11.3425 9.70588 11.194 9.58934 11.0774C9.47279 10.9609 9.32431 10.8815 9.16266 10.8494C9.00101 10.8172 8.83345 10.8337 8.68118 10.8968C8.52891 10.9599 8.39876 11.0667 8.30719 11.2037C8.21562 11.3408 8.16675 11.5019 8.16675 11.6667C8.16675 11.8877 8.25455 12.0997 8.41083 12.256C8.56711 12.4122 8.77907 12.5 9.00008 12.5ZM14.8334 2.50004H14.0001V1.66671C14.0001 1.44569 13.9123 1.23373 13.756 1.07745C13.5997 0.921171 13.3878 0.833374 13.1667 0.833374C12.9457 0.833374 12.7338 0.921171 12.5775 1.07745C12.4212 1.23373 12.3334 1.44569 12.3334 1.66671V2.50004H5.66675V1.66671C5.66675 1.44569 5.57895 1.23373 5.42267 1.07745C5.26639 0.921171 5.05443 0.833374 4.83342 0.833374C4.6124 0.833374 4.40044 0.921171 4.24416 1.07745C4.08788 1.23373 4.00008 1.44569 4.00008 1.66671V2.50004H3.16675C2.50371 2.50004 1.86782 2.76343 1.39898 3.23227C0.93014 3.70111 0.666748 4.337 0.666748 5.00004V16.6667C0.666748 17.3297 0.93014 17.9656 1.39898 18.4345C1.86782 18.9033 2.50371 19.1667 3.16675 19.1667H14.8334C15.4965 19.1667 16.1323 18.9033 16.6012 18.4345C17.07 17.9656 17.3334 17.3297 17.3334 16.6667V5.00004C17.3334 4.337 17.07 3.70111 16.6012 3.23227C16.1323 2.76343 15.4965 2.50004 14.8334 2.50004ZM15.6668 16.6667C15.6668 16.8877 15.579 17.0997 15.4227 17.256C15.2664 17.4122 15.0544 17.5 14.8334 17.5H3.16675C2.94573 17.5 2.73377 17.4122 2.57749 17.256C2.42121 17.0997 2.33342 16.8877 2.33342 16.6667V9.16671H15.6668V16.6667ZM15.6668 7.50004H2.33342V5.00004C2.33342 4.77903 2.42121 4.56707 2.57749 4.41078C2.73377 4.2545 2.94573 4.16671 3.16675 4.16671H4.00008V5.00004C4.00008 5.22105 4.08788 5.43301 4.24416 5.5893C4.40044 5.74558 4.6124 5.83337 4.83342 5.83337C5.05443 5.83337 5.26639 5.74558 5.42267 5.5893C5.57895 5.43301 5.66675 5.22105 5.66675 5.00004V4.16671H12.3334V5.00004C12.3334 5.22105 12.4212 5.43301 12.5775 5.5893C12.7338 5.74558 12.9457 5.83337 13.1667 5.83337C13.3878 5.83337 13.5997 5.74558 13.756 5.5893C13.9123 5.43301 14.0001 5.22105 14.0001 5.00004V4.16671H14.8334C15.0544 4.16671 15.2664 4.2545 15.4227 4.41078C15.579 4.56707 15.6668 4.77903 15.6668 5.00004V7.50004ZM4.83342 12.5C4.99823 12.5 5.15935 12.4512 5.29639 12.3596C5.43343 12.268 5.54024 12.1379 5.60332 11.9856C5.66639 11.8333 5.68289 11.6658 5.65074 11.5041C5.61858 11.3425 5.53922 11.194 5.42267 11.0774C5.30613 10.9609 5.15764 10.8815 4.99599 10.8494C4.83434 10.8172 4.66678 10.8337 4.51451 10.8968C4.36224 10.9599 4.23209 11.0667 4.14052 11.2037C4.04896 11.3408 4.00008 11.5019 4.00008 11.6667C4.00008 11.8877 4.08788 12.0997 4.24416 12.256C4.40044 12.4122 4.6124 12.5 4.83342 12.5ZM4.83342 15.8334C4.99823 15.8334 5.15935 15.7845 5.29639 15.6929C5.43343 15.6014 5.54024 15.4712 5.60332 15.3189C5.66639 15.1667 5.68289 14.9991 5.65074 14.8375C5.61858 14.6758 5.53922 14.5273 5.42267 14.4108C5.30613 14.2942 5.15764 14.2149 4.99599 14.1827C4.83434 14.1506 4.66678 14.1671 4.51451 14.2301C4.36224 14.2932 4.23209 14.4 4.14052 14.5371C4.04896 14.6741 4.00008 14.8352 4.00008 15C4.00008 15.2211 4.08788 15.433 4.24416 15.5893C4.40044 15.7456 4.6124 15.8334 4.83342 15.8334Z" fill="#2A40D9"/>
            </svg>
         )
      }
      else if(props.icon ==="clock"){
         return(
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M13 9.82702H11V5.82702C11 5.56181 10.8946 5.30745 10.7071 5.11992C10.5196 4.93238 10.2652 4.82703 10 4.82703C9.73479 4.82703 9.48043 4.93238 9.2929 5.11992C9.10536 5.30745 9 5.56181 9 5.82702V10.827C9 11.0922 9.10536 11.3466 9.2929 11.5341C9.48043 11.7217 9.73479 11.827 10 11.827H13C13.2652 11.827 13.5196 11.7217 13.7071 11.5341C13.8946 11.3466 14 11.0922 14 10.827C14 10.5618 13.8946 10.3075 13.7071 10.1199C13.5196 9.93238 13.2652 9.82702 13 9.82702ZM10 0.827026C8.02219 0.827026 6.08879 1.41352 4.4443 2.51233C2.79981 3.61114 1.51809 5.17293 0.761209 7.00019C0.00433284 8.82745 -0.193701 10.8381 0.192152 12.7779C0.578004 14.7177 1.53041 16.4996 2.92894 17.8981C4.32746 19.2966 6.10929 20.249 8.0491 20.6349C9.98891 21.0207 11.9996 20.8227 13.8268 20.0658C15.6541 19.3089 17.2159 18.0272 18.3147 16.3827C19.4135 14.7382 20 12.8048 20 10.827C20 9.51381 19.7413 8.21345 19.2388 7.00019C18.7363 5.78693 17.9997 4.68454 17.0711 3.75596C16.1425 2.82737 15.0401 2.09078 13.8268 1.58823C12.6136 1.08568 11.3132 0.827026 10 0.827026V0.827026ZM10 18.827C8.41775 18.827 6.87104 18.3578 5.55544 17.4788C4.23985 16.5997 3.21447 15.3503 2.60897 13.8885C2.00347 12.4267 1.84504 10.8181 2.15372 9.2663C2.4624 7.71445 3.22433 6.28899 4.34315 5.17017C5.46197 4.05135 6.88743 3.28943 8.43928 2.98074C9.99113 2.67206 11.5997 2.83049 13.0615 3.43599C14.5233 4.04149 15.7727 5.06687 16.6518 6.38246C17.5308 7.69806 18 9.24477 18 10.827C18 12.9488 17.1572 14.9836 15.6569 16.4839C14.1566 17.9842 12.1217 18.827 10 18.827V18.827Z" fill="#2A40D9"/>
            </svg>
         )
      }
      else if(props.icon === "user-ok"){
         return(
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M6.15 5.11C6.41679 4.87907 6.63078 4.59344 6.77744 4.27251C6.9241 3.95158 7 3.60286 7 3.25C7 2.58696 6.73661 1.95107 6.26777 1.48223C5.79893 1.01339 5.16304 0.75 4.5 0.75C3.83696 0.75 3.20107 1.01339 2.73223 1.48223C2.26339 1.95107 2 2.58696 2 3.25C2 3.60286 2.0759 3.95158 2.22256 4.27251C2.36922 4.59344 2.58321 4.87907 2.85 5.11C2.15007 5.42694 1.55623 5.93877 1.13949 6.58427C0.722748 7.22978 0.500736 7.98166 0.5 8.75C0.5 8.88261 0.552678 9.00979 0.646447 9.10356C0.740215 9.19732 0.867392 9.25 1 9.25C1.13261 9.25 1.25979 9.19732 1.35355 9.10356C1.44732 9.00979 1.5 8.88261 1.5 8.75C1.5 7.95435 1.81607 7.19129 2.37868 6.62868C2.94129 6.06607 3.70435 5.75 4.5 5.75C5.29565 5.75 6.05871 6.06607 6.62132 6.62868C7.18393 7.19129 7.5 7.95435 7.5 8.75C7.5 8.88261 7.55268 9.00979 7.64645 9.10356C7.74021 9.19732 7.86739 9.25 8 9.25C8.13261 9.25 8.25979 9.19732 8.35355 9.10356C8.44732 9.00979 8.5 8.88261 8.5 8.75C8.49926 7.98166 8.27725 7.22978 7.86051 6.58427C7.44377 5.93877 6.84993 5.42694 6.15 5.11ZM4.5 4.75C4.20333 4.75 3.91332 4.66203 3.66664 4.49721C3.41997 4.33238 3.22771 4.09812 3.11418 3.82403C3.00065 3.54994 2.97094 3.24834 3.02882 2.95737C3.0867 2.66639 3.22956 2.39912 3.43934 2.18934C3.64912 1.97956 3.91639 1.8367 4.20736 1.77882C4.49834 1.72094 4.79994 1.75065 5.07403 1.86418C5.34811 1.97771 5.58238 2.16997 5.7472 2.41664C5.91203 2.66332 6 2.95333 6 3.25C6 3.64783 5.84196 4.02936 5.56066 4.31066C5.27936 4.59197 4.89782 4.75 4.5 4.75ZM10.355 3.565C10.3085 3.51814 10.2532 3.48094 10.1923 3.45556C10.1314 3.43017 10.066 3.4171 10 3.4171C9.93399 3.4171 9.86864 3.43017 9.80771 3.45556C9.74678 3.48094 9.69148 3.51814 9.645 3.565L8.645 4.565L8.335 4.25C8.28852 4.20314 8.23322 4.16594 8.17229 4.14056C8.11136 4.11517 8.04601 4.1021 7.98 4.1021C7.91399 4.1021 7.84864 4.11517 7.78771 4.14056C7.72678 4.16594 7.67148 4.20314 7.625 4.25C7.53187 4.34368 7.4796 4.47041 7.4796 4.6025C7.4796 4.73459 7.53187 4.86132 7.625 4.955L8.295 5.625C8.38868 5.71813 8.51541 5.7704 8.6475 5.7704C8.77959 5.7704 8.90632 5.71813 9 5.625L10.335 4.29C10.3855 4.24466 10.4262 4.18952 10.4547 4.12794C10.4832 4.06636 10.4988 3.99962 10.5007 3.9318C10.5026 3.86397 10.4906 3.79647 10.4656 3.73341C10.4405 3.67035 10.4029 3.61305 10.355 3.565Z" fill="white"/>
            </svg>
         )
      }
   }
   
}

export{ CosmoIcon}