"use server";

import { google } from "googleapis";
import Auth0 from "../auth0";

const getTaskLists = async () => {
  try {
    const { token } = await Auth0.getAccessTokenForConnection({
      connection: "google-oauth2",
    });

    const googleTask = google.tasks("v1");

    const auth = new google.auth.OAuth2();

    auth.setCredentials({ access_token: token });

    const taskLists = await googleTask.tasklists.list({ auth });

    return taskLists.data.items;
  } catch (error) {
    throw error;
  }
};

export default getTaskLists;
