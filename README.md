# slack-firebase-redux-saga

## Stack

- React
- Firebase Firestore for database
- Redux for global state management
- MaterialUI for UI components
- Redux Saga middleware for handling business logic

## Database Structure

Firestore is a NoSQL database.

At the highest level is a workspace. A workspace contains many users and many channel, and within a channel are many messages. 

Each indented bulletpoint indicated a subcollection. 

```
- workspaces
  - channels
    - messages
  - users
```

## App State Management

We're going to use Redux for app state management.

```ts
// appState

{
  auth: {
    isSignedIn: true,
  },
  currentChannel: {
    id: "HEHEHEHE",
    isLoading: false,
  },
  currentWorkspace: {
    id: "Jejbfnjroskjsnsk",
    isLoading: false,
  },
  workspacesByID: {
    "Jejbfnjroskjsnsk": {
      title: "Something",
      photo: "https://..."
    }
  },
  channelsByID: {},
  usersByID: {}
}
```

auth

channelsByID

workspacesByID

usersByID

currentChannel

currentWorkspace
