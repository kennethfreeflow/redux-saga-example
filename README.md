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

- workspaces
  - channels
    - messages
  - users

## Global State Management

```
{
}
```
