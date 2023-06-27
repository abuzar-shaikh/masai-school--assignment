## React Redux Restaurant Display Application

<h2 style="color:#215dc8">
Maximum Marks: 20
</h2>

```
✅ Able to make submission: - 1 Mark
✅ Should have application title visible - 1 Mark
✅ Check Initial Redux Store Structure for Restaurants: - 1 Mark
✅ Get request should be made for restaurants when home page loads: - 1 Mark
✅ Restaurants state in store should update when restaurants loads on homepage: - 2 Mark
✅ Loading indicator should be there while homepage data is loading: - 1 Mark
✅ All restaurants should be displayed on home page: - 2 Marks
✅ All pagination buttons should be displayed on home page: - 1 Mark
✅ Current button should be disabled for current page: - 1 Marks
✅ All restaurants should be displayed on home page for 5th page: - 2 Marks
✅ All restaurants should be displayed on home page for last page`: - 2 Marks
✅ Check 1 for /restaurant/:id (dynamic route) if it working fine: - 2 Marks
✅ Check 2 for /restaurant/:id (dynamic route) if it working fine: - 1 Marks
✅ On booking restaurant a success message should show: - 2 Marks
```

<h2 style="color:#215dc8">
Installation:
</h2>

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

```
// install node_modules
npm install --engine-strict

// run locally
npm run start

