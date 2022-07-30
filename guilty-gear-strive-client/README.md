[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# guilty-gear-strive-client

A front-end client for the Guilty Gear Strive API.

## User Stories
* As a user, I want to be able to create an account.
* As a user, I want to be able to sign in.
* As a user, I want to be able to change my password.
* As a user, I want to be able to sign out.
* As a user, I want to be able to see all characters.
* As a user, I want to be able to see information about a specific character.
* As a user, I want to be able to create a new character.
* As a user, I want to be able to update my characters.
* As a user, I want to be able to defeat my character (delete them).
* STRETCH: 
* As a user, I want to be able to create a move.
* As a user, I want to be able to give moves to any character.
* As a user, I want to be able to update my character's moves.
* As a user, I want to be able to delete my character's moves.

## Views

### User Views

| Route    | Description                         |
|----------|-------------------------------------|
| /sign-up | allows user to create a new account |
| /sign-in | allows users to sign into their account |
| /sign-out | allows users to sign out of their account |
| /change-password | allows user to change their password |

### Pet Views

| Route     | Description                         |
|-----------|-------------------------------------|
| /         | characters index |
| /characters/:id | show single character |
| /addCharacter   | new character page |

## Wireframes
TODO: Add Wireframes!

### Included Routes

This template comes with a handful of front-end routes that display
different components for user actions.

| Endpoint         | Component | `AuthenticatedRoute`? |
|------------------|-------------------|-------|
| `/sign-up`       | `SignUp`    | No |
| `/sign-in`       | `SignIn`    | No |
| `/change-password` | `ChangePassword`  | Yes |
| `/sign-out`        | `SignOut`   | Yes |

There is no HTTP verb listed because these are all front-end routes handled by
React. Some of these routes should not be available unless a user is signed in,
so they will use the `AuthenticatedRoute` component instead of the regular
`Route`. This custom component is provided as part of the template, and is not
a part of the React library (see more below).

## Features

### `<RequireAuth />`

This template contains a handy component for creating routes that require a
user to be authenticated before visiting. This component lives in
`src/auth/components/shared/RequireAuth.js` and is already required in `App`.

It was built with the latest version of React Router(v6) in mind.
It's a thin wrapper for a component in the element prop of React Router's `<Route/>` component. The only
difference is that it expects a prop called `user`, and if that prop is falsy,
it will render a `<Redirect />` that takes the user to `/sign-in`. **To use
it, you must pass it the user as a prop!**

It supports both the `component=` and `render=` attributes, but like `<Route />`
it will not forward props to the component passed as a child, the `user` prop, for instance, must be passed manually to the children. See the `/change-password` route as an example here:

```js
<Route
    path='/change-password'
    element={
        <RequireAuth user={user}>
            <ChangePassword msgAlert={msgAlert} user={user} />
        </RequireAuth>
    }
/>
```

### `<AutoDismissAlert />` Component

This template also already contains a component that displays user messages.
Messages are configurable via redux actions.  This component can be found in
`src/components/shared/AutoDismissAlert/AutoDismissAlert.js`. **There is no need to add
this component to your app. It is already required in `App`.**  A single
component instance is used to manage all alerts application-wide.

The alert can be used by passing the `alertMsg` method to a rendered route.  The
`alertMsg` method expects an object with a `heading`, `message`, and a `variant` property.

Use this component in conjunction with the `messages.js` file in the same
directory to create and manage all of your application messages in one place.

The `variant` property must be a Bootstrap alert variant, as this component is merely a
wrapper around the [react-bootstrap Alert
component](https://react-bootstrap.github.io/components/alerts/).  The types it
will accept are: 'primary', 'secondary', 'success', 'danger', 'warning', 'info',
'light', and 'dark'.

 To change the duration of the message, replace `5000` with a value of your
 choice (in milliseconds) in this component's `componentDidMount` method.

 The AutoDismissAlert is called by calling the `msgAlert()` as seen here in the SignUp Component, on the second `.then()` and the `.catch()`:

 ```js
signIn(credentials)
    .then((res) => setUser(res.data.user))
    .then(() =>
        msgAlert({
            heading: 'Sign In Success',
            message: messages.signInSuccess,
            variant: 'success',
        })
    )
    .then(() => navigate('/'))
    .catch((error) => {
        setEmail('')
        setPassword('')
        msgAlert({
            heading: 'Sign In Failed with error: ' + error.message,
            message: messages.signInFailure,
            variant: 'danger',
        })
    })
 ```

### `src/apiConfig.js`

This file will determine whether you're in a production or development
environment and choose an API URL accordingly. Don't forget to replace the
`production` URL with your deployed API's URL.

### Bootstrap

This template includes two different implementations of the classic Bootstrap
library we know and love.

#### `bootstrap`

The first implementation of Bootstrap comes from the `bootstrap` npm package,
and provides all of the normal Bootstrap classes and styling we were able to
use with the liquid template. This package is included in the
`src/index.js` file at the very top of the file. That means JSX in this
template can utilize Bootstrap classes like `btn`, `container`, `row`, etc.

See an example below:

```jsx
import React from 'react'

const AboutPage = () => (
  <div className="card">
    <div className="card-body">
      <h1 className="card-title">About Page</h1>
      <p className="card-text">There is a Bootstrap card on this page!</p>
    </div>
  </div>
)

export default AboutPage
```

> Note: Remember to use `className` not `class` in your JSX!

#### `react-bootstrap`

In addition to the classic Bootstrap classes we can plug into our JSX, this
template also comes with a special package called [`react-bootstrap`](https://react-bootstrap.github.io/).
This package allows us to use special React components that have been pre-built
according to the Bootstrap library.

Import components from the `react-bootstrap` library, then use them just like
regular components in your JSX!

See an example below:

```jsx
import React from 'react'
import Card from 'react-bootstrap/Card'

const AboutPage = () => (
  <Card>
    <Card.Body>
      <Card.Title>The About Page</Card.Title>
      <Card.Text>There is a Bootstrap card on this page!</Card.Text>
    </Card.Body>
  </Card>
)

export default AboutPage
```


## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
