const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navLinks = $$('.nav-link')
navLinks.forEach(navLink=> navLink.classList.add('text-white'))

const body = $('body');
const signUp = $('#sign-up');
const login = $$('#login');
const merchandises = $$('.card img')
merchandises.forEach(merchandise => merchandise.onclick = ()=> window.location.assign('https://tanle905.github.io/laptop-demo.html'))

const tooltipContents = $$('.tooltip-content')
tooltipContents.forEach(tooltipContent => tooltipContent.onclick = ()=> window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ'))

const imgContents = $$('.img-content')
imgContents.forEach(imgContent => imgContent.onclick = ()=> window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ'))

const imgBottoms = $$('.img-bottom')
imgBottoms.forEach(imgBottom => imgBottom.onclick = ()=> window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ'))

const paymentDetail = $('.payment-detail')
const checked1 = ()=>{
  console.log
  $('#payment-1').checked = true
}
const checked2 = ()=>{
  $('#payment-2').checked = true
}

  trashes = $$('.fa-trash').forEach((trash)=>{
    trash.style.cursor = "pointer"
    trash.onclick = function(){
        function remove(trash, callback){
          trash.parentElement.parentElement.classList.add("fade")
          setTimeout(()=>{callback(trash,callback)},400)
    }
        function remove2(trash,callback){
            trash.parentElement.parentElement.classList.add("d-none")

          }

        remove(trash,remove2)
    }
  })





const request = ( url, params, method ) => {
    // All logic is here.
    let options = {
      method
  };
  if ( 'GET' === method ) {
      url += '?' + ( new URLSearchParams( params ) ).toString();
  } else {
      options.body = JSON.stringify( params );
  }
  
  return fetch( url, options ).then( response => response.json() );
};

const get = ( url, params ) => request( url, params, 'GET' );
const post = ( url, params ) => request( url, params, 'POST' );

get( 'http://localhost:8080/api/v1/student', )
post('http://localhost:8080/api/v1/student',{"name":"Test","dob":"2042-04-22","email":"test@gmail.com"})
.then( response => {
    // Do something with response.
    console.log(response)
} );






const page1 = $('#page-1')
const page2 = $('#page-2')
const btnPage1 = $('#page-1-button')
const btnPage2 = $('#page-2-button')
btnPage1.onclick = ()=> {
    page2.classList.add("d-none")
    page1.classList.remove("d-none")
    btnPage1.classList.add("active")
    btnPage2.classList.remove("active")
}
btnPage2.onclick = ()=> {
    page1.classList.add("d-none")
    page2.classList.remove("d-none")
    btnPage2.classList.add("active")
    btnPage1.classList.remove("active")
}

// Initialize and add the map
function initMap() {
  // The location of CTU
  const CTU = { lat: 10.03124188709686, lng:105.77091693878175 };
  // The map, centered at CTU
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: CTU,
  });
  // The marker, positioned at CTU
  const marker = new google.maps.Marker({
    position: CTU,
    map: map,
  });
}