```

<h2 style="color:red">
Note:
</h2>

1. Use `Axios` to make API calls
2. Use `Redux` to manage the state

<h2 style="color:#215dc8">
Folder Structure (Important Files)
</h2>

```
src
├── Components
|  ├── Navbar.jsx
|  ├── Pagination.jsx
|  └── RestaurantCard.jsx
├── Pages
|  ├── HomePage.jsx
|  └── RestaurantPage.jsx
├── Redux
|  ├── action.js
|  ├── actionTypes.js
|  ├── reducer.js
|  └── store.js
├── Routes
|  └── AllRoutes.jsx
├── App.css
├── App.js
└── index.js
```

<h2 style="color:#215dc8">
URL
</h2>

[https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants](https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants)

<h2 style="color:#215dc8">
Query Params
</h2>

[https://peerabduljabbar.notion.site/Get-all-restaurants-with-their-details-794815a94b7e4baab027b9050e6e8f33](https://peerabduljabbar.notion.site/Get-all-restaurants-with-their-details-794815a94b7e4baab027b9050e6e8f33)

<figure>
<img src="https://i.imgur.com/DdaN29O.png" width="100%"/>
<figcaption align = "center"><b>Fig.1 - Query Params</b></figcaption>
</figure>

<h2 style="color:#215dc8">
Routes
</h2>

- Implement routes in <span style="color:red">AllRoutes.jsx</span>

```
/                  -> HomePage.jsx
/restaurant/:id    -> RestaurantPage.jsx
```

<h2 style="color:#215dc8">
Problem Statement:
</h2>

Create a Restaurants Display App, where user can see list of restaurants on homepage and on each page there should be `9` restaurants visible. They can apply pagination . They should be able to see details of restaurant for specific selected restaurant.

<h3 style="color:red">
Step:- 1 Redux
</h3>

- Create redux store, and use thunk middleware
- Don't Use `combineReducer`
- All the API request will be made in `action.js`
- Action types are already given in the `actionTypes.js`
- Initial state for store should be

```
{
  isLoading: false,
  isError: false,
  restaurants: [],
  totalPages: 0,         ? you will get it from api response
  restaurant:{}          ? to store single restaurant information
}
```

<h3 style="color:red">
Step:- 2 Restaurants
</h3>

- App.js will have two compoments
  - `Navbar.jsx ` and `AllRoutes.jsx`
  - Complete <span style="color:red">Navbar.jsx</span> component
  - Create a div with `className="navbar"` and show a title `React Redux Restaurant Display App` inside `h1`
 
- Complete the <span style="color:red">HomePage.jsx</span> component.
- Show loading indicator while data is being fetched (given in boilerplate)

<figure>
<img src="https://i.imgur.com/cN7DMs4.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig.2 - Home page while data is Loading state</b></figcaption>
</figure>

- Update the store with the restaurants data when the component renders
- `isLoading` and `isError` should be updated accordingly as per the request made.
- Show the list of restaurants in grid format inside `div` with `className = "restaurants_wrapper"` (already given in boilerplate).
- Use the <span style="color:red">RestaurantCard.jsx</span> component for showing restaurant details
- Every restaurant card `div` will have className `restaurant_card` and following information
- You can use any tag you want to show below information

```
- Show Image in img tag with className `image`
- Show Restaurant name with className `name`
- Show Restaurant type with className `type`
- Show Restaurant votes with className `votes`
- Show Restaurant price with className `price`
- Show Restaurant rating with className `rating`
```

<figure>
<img src="https://i.imgur.com/TCfHRRl.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig.3 - Home page after data is loaded</b></figcaption>
</figure>

<h3 style="color:red">
Step:- 3 Pagination
</h3>

<figure>
<img src="https://i.imgur.com/ESEBwqG.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig.4 - Pagination</b></figcaption>
</figure>

- Complete the <span style="color:red">Pagination.jsx</span> component
- Render pagination button inside given `div` with `className="pagination_wrapper"`
- Current page button should be disabled by default and have background color `red`

<h3 style="color:red">
Step:- 4 Dynamic Routing
</h3>

<figure>
<img src="https://i.imgur.com/WSNNBsY.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig.5 - /restaurant/:id page</b></figcaption>
</figure>

- On clicking any restaurant card user will be redirected to `restaurant/:id` <span style="color:red">RestaurantPage.jsx</span>
- You can use `useNavigate` or `Link` from `react-router-dom` to navigate user
- Complete <span style="color:red">RestaurantPage.jsx</span> component
- Use `useParams` hook to get id from URL params
- Make an API call with this id to get details of restaurant
- Store received restaurant information in redux `restaurant` key
- Action types for this is already given in `actionTypes.js`
- Create Restaurant card `div` with `className = "restaurant_single_card"`
- You can use any tag you want to show below information

```
- Show Image in image tag with className `image`
- Show Restaurant name with className `name`
- Show Restaurant type with className `type`
- Show Restaurant votes with className `votes`
- Show Restaurant price with className `price`
- Show Restaurant rating with className `rating`
```

- A `Book Now!` button should be there to book restaurant with `className="book_now_btn"`
- On Clicking on the `Book Now!` button show a successful message `Restaurant Booked Successfully !!` with `className="success_msg"` inside `h1` tag
- If restaurant is successfully booked then `Book Now!` button should not visible
- You can maintain booking state locally using useState hook ( no need to make any post request or using redux store ). It can be a boolean value ( true or false )
- If restaurant is booked then show a `Link` for `Go To Home` with `className="go_back"` to navigate user to home `/`

<figure>
<img src="https://i.imgur.com/T3lkZgJ.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig.6 - After restaurant booked</b></figcaption>
</figure>

<h2 style="color:#215dc8">
Tested on cp.masaischool.com:
</h2>

<figure>
<img src="https://i.imgur.com/crBW00P.png" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig.7 - Tested on cp</b></figcaption>
</figure>

<h2 style="color:#215dc8">
General Instructions:
</h2>

- Do not remove `data-cy=’xxx` or `data-testid=xxx` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.
- You need to submit Github Link as well as Netlify/Vercel Link on Course Platform
- Ensure that the GitHub link is correct. Share the link from where the package.json exists

<h2 style="color:#215dc8">
General guidelines:
</h2>

- The system on cp.masaischool.com may take between 1-20 minutes for responding
- So we request you to read the problem carefully and debug before itself.
