"use server";

import { google } from "googleapis";
import Auth0 from "../auth0";

const getTasks = async (tasklist:string) => {
  try {
    const { token } = await Auth0.getAccessTokenForConnection({
      connection: "google-oauth2",
    });

    const googleTask = google.tasks("v1");

    const auth = new google.auth.OAuth2();

    auth.setCredentials({ access_token: token });

    const tasks = await googleTask.tasks.list({ auth, tasklist });

    return tasks.data.items;
  } catch (error) {
    throw error;
  }
};

export default getTasks;
