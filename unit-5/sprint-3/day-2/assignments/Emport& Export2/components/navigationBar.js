let navbar = () => {
  return ` <nav>
        
    <div class="nav-Img-logo">
        <a href="./index.html">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/2560px-Trivago.svg.png" alt="trivago logo">

        </a>
    </div>
<div id="nav-left-option">

<div class="nav-Favorites-icon">
<a href="./electronic.html"> <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
  </svg>
</div>
<div>electronic</div></a>
</div>


    <div class="nav-login-btn">
<button type="button" class="btn"><a href="./jewelery.html">jewelery</a></button>
    </div>


    <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="nav-menuBTN">
            Menu
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Recently viewed</a></li>
          <li><a class="dropdown-item" href="#">Help and Support</a></li>
         
        </ul>
      </div>


<div class="nav-INR">

<select class="form-select" aria-label="Default select example">
    <option selected>INR</option>
    <option value="1">EUR-Euro</option>
    <option value="2">GBP-British</option>
    <option value="3">USD-US Dollar</option>
    <option value="4">AED</option>
    <option value="3">ARS</option>
    <option value="4">AUD</option>
    <option value="5">AZN</option>
    <option value="6">BGN</option>
    <option value="7">BHD</option>
    <option value="8">BRL</option>
    <option value="9">CAD</option>
    <option value="10">CHF</option>
    <option value="11">CLP</option>
    <option value="12">CNY</option>
    <option value="5">AZN</option>
    <option value="6">BGN</option>
    <option value="7">BHD</option>
    <option value="8">BRL</option>
    <option value="9">CAD</option>
    <option value="10">CHF</option>
    <option value="11">CLP</option>
    <option value="12">CNY</option>

  </select>
</div>
</div>
</div>
</nav>
<div id="nav-Deals-from">
<b><span id="deals-1">Deals </span>from your favorite bookings sites.</b>
<p>Try searching for a city, a specific hotel, or even a landmark!</p>
</div>

<div id="nav-btn-house-Apartment">
<button>All stays</button>
<button>Hotel</button>
<button>House / Apartment</button>
</div>

<div id="nav-input-main">

<div id="nav-input-main-1">
<div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" id="searchLogo">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></div>
<div><input type="text" value="Mumbai"></div>
<div><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></button></div>
</div>
<div id="nav-input-main-2">
<div><p>Check in</p></div>
<div><input type="date"></div>
</div>


<div id="nav-input-main-3">
<div>Check out</div>
<div><input type="date"></div>
</div> 

<div id="nav-input-main-4">
<div>Check out</div>
<div><input type="date"></div>
</div> 

<div id="nav-input-main-5">
<button type="button" id="searchButton5">Search</button>
</div>

</div>

<div id="nav-trip-oyo-booking">
<img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/395.png" alt="agoda">
<img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/452.png" alt="host">
<img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/626.png" alt="booking">
<img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/2192.png" alt="makemy">
<img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/14.png" alt="etc">
<img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/634.png" alt="trip">
<img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/2452.png" alt="oyo">
<p>+100 more</p>
</div>`;
};

export default navbar;

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function app() {
  return {
    showDatepicker: false,
    datepickerValue: "",

    month: "",
    year: "",
    no_of_days: [],
    blankdays: [],
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

    initDate() {
      let today = new Date();
      this.month = today.getMonth();
      this.year = today.getFullYear();
      this.datepickerValue = new Date(
        this.year,
        this.month,
        today.getDate()
      ).toDateString();
    },

    isToday(date) {
      const today = new Date();
      const d = new Date(this.year, this.month, date);

      return today.toDateString() === d.toDateString() ? true : false;
    },

    getDateValue(date) {
      let selectedDate = new Date(this.year, this.month, date);
      this.datepickerValue = selectedDate.toDateString();

      this.$refs.date.value =
        selectedDate.getFullYear() +
        "-" +
        ("0" + selectedDate.getMonth()).slice(-2) +
        "-" +
        ("0" + selectedDate.getDate()).slice(-2);

      console.log(this.$refs.date.value);

      this.showDatepicker = false;
    },

    getNoOfDays() {
      let daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

      // find where to start calendar day of week
      let dayOfWeek = new Date(this.year, this.month).getDay();
      let blankdaysArray = [];
      for (var i = 1; i <= dayOfWeek; i++) {
        blankdaysArray.push(i);
      }

      let daysArray = [];
      for (var i = 1; i <= daysInMonth; i++) {
        daysArray.push(i);
      }

      this.blankdays = blankdaysArray;
      this.no_of_days = daysArray;
    },
  };
}
