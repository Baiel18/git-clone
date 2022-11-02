import React from 'react';
import './App.css';
import Button from "./components/imgs/кнопка.png"
// import Count from './components/Count';

function App() {
  return (
    <div className='contentOne'>
      <div className='logo'>
        <svg width="183" height="51" viewBox="0 0 183 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1926 24.1539C14.1926 23.2386 13.8693 22.5387 13.2227 22.054C12.576 21.5587 11.4121 21.0418 9.73079 20.5034C8.04951 19.9542 6.7185 19.4157 5.73776 18.888C3.06497 17.445 1.72858 15.5014 1.72858 13.0569C1.72858 11.7862 2.08423 10.6555 2.79554 9.66479C3.51762 8.66332 4.54686 7.88259 5.88326 7.32262C7.23043 6.76266 8.73927 6.48267 10.4098 6.48267C12.091 6.48267 13.5891 6.78958 14.9039 7.40338C16.2187 8.00642 17.2372 8.86253 17.9594 9.9717C18.6922 11.0809 19.0586 12.3408 19.0586 13.7515H14.2088C14.2088 12.6746 13.8693 11.84 13.1903 11.2478C12.5113 10.6447 11.5576 10.3432 10.3289 10.3432C9.14342 10.3432 8.22195 10.5963 7.56453 11.1024C6.9071 11.5977 6.57839 12.2546 6.57839 13.0731C6.57839 13.8377 6.961 14.4783 7.72618 14.9952C8.50216 15.5121 9.63917 15.9968 11.1372 16.449C13.8962 17.2782 15.9063 18.3065 17.1671 19.5342C18.4281 20.7618 19.0586 22.291 19.0586 24.1216C19.0586 26.1569 18.288 27.756 16.7469 28.9191C15.2057 30.0712 13.131 30.6474 10.5229 30.6474C8.71232 30.6474 7.06337 30.3189 5.5761 29.662C4.08883 28.9945 2.95181 28.0844 2.16505 26.9323C1.38908 25.7799 1.0011 24.4447 1.0011 22.9263H5.86709C5.86709 25.5215 7.41904 26.8191 10.5229 26.8191C11.6761 26.8191 12.576 26.5877 13.2227 26.1245C13.8693 25.6508 14.1926 24.9938 14.1926 24.1539ZM60.1851 26.4315H70.483V30.3243H55.3353V6.80573H60.1851V26.4315ZM86.8915 25.4785H78.3881L76.7716 30.3243H71.6146L80.3766 6.80573H84.8708L93.6813 30.3243H88.5243L86.8915 25.4785ZM79.6976 21.5533H85.5821L82.6237 12.75L79.6976 21.5533ZM104.593 21.7148H100.73V30.3243H95.8798V6.80573H104.626C107.406 6.80573 109.551 7.42493 111.06 8.66332C112.569 9.90169 113.323 11.6516 113.323 13.9131C113.323 15.5175 112.973 16.8582 112.272 17.935C111.583 19.0012 110.532 19.8518 109.12 20.4872L114.212 30.0981V30.3243H109.007L104.593 21.7148ZM100.73 17.7896H104.642C105.86 17.7896 106.803 17.4828 107.471 16.869C108.139 16.2445 108.473 15.3883 108.473 14.3007C108.473 13.1915 108.155 12.3192 107.519 11.6839C106.894 11.0485 105.93 10.7309 104.626 10.7309H100.73V17.7896ZM139.431 20.1319H130.12V26.4315H141.048V30.3243H125.27V6.80573H141.016V10.7309H130.12V16.336H139.431V20.1319ZM152.316 14.9145L156.729 6.80573H162.306L155.453 18.4681L162.484 30.3243H156.842L152.316 22.0863L147.789 30.3243H142.147L149.18 18.4681L142.325 6.80573H147.902L152.316 14.9145ZM179.103 20.1319H169.791V26.4315H180.72V30.3243H164.941V6.80573H180.686V10.7309H169.791V16.336H179.103V20.1319Z" fill="white" />
          <path d="M37.2453 10.1857C31.7384 10.1857 27.2581 14.6624 27.2581 20.1647C27.2581 25.6672 31.7384 30.1439 37.2453 30.1439C42.7523 30.1439 47.2325 25.6673 47.2325 20.1647C47.2325 14.6624 42.7523 10.1857 37.2453 10.1857ZM37.2453 28.3869C32.7078 28.3869 29.0165 24.6985 29.0165 20.1647C29.0165 15.6312 32.7078 11.9427 37.2453 11.9427C41.7826 11.9427 45.4739 15.6312 45.4739 20.1647C45.4739 24.6983 41.7826 28.3869 37.2453 28.3869Z" fill="white" />
          <path d="M37.246 3.62555C36.76 3.62555 36.3662 4.01886 36.3662 4.5041V7.96326C36.3662 8.4486 36.7601 8.84191 37.246 8.84191C37.7319 8.84191 38.1257 8.4486 38.1257 7.96336V4.5041C38.1257 4.01895 37.7319 3.62555 37.246 3.62555Z" fill="white" />
          <path d="M48.9502 8.46982C48.6067 8.12668 48.0501 8.12668 47.7066 8.46982L45.2585 10.9159C44.9151 11.2591 44.9151 11.8152 45.2585 12.1583C45.4301 12.3299 45.6551 12.4156 45.8802 12.4156C46.1052 12.4156 46.3302 12.3299 46.502 12.1583L48.95 9.71214C49.2935 9.36911 49.2935 8.81287 48.9502 8.46982Z" fill="white" />
          <path d="M29.2326 28.1713C28.8891 27.8284 28.3324 27.8282 27.9889 28.1713L25.5407 30.6174C25.1972 30.9606 25.1972 31.5168 25.5406 31.86C25.7125 32.0316 25.9373 32.1173 26.1625 32.1173C26.3875 32.1173 26.6125 32.0316 26.7841 31.86L29.2323 29.4138C29.5758 29.0707 29.5758 28.5144 29.2326 28.1713Z" fill="white" />
          <path d="M52.9192 19.2863H49.4569C48.9715 19.2863 48.5778 19.6795 48.5778 20.1648C48.5778 20.6499 48.9712 21.0434 49.4569 21.0434H52.9192C53.4049 21.0434 53.7985 20.65 53.7985 20.1648C53.7984 19.6795 53.4048 19.2863 52.9192 19.2863Z" fill="white" />
          <path d="M25.0339 19.2863H21.5719C21.0862 19.2863 20.6926 19.6795 20.6926 20.1648C20.6926 20.6499 21.0862 21.0434 21.5719 21.0434H25.0339C25.5198 21.0434 25.9132 20.65 25.9132 20.1648C25.9132 19.6795 25.5198 19.2863 25.0339 19.2863Z" fill="white" />
          <path d="M29.2326 10.9159L26.7844 8.46987C26.4412 8.12673 25.8844 8.12692 25.5411 8.46987C25.1976 8.81302 25.1976 9.36925 25.5412 9.7124L27.9893 12.1585C28.1609 12.33 28.3859 12.4159 28.6109 12.4159C28.8359 12.4159 29.0609 12.3301 29.2327 12.1585C29.576 11.8153 29.576 11.259 29.2326 10.9159Z" fill="white" />
          <path d="M48.9502 30.6175L46.5021 28.1714C46.1588 27.8282 45.6021 27.8282 45.2585 28.1714C44.9151 28.5145 44.9151 29.0707 45.2585 29.4137L47.7066 31.8598C47.8783 32.0314 48.1033 32.1172 48.3284 32.1172C48.5534 32.1172 48.7784 32.0314 48.9502 31.8598C49.2937 31.5167 49.2937 30.9606 48.9502 30.6175Z" fill="white" />
          <path d="M60.2887 48.7499L60.5329 46.9708L60.6441 46.1609L65.5092 46.8276C65.9902 46.8937 66.4337 46.5575 66.4998 46.0767C66.5657 45.5958 66.2293 45.1528 65.7481 45.0869L60.883 44.4202L61.4853 40.0331L66.3503 40.6998C66.8313 40.7658 67.2749 40.4296 67.3409 39.9488C67.407 39.4679 67.0704 39.025 66.5893 38.959L61.7242 38.2923L61.8354 37.4824L62.0796 35.7033C62.1457 35.2225 61.8091 34.7795 61.328 34.7136C60.847 34.6476 60.4033 34.9838 60.3374 35.4646L60.2127 36.3733L55.9099 35.7835C53.1077 35.3995 50.4956 37.1404 49.7073 39.7669L41.9621 38.7055C39.4269 38.358 37.647 36.0144 37.9948 33.4812L38.2759 31.4335C38.3419 30.9527 38.0054 30.5097 37.5242 30.4437C37.0431 30.3778 36.5997 30.7138 36.5336 31.1948L36.2526 33.2425C35.7731 36.7356 38.2271 39.967 41.723 40.4462L49.4683 41.5076C49.5197 44.2491 51.5662 46.6286 54.3684 47.0126L58.6711 47.6023L58.5464 48.5109C58.4805 48.9917 58.8169 49.4347 59.2981 49.5007C59.7793 49.5667 60.2228 49.2306 60.2887 48.7499ZM54.6075 45.272C52.4697 44.9789 50.9692 43.0028 51.2623 40.867C51.5555 38.731 53.5333 37.2315 55.671 37.5245L59.9738 38.1142L58.9103 45.8618L54.6075 45.2721V45.272Z" fill="white" />
          <path d="M104.343 3.13544C104.828 3.13544 105.222 2.74211 105.222 2.25691C105.222 1.77169 104.828 1.37836 104.343 1.37836C103.857 1.37836 103.463 1.77169 103.463 2.25691C103.463 2.74211 103.857 3.13544 104.343 3.13544Z" fill="white" />
          <path d="M100.204 3.13544C100.69 3.13544 101.084 2.74211 101.084 2.25691C101.084 1.77169 100.69 1.37836 100.204 1.37836C99.7184 1.37836 99.3245 1.77169 99.3245 2.25691C99.3245 2.74211 99.7184 3.13544 100.204 3.13544Z" fill="white" />
        </svg>
      </div>
      <p>Зеленый тариф для дома и бизнеса</p>
      <h1 className='zagolovok'>Солнечная электростанция</h1>
      <h1 className='dohod'>с доходом от 1000 $ в месяц</h1>
      <a href='#'><img src={Button} /></a>
      <div className='connections'>
        <a href='#'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        </a>
        <a href='#'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
          </svg>
        </a>
        <a href='#'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </a>
        <a href='#'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default App;